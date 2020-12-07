function refreshInputs() {
    $('.st-select').dropdown();

    $('.st-input1__input').each(function () {
        if ($(this).val()) {
            $(this).closest('.st-input1').addClass('st-input1_filled');
        }
    });
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    if (!options.path) {
        options.path = '/';
    }

    if (!options.expires) {
        d = new Date(Date.now() + 1000000000000);
        options.expires = d.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            //target.style.top = "0";
            target.id = targetId;
            elem.closest(".js-copy-text").appendChild(target);
        }
        target.textContent = elem.textContent;
    }

    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInput($input) {
    let filled = true,
        error = '',
        parent = $input.closest('.st-input1'),
        parent2 = $input.closest('.form-group');
    if ($input.attr('type') == 'text') {
        if ($input.val().length < 1) {
            filled = false;
            error = 'Incorrectly';
        }
    }
    if ($input.attr('type') == 'tel') {
        if ($input.val().length < 18) {
            filled = false;
            error = 'Incorrectly';
        }
    }
    if ($input.attr('type') == 'password') {
        if ($input.val().length < 6) {
            filled = false;
            error = 'Слишком короткий';
        }
        if ($input.attr('name') == 'password-confirm' && $input.val() != $('.input-password').val()) {
            filled = false;
            error = 'Пароли не совпадают';
        }
    }
    if ($input.attr('type') == 'email') {
        if (!validateEmail($input.val())) {
            filled = false;
            error = 'Incorrectly';
        }
    }
    if ($input[0].tagName == 'TEXTAREA') {
        if ($input.val().length < 1) {
            filled = false;
            error = 'Required to fill';
        }
    }
    if (!filled) {
        parent.removeClass('st-input1_success');
        parent.addClass('st-input1_error');
        parent2.addClass('has-error');
    } else {
        parent.addClass('st-input1_success');
        parent.removeClass('st-input1_error')
        parent2.removeClass('has-error');
    }
    parent.find('.st-input1__error-msg').html(error);
    return filled;
}

function validateForm(form) {
    let filled = true;
    form.find('.required').each(function () {
        let result = validateInput($(this));
        if (filled) filled = result
    });
    form.find('.checkbox_group').each(function () {
        let checked = 0;
        $(this).find('input[type=checkbox]').each(function (e) {
            if ($(this).is(':checked')) {
                checked = 1;
            }
        });
        if (!checked) {
            if (!$(this).next('.st-input__error').length) {
                $(this).append('<p class="st-input1__error-msg">Please select at least one option</p>');
            }
            filled = false;
        }
    });
    return filled;
}

jQuery(document).ready(function ($) {

    $('.js-2-numbers').mask("00");
    $('.js-1-number').mask("0");

    $('[name=number2]').on('keyup', function (){$('[name=number3]').focus()})
    $('[name=number3]').on('keyup', function (){$('[name=number4]').focus()})
    $('[name=number4]').on('keyup', function (){$('[name=number5]').focus()})

    $('body').on('focus', '.st-input1__input', function () {
        let parent = $(this).closest('.st-input1');
        $(this).closest('.has-error ').removeClass('has-error');
        parent.addClass('st-input1_focused').addClass('st-input1_filled');
        parent.removeClass('st-input1_error');
        parent.find('.st-input1__error-msg').html('');
    });
    $('body').on('blur', '.st-input1__input', function () {
        let parent = $(this).closest('.st-input1');
        parent.removeClass('st-input1_focused');
        if (!$(this).val()) {
            parent.removeClass('st-input1_filled');
        }
    });

    $('.btn2_disabled').on('click', function (e) {
        return false;
    });

    $('.formv').submit(function () {
        let form = $(this),
            filled = validateForm(form);
        if (filled) {
            $('.ajax-loader').show();
            let data = form.serialize();
            $.post('index.php?route=common/footer/send', data, function (msg) {
                $('.ajax-loader').hide();
                $.fancybox.close();
                if (msg == 'success') {
                    console.log(msg)
                    $.fancybox.open({
                        src: '#modal-thanks',
                        type: 'inline',
                    });
                    form.find('input[type="text"],input[type="email"],input[type="tel"],input[type="file"], textarea').each(function () {
                        $(this).val('');
                    });
                } else {
                    console.log(msg)
                    $.fancybox.open({
                        src: '#modal-error',
                        type: 'inline',
                    });
                }
            });
        }
        return false;
    });

    $('.checkbox_group input').on('change', function () {
        $(this).closest('.checkbox_group').find('.st-input1__error-msg').remove();
    });

    refreshInputs();

    $(window).scroll(function () {
        currentScrollTop = $(window).scrollTop();
        if (currentScrollTop >= 300) {
            $('.top_button').show();
        } else {
            $('.top_button').hide();
        }
        ;
    });
    $('.top_button').on('click', function () {
        $('html,body').stop().animate({scrollTop: 0}, 400);
    });

});
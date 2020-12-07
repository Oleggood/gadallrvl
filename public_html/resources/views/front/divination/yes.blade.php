@extends('front.layouts.app')

@section('title-txt')
    Универсальное гадание да нет
@endsection

@section('meta-description')
    Гадать и получить точный ответ да или нет, делать ли мне или нет, какое правильное решение мне принять
@endsection

@section('meta-keywords')
    Лучшее гадание да нет онлайн бесплатно. Узнать судьбу. Узнать будущее. Гадать на ситуацию
@endsection

@section('main-header')
    Гадание да или нет
@endsection

@section('citata_txt')
    Человеку приходиться постоянно принимать решения. Донесенные нам знания предков помогут ...
@endsection

@section('main_content')
    <div class="flex-full process">
        <div class="container">
            <p class="color-yellow fz25 fw600 lh15 mb30">"Астрология, нумерология, Таро и многое другое сконценрировано в одном месте...Прямо
                здесь!"</p>
            <div class="flex flwrapng">
                <!--левый блок-->
                <div class="col6 gadanblock__left">
                    <p class="text-center color-white fw700 fz20 mb20">Заполните простую форму</p>
                    <p class="color-gray fz16 lh14 fontmediavid"><span class="color-gold"></span>Прежде всего постарайтесь <span class="color-gold">расслабиться</span>, <span class="color-gold">сосредоточтесь</span> на теме гадания.</p>
                    <p class="color-gray fz16 lh14 mb20 fontmediavid"><span class="color-gold">Не задумывайтесь</span> долго над ответами.</p>
                @include('front.inc.color')
                @include('front.inc.day_week')
                @include('front.inc.meaning_data')
                @include('front.inc.my_name')


                    <div class="gadanblock__button-wrap">
                        <button type="submit" class="btn">Гадать</button>
                    </div>
                </div>

                <!--левый блок-->

                    <!--правый блок-->
                    <div class="col6 gadanblock__right">
                        <p class="text-center color-white fw700 fz20 mb20 gadanblock__right_header">Результат гадания</p>
                        <div class="gadanblock__right-shar">
                            <div class="gadanblock__right-window">
                                <!--анимированный текст-->
                                <div class="centera">
                                    <p id="text" class="centera__txt">
                                        Lorem ipsum dolor
                                    </p>
                                </div>
                                <!--анимированный текст-->
                            </div>
                        </div>
                    </div>
                    <!--правый блок-->
                </div>
            </div>
        </div>
@endsection

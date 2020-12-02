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
    @include('front.inc.zero')
@endsection

{{--наследуется 2 уровень--}}
@section('zero')
{{--    @include('front.inc.color')--}}
    @parent
        @include('front.inc.color')
@endsection

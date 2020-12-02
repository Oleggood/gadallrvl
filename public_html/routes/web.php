<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('/front/home');
});

Route::get('divination-yes-no', function () {
    return view('/front/divination/yes');
});

//to do
//скорее всего проблема в путях

//Route::get('/', 'front.MainController@home');

//Route::get('divination-yes-no', 'MainController@yes');

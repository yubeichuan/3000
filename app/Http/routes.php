<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', 'SitesController@index');

Route::get('/article','ArticlesController@index');

Route::get('/article/{id}','ArticlesController@show');

Route::get('/login','LoginController@index');

Route::post('/login','LoginController@store');

Route::get('welcome','LoginController@welcome');
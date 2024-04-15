<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\myController;

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
    return view('welcome');
});
// Route::get("/api/show", [myController::class, 'showData']);
// Route::get("/create", [myController::class, 'createUsers']);
// Route::post("/create", [myController::class, 'createUsers']);

Route::get("/showUsers", [myController::class, 'showUsers']);


Route::get('/users', [myController::class, 'create']);
Route::post('/users', [myController::class, 'createUsers']);
Route::get('/updateweb/{id}', [myController::class, 'updateUsers']);

Route::get('/loginform', [myController::class, 'login']);
Route::post('/loginform', [myController::class, 'loginData']);


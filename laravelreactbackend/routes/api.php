<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\myController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/show", [myController::class, 'showData']);
Route::POST("/create", [myController::class, 'createUsers']);


Route::get('/updateUsers/{id}', [myController::class, 'updateUsers']);
Route::put('/updateUsersStore/{id}', [myController::class, 'updateUsersStore']);

Route::delete('/userDelete/{id}', [myController::class, 'userDelete']);
Route::get('/userView/{id}', [myController::class, 'userView']);
Route::post('/login', [myController::class, 'loginData']);




<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('/auth/register', 'App\Http\Controllers\Api\AuthController@createUser');
Route::post('/auth/login', 'App\Http\Controllers\Api\AuthController@loginUser');

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['auth:sanctum'], 'namespace' => 'App\Http\Controllers\Api'], function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    # Users
    Route::resource('users', 'UserController');

    # Consumers
    Route::resource('consumers', 'ConsumerController');
});

Route::resource('consumption', 'App\Http\Controllers\Api\ConsumptionController');

# Consumptions
Route::resource('activity', 'App\Http\Controllers\Api\ConsumptionController');

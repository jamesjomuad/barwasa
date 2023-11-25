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

// Requires api token to access routes
Route::group(['middleware' => ['auth:sanctum','throttle:160,1'], 'namespace' => 'App\Http\Controllers\Api'], function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    # Dashboard
    Route::resource('dashboard', 'DashboardController');

    # Billing
    Route::resource('billing', 'BillingController');

    # Transactions
    Route::resource('transactions', 'TransactionController');

    # Consumers
    Route::resource('consumers', 'ConsumerController');

    # Users
    Route::resource('users', 'UserController');

    # Role
    Route::resource('roles', 'RoleController');
});

// Consumptions endpoint; Ardiuno endpoint
Route::resource('consumption', 'App\Http\Controllers\Api\ConsumptionController');

Route::get('log', 'App\Http\Controllers\Api\ConsumptionController@store');

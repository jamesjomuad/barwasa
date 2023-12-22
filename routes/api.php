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
Route::group([
    'middleware' => ['auth:sanctum','throttle:160,1'],
    'namespace' => 'App\Http\Controllers\Api'],
    function(){

    // Called every login
    Route::get('/user', function (Request $request) {
        App\Http\Controllers\Api\ConsumerController::setStatus();
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

    # Announcement
    Route::resource('announcement', 'AnnouncementController');

    # Users
    Route::resource('users', 'UserController');

    # Role
    Route::resource('roles', 'RoleController');

    # Consumptions
    Route::resource('consumption', 'ConsumptionController');

    # Consumptions
    Route::resource('settings', 'SettingController');
});


// Consumptions endpoint; Ardiuno endpoint
Route::get('log', 'App\Http\Controllers\Api\ConsumptionController@store');
Route::get('consumer/set-active/{id}', 'App\Http\Controllers\Api\ConsumerController@isActive');

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookableController;
use App\Http\Controllers\BookableAvailabilityController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/bookables', [BookableController::class, 'index']);
Route::get('/bookables/{id}', [BookableController::class, 'find']);
Route::get('/bookables/{bookable}/availability', [BookableAvailabilityController::class, 'show']);

<?php

use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';

Route::middleware(['auth:sanctum'])->group(function () {
    Route::prefix('users')->namespace('App\Http\Controllers\User')->group(function () {
        Route::get('get-authenticated', 'GetAuthenticatedUserController');
    });
});

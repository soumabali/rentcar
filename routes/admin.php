<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

/** Master */
Route::group([
  'prefix' => 'user',
  'as'     => 'user.',
], function () {
  Route::resource('/', UserController::class);
});

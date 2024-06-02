<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

/** Master */
// Route::group([
//   'prefix' => 'user',
//   'as'     => 'user.',
// ], function () {
//   Route::resource('/', UserController::class);
// });

Route::get('/user', function () {
  return view('pages.users.index');
})->name('user.index');

Route::get('/mentor', function () {
  return view('pages.mentors.index');
})->name('mentor.index');

Route::get('/mentor2', function () {
  return view('pages.mentors.index2');
})->name('mentor2.index');

Route::get('/package', function () {
  return view('pages.packages.index');
})->name('package.index');

Route::get('/package/category', function () {
  return view('pages.package-categories.index');
})->name('package-category.index');

Route::get('/package/type', function () {
  return view('pages.package-types.index');
})->name('package-type.index');

Route::get('/branch', function () {
  return view('pages.branch.index');
})->name('branch.index');

Route::get('/order', function () {
  return view('pages.order.index');
})->name('order.index');

Route::get('/schedule', function () {
  return view('pages.schedule.index');
})->name('schedule.index');

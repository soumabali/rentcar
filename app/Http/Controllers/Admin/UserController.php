<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   */
  public function index(Request $request)
  {
    return view('pages.users.index');
  }

  /**
   * Store a new category.
   *
   */
  public function store()
  {
  }

  /**
   * Update current category.
   *
   * @return \Illuminate\Http\RedirectResponse
   */
  public function update()
  {
  }

  /**
   * Delete the category
   *
   * @return \Illuminate\Http\RedirectResponse
   */
  public function destroy()
  {
  }
}

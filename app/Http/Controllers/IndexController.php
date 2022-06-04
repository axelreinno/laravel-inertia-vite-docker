<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('home/index', [
            'darkMode' => (bool)random_int(0, 1),
            'headers' => $request->header()
        ]);
    }

    public function index_about(Request $request)
    {
        return Inertia::render('about/index', [
            'darkMode' => (bool)random_int(0, 1),
            'headers' => $request->header()
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class _SiteController extends Controller
{

    public function __invoke()
    {



        $contacts = Contact::query()
            ->with('user')
            ->orderBy('id', 'desc')
            ->get();


        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'contacts' => $contacts,
        ]);
    }
}

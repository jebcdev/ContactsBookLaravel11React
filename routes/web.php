<?php

use App\Http\Controllers\_SiteController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', _SiteController::class)->name('index');

Route::middleware(['auth'])->group(function () {

    Route::resource('/contacts', ContactController::class)
    ->except(['update','show'])
    ->names('contacts');

    Route::post('/contacts/{contact}', [ContactController::class,'update'])->name('contacts.update');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

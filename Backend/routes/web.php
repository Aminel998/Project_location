<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\ReservationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();
//CLIENT ROUTES
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/mesreservation', [App\Http\Controllers\ReservationController::class, 'mesReservation'])->name('mesreservation');

Route::get('/reservation', [App\Http\Controllers\ReservationController::class, 'show'])->name('reservation');
//adeed
Route::get('/home/annoncess', [App\Http\Controllers\AnnonceController::class, 'showPrem']);
//fin added
Route::get('/home/annonces', [App\Http\Controllers\AnnonceController::class, 'show'])->name('annoncesTable');

Route::get('/addreservation', [App\Http\Controllers\ReservationController::class, 'store'])->name('addReservation');

Route::get('/profile', [App\Http\Controllers\HomeController::class, 'profile'])->name('profile');

Route::post('/profile', [App\Http\Controllers\HomeController::class, 'updateImage'])->name('profile1');

Route::get('/client/home', [App\Http\Controllers\HomeController::class, 'clientHome'])->name('client.home')->middleware('client');

Route::get('/agent/home', [App\Http\Controllers\HomeController::class, 'agentHome'])->name('agent.home')->middleware('client');

//PARTENAIRE ROUTES

Route::get('/partenaire/cars', [App\Http\Controllers\CarController::class, 'show'])->name('carsTable');

Route::get('/partenaire/update/car', [App\Http\Controllers\CarController::class, 'passCar'])->name('passCar');

Route::post('/partenaire/updatecar', [App\Http\Controllers\CarController::class, 'updateCar'])->name('updateCar');

Route::get('/partenaire/deletecar', [App\Http\Controllers\CarController::class, 'deleteCar'])->name('deleteCar');

Route::get('/partenaire/insertcarview', function () {
    return view('partenaire.add_car');
})->name('insertCarView');

Route::post('/partenaire/cars', [App\Http\Controllers\CarController::class, 'insertCar'])->name('insertCar');

Route::get('/partenaire/reservations', [App\Http\Controllers\ReservationController::class, 'showReservations'])->name('showReservations');

Route::post('/partenaire/reservationsref', [App\Http\Controllers\ReservationController::class, 'refuserReservation'])->name('refuserReservation');

Route::post('/partenaire/reservationsacc', [App\Http\Controllers\ReservationController::class, 'accepterReservation'])->name('accepterReservation');

Route::get('/partenaire/annonces', [App\Http\Controllers\AnnonceController::class, 'showAnnonces'])->name('showAnnonces');

Route::get('/partenaire/deleteannonce', [App\Http\Controllers\AnnonceController::class, 'deleteAnnonce'])->name('deleteAnnonce');

Route::get('/partenaire/update/annonce', [App\Http\Controllers\AnnonceController::class, 'passAnnonce'])->name('passAnnonce');

Route::post('/partenaire/updateannonce', [App\Http\Controllers\AnnonceController::class, 'updateAnnonce'])->name('updateAnnonce');

Route::get('/partenaire/insertannonceview', function () {
    return view('partenaire.add_annonce');
})->name('insertAnnonceView');

Route::post('/partenaire/annonces', [App\Http\Controllers\AnnonceController::class, 'insertAnnonce'])->name('insertAnnonce');

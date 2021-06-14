<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\Api\AnnoController;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::resource('annonce','App\Http\Controllers\Api\AnnoController');


Route::post('/logina', [App\Http\Controllers\Auth\LoginController::class, 'login']);

Route::get('/mesannonces', [App\Http\Controllers\AnnonceController::class, 'showMesAnnonces']);

Route::post('/insertannonce', [App\Http\Controllers\AnnonceController::class, 'insertAnnoncee']);

Route::get('/mesvoitures', [App\Http\Controllers\CarController::class, 'showCars']);

Route::post('/insertcar', [App\Http\Controllers\CarController::class, 'insertCarr']);

Route::post('/deleteCarr', [App\Http\Controllers\CarController::class, 'deleteCarr']);

Route::post('/updateCarr', [App\Http\Controllers\CarController::class, 'updateCarr']);

Route::post('/deleteAnnoncee', [App\Http\Controllers\AnnonceController::class, 'deleteAnnoncee']);

Route::post('/updateAnnoncee', [App\Http\Controllers\AnnonceController::class, 'updateAnnoncee']);

Route::post('/updateprofitt1', [App\Http\Controllers\CarController::class, 'updateprofitt1']);

Route::get('/infoUserr', [App\Http\Controllers\CarController::class, 'infoUserr']);

Route::post('/updateprofitt2', [App\Http\Controllers\CarController::class, 'updateprofitt2']);

Route::get('/showMaVitrine', [App\Http\Controllers\AnnonceController::class, 'showMaVitrine']);

Route::get('/getAnnonce/{id_anno}', [App\Http\Controllers\AnnonceController::class, 'getAnnonce']);

Route::get('/store', [App\Http\Controllers\ReservationController::class, 'store']);

Route::get('/resviaclient', [App\Http\Controllers\ReservationController::class, 'show']);

Route::get('/mesreservationclient', [App\Http\Controllers\ReservationController::class, 'mesreservation']);

Route::get('/showResPart', [App\Http\Controllers\ReservationController::class, 'showReservations']);

Route::get('/refusreservation', [App\Http\Controllers\ReservationController::class, 'refuserReservation']);

Route::get('/accepterReservation', [App\Http\Controllers\ReservationController::class, 'accepterReservation']);

Route::get('/showuseer', [App\Http\Controllers\Auth\LoginController::class, 'showuseer']);

Route::get('/insertComment', [App\Http\Controllers\EvaluationController::class, 'insertComment']);

Route::get('/deleteReservation', [App\Http\Controllers\ReservationController::class, 'deleteReservation']);

Route::get('/showEvaluation', [App\Http\Controllers\EvaluationController::class, 'showEvaluation']);

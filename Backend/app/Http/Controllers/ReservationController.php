<?php

namespace App\Http\Controllers;

use App\Mail\MailPart;
use App\Mail\MailSender;
use App\Models\Car;
use App\Models\Annonce;
use App\Models\Reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class ReservationController extends Controller
{
    function show(Request $request){
            /*$data=$request->input('ida');
            $annonce = Annonce::where('id', $data)->get();
            $info_car = Car::where('id', $request->input('idcar'))->get();*/
            $input = $request->input('ida');
            $annonce = Annonce::join('cars', 'annonces.car_id', '=', 'cars.id')
                                ->select('annonces.*','cars.marque','cars.modele','cars.image')
                                ->where('annonces.id','=',$input)
                                ->get();
            return $annonce;
            return array($annonce,$info_car);
    }

    function mesreservation(Request $request){
        $idclient=$request->input('idclient');
        $reserv = Reservation::where('client_id', $idclient)->get();
        $annonce = Annonce::join('reservations', 'annonces.id', '=', 'reservations.annonce_id')
                            ->join('cars', 'annonces.car_id', '=', 'cars.id')
                            ->select('annonces.*','cars.marque','cars.modele','cars.image')
                            ->get();
        //dd($annonce);
        return $reserv;
    }

    function store(Request $request){
        $price = 0;
        $reservation = new Reservation();
        $prix = Annonce::select('prix')->where('id','=',$request->input('ida'))->get();
        $firstDate  = $request->input('dateDebutRes');
        $fr = date("Y-m-d H:i:s",strtotime($firstDate));
        $secondDate = $request->input('dateFinRes');
        $sc = date('Y-m-d H:i:s',strtotime($secondDate));
        $intvl = Carbon::parse($sc)->diff(Carbon::parse($fr));
        $minutes = $intvl->h*60+$intvl->i;
        $days = $intvl->d + $minutes/1440;
        foreach($prix as $p){
            $price = $p->prix;
        }
        $reservation::create([
            'dateDebutReservation' => $request->input('dateDebutRes'),
            'dateFinReservation' => $request->input('dateFinRes'),
            'prixTotal' => $price*$days,
            'statut' => '0',
            'client_id' => $request->input('idclient'),
            'annonce_id' => $request->input('ida'),
        ]);

        $anno = Annonce::where('id', $request->input('ida'))->update(['statut' => '1']);

        $return = 'VOTRE RESERVATION EST EN COURS DE TRAITEMENT !';
        return $return;

    }

    function showReservations(Request $request){
        //$reservation= Reservation::where('partenaire_id', '=', auth()->user()->id);
        
        $annonce = Reservation::join('annonces', 'reservations.annonce_id', '=', 'annonces.id')
                            ->select('reservations.*')
                            ->where('annonces.partenaire_id', '=',$request->input('id_part') )
                            ->get();
        return $annonce;
    } 

    function refuserReservation(Request $request){
        $anno = Annonce::where('id', $request->input('idann'))->update(['statut' => '0']);
        $reservation = Reservation::where('id', '=', $request->input('idres'))->delete();
        $annonce = Reservation::join('annonces', 'reservations.annonce_id', '=', 'annonces.id')
                            ->select('reservations.*')
                            ->where('annonces.partenaire_id', '=',$request->input('id_part') )
                            ->get();
        $to = User::select('email')->where('id','=', $request->input('idcl'))->get();
        $data = [
            'title' => 'REFUS DE RESERVATION',
            'body' => 'Nous sommes triste de vous informez que le partenaire a refuser de vous louer la voiture. -EQUIPE BOOKCAK'
        ];
        Mail::to($to)->send(new MailSender($data));
        return array($data,$annonce);
    }

    function accepterReservation(Request $request){
        $anno = Reservation::where('id', $request->input('idres'))->update(['statut' => '1']);
        $annonce = Reservation::join('annonces', 'reservations.annonce_id', '=', 'annonces.id')
                            ->select('reservations.*')
                            ->where('annonces.partenaire_id', '=',$request->input('id_part') )
                            ->get();
        $to = User::select('email')->where('id','=', $request->input('idcl'))->get();
        $data = [
            'title' => 'RESERVATION ACCEPTER',
            'body' => 'Nous sommes heureux de vous informer que votre reservation est acceptee, le partenaire va vous contacter par mail ou par appel telephonique prochainement. '
                
        ];
        Mail::to($to)->send(new MailSender($data));

        $toPart = User::select('email')->where('id','=', $request->input('idpart'))->get();
        $dataPart = [
            'title' => 'RESERVATION ACCEPTER',
            'body' => 'Voici les informations du client que vous avez accepter : ',
            'NAME' => User::select('name')->where('id','=', $request->input('idcl'))->get(),
            'EMAIL' => User::select('email')->where('id','=', $request->input('idcl'))->get(),
            'TEL' => User::select('tel')->where('id','=', $request->input('idcl'))->get(),
            'ADRESSE'=>User::select('adresse')->where('id','=', $request->input('idcl'))->get()
        ];
        Mail::to($toPart)->send(new MailPart($dataPart));

        return array($anno,$annonce,$dataPart);
    }

    function deleteReservation(Request $request){
        $reservation = Reservation::where('id', '=', $request->input('idres'))->delete();
    }

    
    
}


<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use App\Models\Evaluation;

class EvaluationController extends Controller
{
    function insertComment(Request $request){
        $statutRes = Reservation::select('statut')
                                ->where('id','=',$request->input('idres'))
                                ->get();
        $dateFinRes = Reservation::select('dateFinReservation')
                                    ->where('id','=',$request->input('idres'))
                                    ->get();
        
        $d = null ;
        foreach($dateFinRes as $date){
            $d = $date->dateFinReservation;
        }
        $st = 0;
        foreach($statutRes as $stat){
            $st = $stat->statut;
        }
        $date = date('Y-m-d H:i:s',strtotime($d));
        $now = date('Y-m-d H:i:s',strtotime(now()));
        //dd($d < now());
        if(($st == 1) && ($date < $now)){
            $comment = Evaluation::create([
                'idFrom'=>$request->input('idfrom'),
                'idTo'=>$request->input('idto'),
                'commentaire'=>$request->input('commentaire'),
                'dateEvaluation'=>now(),
                'note'=>$request->input('note'),
                'car_id'=>$request->input('idcar'),
                'reservation_id'=>$request->input('idres')
            ]);
            //dd('created');
        }
    $comments = Evaluation::where('reservation_id', '=', $request->input('idres'))->get();
    //return view( ,['comments' => $comments]);
    return array($statutRes,$dateFinRes);
    }
    function showEvaluation(Request $request){
        $comments = Evaluation::where('idTo', '=', $request->input('idcli'))->get();
        return $comments;
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Annonce;
use Illuminate\Http\Request;
use DB;
class AnnonceController extends Controller
{
    public function show(){
        $data = Annonce::where('premium','=','1')->paginate(5);
        return view('client', ['annonces'=>$data]);
    }
    //addded
    public function showPrem(){
        //$datass = DB::select('SELECT * FROM annonces');
        //return view('clientt', ['clientRepport'=>$datass]);
        $input = $request->all();
        $this->validate($request,[
            'email'=>'required|email',
            'password'=>'required',
        ]);
        auth()->attempt(array('email'=>$input['email'], 'password'=>$input['password']));
        $annonce = Annonce::join('cars', 'annonces.car_id', '=', 'cars.id')
                            ->select('annonces.*','cars.marque','cars.modele','cars.image')
                            ->where('annonces.partenaire_id','=',auth()->user()->id)
                            ->get();
        //$Annonces = Annonce::all();
        return $annonce;
    }
//find aded
    function showAnnonces(){
        $annonces = Annonce::where('partenaire_id', '=', auth()->user()->id)->get();
        return view('partenaire.part_annonce',['annonces' => $annonces]);
    }

    function deleteAnnonce(Request $request){
        $annonce = $request->input('idann');
        $annonces = Annonce::where('id', '=', $annonce)->delete();
        $annonces = Annonce::where('partenaire_id', '=', auth()->user()->id)->get();
        return view('partenaire.part_annonce',['annonces' => $annonces]);
    }

    function passAnnonce(Request $request){
        $idannonce = $request->input('idann');
        $infoAnnonce = Annonce::where('id','=',$idannonce)->get();
        return view('partenaire.update_annonce',['annonces' => $infoAnnonce]);
    }

    function updateAnnonce(Request $request){
        $annonce = Annonce::where('id', $request->input('idann'))->update([
                                                                    'dateDebut'=>$request->input('dateDebut'),
                                                                    'dateFin'=>$request->input('dateFin'),
                                                                    'statut'=>$request->input('statut'),
                                                                    'prix'=>$request->input('prix'),
                                                                    'premium'=>$request->input('premium'),
                                                                    'ville' =>$request->input('ville'),
                                                                    'description'=>$request->input('description'),
                                                                    'car_id'=>$request->input('idcar')
                                                                ]);
        $annonces = Annonce::where('partenaire_id', '=', auth()->user()->id)->get();
        return view('partenaire.part_annonce',['annonces' => $annonces]);
    }

    function insertAnnonce(Request $request){
        $annonce = Annonce::create([
                                    'dateDebut'=>$request->input('dateDebut'),
                                    'dateFin'=>$request->input('dateFin'),
                                    'statut'=>$request->input('statut'),
                                    'prix'=>$request->input('prix'),
                                    'premium'=>$request->input('premium'),
                                    'ville' =>$request->input('ville'),
                                    'description'=>$request->input('description'),
                                    'car_id'=>$request->input('idcar'),
                                    'partenaire_id' => auth()->user()->id
                                ]);

        $annonces = Annonce::where('partenaire_id', '=', auth()->user()->id)->get();
        return view('partenaire.part_annonce',['annonces' => $annonces]);
    }

    ////just added
    public function showMesAnnonces(Request $request){
        
        $input = $request->input();
        $annonce = Annonce::join('cars', 'annonces.car_id', '=', 'cars.id')
                            ->select('annonces.*','cars.marque','cars.modele','cars.image')
                            ->where('annonces.partenaire_id','=',$input)
                            ->get();
        return $annonce;
    }
// just fin added

 //insert annonce 

 function insertAnnoncee(Request $request){
    $annonce = Annonce::create([
        'dateDebut'=>$request->input('dateDebut'),
        'dateFin'=>$request->input('dateFin'),
        'statut'=>'0',
        'prix'=>$request->input('prix'),
        'premium'=>$request->input('premium'),
        'ville' =>$request->input('ville'),
        'description'=>$request->input('description'),
        'car_id'=>$request->input('car_id'),
        'partenaire_id' => $request->input('partenaire_id'),
    ]);

    return $annonce;
}

//fin de insert
function deleteAnnoncee(Request $request){
    $annonce = $request->input('id');
    $input = $request->input('partenaire_id');
    $annonces = Annonce::where('id', '=', $annonce)->delete();
    $annonces = Annonce::where('partenaire_id', '=', $input)->get();
    return $annonces;
}

    function updateAnnoncee(Request $request){
        $id_part = $request->input('partenaire_id');
        $id_anno = $request->input('id');
        $annonce = Annonce::where('id',$id_anno )->update([
                                                                    'dateDebut'=>$request->input('dateDebut'),
                                                                    'dateFin'=>$request->input('dateFin'),
                                                                    'statut'=>'0',
                                                                    'prix'=>$request->input('prix'),
                                                                    'ville' =>$request->input('ville'),
                                                                    'description'=>$request->input('description'),
                                                                    'car_id'=>$request->input('car_id')
                                                                ]);
        $annonces = Annonce::where('id', '=', $id_anno)->get();
        return $annonces;
    }

    public function showMaVitrine(){
        
        $annonce = Annonce::join('cars', 'annonces.car_id', '=', 'cars.id')
                            ->select('annonces.*','cars.*')
                            ->get();
        return $annonce;
    }
    public function getAnnonce($id_anno){
        return Annonce::join('cars', 'annonces.car_id', '=', 'cars.id')
        ->select('annonces.*','cars.marque','cars.modele','cars.etat','cars.carburant','cars.couleur','cars.airBag','cars.nbrPlace','cars.image')->where('cars.id', '=', $id_anno)->get();
    }
   public function getprem(){
    $data = Annonce::where('premium','=','Premium')->get();
    return view('client', ['annonces'=>$data]);
   }

}

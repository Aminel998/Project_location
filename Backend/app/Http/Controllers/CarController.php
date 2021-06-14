<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use App\Models\Annonce;


class CarController extends Controller
{
    function show(){
        $cars = Car::where('partenaire_id','=',auth()->user()->id)->get();
        return view('partenaire.part_car',['cars'=>$cars]);
    }

    function passCar(Request $request){
        $idcar = $request->input('idcar');
        $infoCar = Car::where('id','=',$idcar)->get();
        return view('partenaire.update_car',['cars' => $infoCar]);
    }

    function updateCar(Request $request){
        $carimage = "";
        if($request->hasFile('image')){
            $image = $request->file('image');
            $filename = $request->input('idcar').'.jpg';
            
            Image::make($image)->resize(300,300)->save(public_path().'/cars/' . $filename);
            
            $carimage = $filename;
            
        }else{
            $carimage = 'default.jpg';
        }
        $car = Car::where('id', $request->input('idcar'))->update([
                                                                    'marque' => $request->input('marque'),
                                                                    'modele' => $request->input('modele'),
                                                                    'etat' => $request->input('etat'),
                                                                    'carburant' => $request->input('carburant'),
                                                                    'couleur' => $request->input('couleur'),
                                                                    'airBag' => $request->input('airbag'),
                                                                    'nbrPlace' => $request->input('nbrplace'),
                                                                    'image' => $carimage,
                                                                    'description' => $request->input('description'),
                                                                ]);
        $cars = Car::where('partenaire_id','=',auth()->user()->id)->get();
        return view('partenaire.part_car',['cars'=>$cars]);
        
    }

    function deleteCar(Request $request){
        $car = $request->input('idcar');
        $cars = Car::where('id', '=', $car)->delete();
        $cars = Car::where('partenaire_id','=',auth()->user()->id)->get();
        return view('partenaire.part_car',['cars'=>$cars]);
    }

    function insertCar(Request $request){
        $car = Car::create([
                            'marque' => $request->input('marque'),
                            'modele' => $request->input('modele'),
                            'etat' => $request->input('etat'),
                            'carburant' => $request->input('carburant'),
                            'couleur' => $request->input('couleur'),
                            'airBag' => $request->input('airbag'),
                            'nbrPlace' => $request->input('nbrplace'),
                            'image' => 'default.jpg',
                            'description' => $request->input('description'),
                            'partenaire_id' => auth()->user()->id
                        ]);
        $carimage = "";
        if($request->hasFile('image')){
            $image = $request->file('image');
            $filename = $car->id.'.jpg';
            
            Image::make($image)->resize(300,300)->save(public_path().'/cars/' . $filename);
            
            $carimage = $filename;
            
        }else{
            $carimage = 'default.jpg';
        }
        $car->update(['image'=>$carimage]);
        $cars = Car::where('partenaire_id','=',auth()->user()->id)->get();
        return view('partenaire.part_car',['cars'=>$cars]);
    }
 //insert car made by me
 function insertCarr(Request $request){
            $car = Car::create([
                'marque' => $request->input('marque'),
                'modele' => $request->input('modele'),
                'etat' => $request->input('etat'),
                'carburant' => $request->input('carburant'),
                'couleur' => $request->input('couleur'),
                'airBag' => $request->input('airBag'),
                'nbrPlace' => $request->input('nbrPlace'),
                'image' => 'default.jpg',
                'description' => 'just une description simple',
                'partenaire_id' => $request->input('partenaire_id'),
            ]);
        $carimage = "";
        if($request->hasFile('image')){
        $image = $request->file('image');
        $filename = $car->id.'.jpg';

        Image::make($image)->resize(300,300)->save('../../rent-car/src/Component/Partenaire/img/' . $filename);

        $carimage = $filename;

        }else{
        $carimage = 'default.jpg';
        }
        $car->update(['image'=>$carimage]);
        $cars = Car::where('partenaire_id','=',$request->input('part_idd'))->get();
        return $car;
    }

    function showCars(Request $request){
        $input = $request->input();

        $cars = Car::where('partenaire_id','=',$input)->get();
        return $cars;
    }

    function deleteCarr(Request $request){
        $car = $request->input('id');
        $input = $request->input('partenaire_id');
        $cars = Car::where('id', '=', $car)->delete();
        $cars = Car::where('partenaire_id','=',$input)->get();
        $annonces = Annonce::where('car_id', '=', $car)->delete();
        $annonces = Annonce::where('partenaire_id', '=', $input)->get();
        return array($cars,$annonces);
    }

    function updateCarr(Request $request){
        $id_part = $request->input('partenaire_id');
        $id_car = $request->input('id');
        $car = Car::where('id',$id_car)->update([
                                                                    'marque' => $request->input('marque'),
                                                                    'modele' => $request->input('modele'),
                                                                    'etat' => $request->input('etat'),
                                                                    'carburant' => $request->input('carburant'),
                                                                    'couleur' => $request->input('couleur'),
                                                                    'airBag' => $request->input('airBag'),
                                                                    'nbrPlace' => $request->input('nbrPlace'),
                                                                ]);
        $cars = Car::where('id','=',$id_car)->get();
        return $cars;
        
    }

    public function infoUserr(Request $request) {
        $id_part = $request->input('id');
        $user = User::where('id','=', $id_part)->get();
        return $user;
    }

    function updateprofitt1(Request $request){
        $id_part = $request->input('id');
        $user = User::where('id', '=',$id_part)->update([
                                                                    'name' => $request->input('name'),
                                                                    'age' => $request->input('age'),
                                                                    'ville' => $request->input('ville'),
                                                                ]);
        $users = User::where('id','=',$id_part)->get();
        return $users;
        
    }
    function updateprofitt2(Request $request){
        $id_part = $request->input('id');
        $user = User::where('id', '=',$id_part)->update([
                                                                    'tel' => $request->input('tel'),
                                                                    'adresse' => $request->input('adresse'),
                                                                ]);
        $users = User::where('id','=',$id_part)->get();
        return $users;
        
    }
}

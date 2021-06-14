<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use App\Models\Annonce;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if(auth()->user()->function==2){
            $data = Annonce::orderBy('premium','DESC')->paginate(5);
            return view('client', ['annonces'=>$data]);
        }else if(auth()->user()->function==1){
            return view('home');
        }else if(auth()->user()->function==0){
            return view('agent');
        }
        
    }
    public function clientHome()
    {
        $data = Annonce::orderBy('premium','DESC')->paginate(5);
        return view('client', ['annonces'=>$data]);
    }
    public function infoUser() {
        $user = User::where('id','=',auth()->user()->id)->get();
        return view('profileRT',['User'=>$user]);
    }
    public function updateImage(Request $request){
        if($request->hasFile('image')){
            $user = Auth::user();
            $image = $request->file('image');
            $filename = $user->id.'.jpg';
            
            Image::make($image)->resize(300,300)->save(public_path().'/profileImages/' . $filename);
            
            $user->image = $filename;
            
            $user->save();
        }
        return view('profile', array('user'=>Auth::user()) );
    }

    public function profile()
    {
        return view('profile', array('user'=>Auth::user()));
    }

    public function agentHome()
    {
        return view('agent');
    }

    //update a part of the profile 

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
    public function infoUserr(Request $request) {
        $id_part = $request->input('id');
        $user = Image::where('id','=', $id_part)->get();
        return $user;
    }
}

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'tel' => ['required' , 'regex:/0(5|6)[0-9]{8}/'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        $user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'function' => $data['function'],
            'cin' => $data['cin'],
            'ville' => $data['ville'],
            'adresse'=>$data['adresse'],
            'age' => $data['age'],
            'tel' => $data['tel'],
            'image' => $data['image'],
            'password' => Hash::make($data['password']),
        ]);
        
        /*if(request()->hasFile('image')){
            $image = request()->file('image')->getClientOriginalName();
            request()->file('image')->storeAs('/profilImages/', $user->id.'.jpg');
            $user->update(['image'=>$image]);
        }*/
        
        if(request()->hasFile('image')){
           
            $image = request()->file('image');
            $filename = $user->id.'.jpg';
            
            Image::make($image)->resize(300,300)->save(public_path().'/profileImages/' . $filename);
            
            $user->update(['image'=>$filename]);
        }


        return $user;

    }
}

<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;

use App\Models\User;
use App\Models\Annonce;

use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request){
        $input = $request->all();
        $this->validate($request,[
            'email'=>'required|email',
            'password'=>'required',
        ]);
        
        if(auth()->attempt(array('email'=>$input['email'], 'password'=>$input['password']))){
            
            if(auth()->user()->function==0){
                //return redirect()->route('client.home');
                return auth()->user();
            }
            else if(auth()->user()->function==1) {
                
                return auth()->user();
                //return redirect()->route('home');
            }
        }else{
            //return redirect()->route('login')->with('error','EMAIL OR PASSWORD ARE WRONG !');
            return 'wrong password';
        }
    }

    public function logina(Request $request){
        $user = User::where('email',$request->email)->get();
        return $user;
        }
    public function showuseer(Request $request){
            $myyseer = $request->input('idus');
            $user = User::where('id','=',$myyseer)->get();
            return $user;
            }
}

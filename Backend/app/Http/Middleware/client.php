<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class client
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(auth()->user()->function==0 || auth()->user()->function==2){
            return $next($request);
        }
        return redirect('home')->with('error','you are not a client !!');
    }
}

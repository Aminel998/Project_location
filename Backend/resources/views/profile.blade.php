@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
                <h1>PROFILE</h1>
                <img src="/profileImages/{{ $user->image }}" alt="NO IMAGE" style="width:150px; height:150px; float:left;border-radius:50%; margin-right:25px; ">
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    Hello {{ $user->name }} !
                    {{ __('You are logged in!') }}
                    
                    <form action="{{ route('profile1') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="file" name="image">
                        <input type="submit" class="pull-right btn btn-sm btn-primary">
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

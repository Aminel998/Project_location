@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
                    <h1>Bonjour {{ auth()->user()->name }}</h1>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    
                    <img src="/cars/default.jpg" alt="NO IMAGE" style="width:150px; height:150px; float:left;border-radius:50%; margin-right:25px; ">

                    <form action="{{ route('insertCar') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <input type="file" name="image" ><br/>
                        <input type="text" name="marque" placeholder="MARQUE"/><br/>
                        <input type="text" name="modele" placeholder="MODELE" /><br/>
                        <input type="text" name="etat" placeholder="ETAT" /><br/>
                        <input type="text" name="carburant" placeholder="CARBURANT" /><br/>
                        <input type="text" name="couleur" placeholder="COULEUR" /><br/>
                        <input type="text" name="airbag" placeholder="AIRBAG" /><br/>
                        <input type="text" name="nbrplace" placeholder="NOMBRE DE PLACE" /><br/>
                        <input type="text" name="description" placeholder="DESCRIPTION" /><br/>
                        <button type="submit" class="btn btn-primary">ADD CAR</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

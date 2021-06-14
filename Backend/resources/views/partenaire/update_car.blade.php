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
                    @foreach ($cars as $car)
                    <img src="/cars/{{ $car->image }}" alt="NO IMAGE" style="width:150px; height:150px; float:left;border-radius:50%; margin-right:25px; ">

                    <form action="{{ route('updateCar') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="idcar" value="{{ $car->id }}">
                        <input type="file" name="image" value="{{ $car->image }}"><br/>
                        <input type="text" name="marque" value="{{ $car->marque }}" placeholder="MARQUE"/><br/>
                        <input type="text" name="modele" value="{{ $car->modele }}" placeholder="MODELE" /><br/>
                        <input type="text" name="etat" value="{{ $car->etat }}" placeholder="ETAT" /><br/>
                        <input type="text" name="carburant" value="{{ $car->carburant }}" placeholder="CARBURANT" /><br/>
                        <input type="text" name="couleur" value="{{ $car->couleur }}" placeholder="COULEUR" /><br/>
                        <input type="text" name="airbag" value="{{ $car->airBag }}" placeholder="AIRBAG" /><br/>
                        <input type="text" name="nbrplace" value="{{ $car->nbrPlace }}" placeholder="NOMBRE DE PLACE" /><br/>
                        <input type="text" name="description" value="{{ $car->description }}" placeholder="DESCRIPTION" /><br/>
                        <button type="submit" class="btn btn-primary">MODIFIER</button>
                    </form>
                    @endforeach
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

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
                    <h2>MODIFIER ANNONCE</h2>
                    @foreach ($annonces as $annonce)
                    
                    <form action="{{ route('updateAnnonce') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="idann" value="{{ $annonce->id }}">
                        <input type="datetime-local" name="dateDebut" value="{{ $annonce->dateDebut }}" placeholder="DATE DE DEBUT" required/><br/>
                        <input type="datetime-local" name="dateFin" value="{{ $annonce->dateFin }}" placeholder="DETE DE FIN" required/><br/>
                        <input type="number" min="0" max="1" name="statut" value="{{ $annonce->statut }}" placeholder="STATUT" /><br/>
                        <input type="number" name="prix" value="{{ $annonce->prix }}" placeholder="PRIX" /><br/>
                        <input type="text" name="ville" value="{{ $annonce->ville }}" placeholder="VILLE" /><br/>
                        <input type="number" min="0" max="1" name="premium" value="{{ $annonce->premium }}" placeholder="PREMIUM" /><br/>
                        <input type="text" name="description" value="{{ $annonce->description }}" placeholder="DESCRIPTION" /><br/>
                        <input type="number" name="idcar" value="{{ $annonce->car_id }}" placeholder="ID CAR" /><br/>
                        <button type="submit" class="btn btn-primary">MODIFIER</button>
                    </form>
                    @endforeach
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

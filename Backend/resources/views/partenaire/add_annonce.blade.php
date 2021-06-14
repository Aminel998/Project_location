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
                    <h2>ADD ANNONCE</h2>
                    
                    <form action="{{ route('insertAnnonce') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <input type="datetime-local" name="dateDebut" placeholder="DATE DE DEBUT" required/><br/>
                        <input type="datetime-local" name="dateFin" placeholder="DETE DE FIN" required/><br/>
                        <input type="number" min="0" max="1" name="statut" placeholder="STATUT" required/><br/>
                        <input type="number" name="prix"  placeholder="PRIX" required/><br/>
                        <input type="text" name="ville" placeholder="VILLE" required/><br/>
                        <input type="number" min="0" max="1" name="premium" placeholder="PREMIUM" required/><br/>
                        <input type="text" name="description" placeholder="DESCRIPTION" required/><br/>
                        <input type="number" name="idcar"  placeholder="ID CAR" required/><br/>
                        <button type="submit" class="btn btn-primary">AJOUTER</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

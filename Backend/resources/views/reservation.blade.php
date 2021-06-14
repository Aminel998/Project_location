@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                </div>
                <h1>RESERVATION WEB PAGE </h1>
                <h2>Information sur l'annonce </h2>
                @foreach($annonces as $annonce)
                <div class="form-group row">
                    <label for="idann" class="col-md-4 col-form-label text-md-right">{{ __('ID ANNONCE : ') }}</label>
                    <div class="col-md-6">
                        <input id="idann" type="text" class="form-control" name="idann" value="{{ $ann = $annonce->id}}" disabled autofocus>
                    </div>
                        
                    <label for="prix" class="col-md-4 col-form-label text-md-right">{{ __('Prix : ') }}</label>
                    <div class="col-md-6">
                        <input id="prix" type="text" class="form-control" name="prix" value="{{ $annonce->prix }}" disabled autofocus>
                    </div>

                    <label for="dateDebut" class="col-md-4 col-form-label text-md-right">{{ __('Date de debut : ') }}</label>
                    <div class="col-md-6">
                        <input id="dateDebut" type="text" class="form-control" name="dateDebut" value="{{ $annonce->dateDebut }}" disabled autofocus>
                    </div>
                    
                    <label for="dateFin" class="col-md-4 col-form-label text-md-right">{{ __('Date de fin : ') }}</label>
                    <div class="col-md-6">
                        <input id="dateFin" type="text" class="form-control" name="dateFin" value="{{ $annonce->dateFin }}" disabled autofocus>
                    </div>

                    <label for="ville" class="col-md-4 col-form-label text-md-right">{{ __('Ville : ') }}</label>
                    <div class="col-md-6">
                        <input id="ville" type="text" class="form-control" name="ville" value="{{ $annonce->ville }}" disabled autofocus>
                    </div>

                    <label for="description" class="col-md-4 col-form-label text-md-right">{{ __('Description : ') }}</label>
                    <div class="col-md-6">
                        <input id="description" type="text" class="form-control" name="description" value="{{ $annonce->description }}" disabled autofocus>
                    </div>
                </div>
                @endforeach

                <h2>Information sur la voiture</h2>
                @foreach($voitures as $voiture)
                <span>ID: {{ $car = $voiture->id }} </span>
                
                <span>MARQUE: {{ $voiture->marque }} </span>
                <span>MODELE: {{ $voiture->modele }} </span>
                <span>ETAT: {{ $voiture->etat }} </span>
                <span>CARBURANT: {{ $voiture->carburant }} </span>
                <span>COULEUR: {{ $voiture->couleur }} </span>
                <span>AIRBAG: {{ $voiture->airBag }} </span>
                <span>NOMBRE DE PLACES: {{ $voiture->nbrPlace }} </span>
                <span>IMAGE: {{ $voiture->image }} </span>
                <span>ID DU PARTENAIRE: {{ $voiture->partenaire_id }} </span>
                @endforeach
                <form action="{{ route('addReservation') }}" method="GET">
                    @csrf
                    <input type="hidden" name="ida" value="{{ $ann }}">
                    <input type="hidden" name="idcar" value="{{ $car }}">
                    <input type="hidden" name="idclient" value="{{ auth()->user()->id }}">
                    <div class="form-group row">
                        <label for="dateDebutRes" class="col-md-4 col-form-label text-md-right">{{ __('Date de debut de la RESERVATION : ') }}</label>
                        <div class="col-md-6">
                            <input id="dateDebutRes" type="datetime-local" class="form-control" name="dateDebutRes" required autofocus>
                        </div>
                        <label for="dateFinRes" class="col-md-4 col-form-label text-md-right">{{ __('Date de fin de la RESERVATION : ') }}</label>
                        <div class="col-md-6">
                            <input id="dateFinRes" type="datetime-local" class="form-control" name="dateFinRes" required autofocus>
                        </div>
                        <button type="submit" class="btn btn-success">Envoyer mes informations</button>
                    </div>
                </form>
                
                
                
        </div>
    </div>
</div>

<script>

</script>


@endsection

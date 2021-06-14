@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
                    <h1>Mes ANNONCES</h1>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                        <a href="{{ route('insertAnnonceView') }}"><button type="submit" class="btn btn-success"> ADD ANNONCE </button></a>
                        <table class="table table-striped table-bordered table-hover">
                            <tr>
                                <td>ID</td>
                                <td>DATE DEBUT</td>
                                <td>DATE FIN</td>
                                <td>CAR ID</td>
                                <td>STATUT</td>
                                <td>PRIX</td>
                                <td>PREMIUM</td>
                                <td>VILLE</td>
                                <td>DESCRIPTION</td>
                                <td>MODIFIER</td>
                                <td>SUPPRIMER</td>
                            </tr>
                            @foreach($annonces as $annonce)
                            <tr>
                                <td>{{ $annonce->id }}</td>
                                <td>{{ $annonce->dateDebut }}</td>
                                <td>{{ $annonce->dateFin }}</td>
                                <td>{{ $annonce->car_id }}</td>
                                <td>{{ $annonce->statut }}</td>
                                <td>{{ $annonce->prix }}</td>
                                <td>{{ $annonce->premium }}</td>
                                <td>{{ $annonce->ville }}</td>
                                <td>{{ $annonce->description }}</td>
                                <td>
                                    <form action="{{ route('passAnnonce') }}" method="get">
                                        @csrf
                                        <input type="hidden" name="idann" value="{{ $annonce->id }}">
                                        <button type="submit" class="btn btn-primary"> MODIFIER </button>
                                    </form> 
                                </td>
                                <td>
                                    <form action="{{ route('deleteAnnonce') }}" method="get">
                                        @csrf
                                        <input type="hidden" name="idann" value="{{ $annonce->id }}">
                                        <button type="submit" class="btn btn-danger"> SUPPRIMER </button>
                                    </form> 
                                </td>

                            </tr>
                            @endforeach

                        </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
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
                <h1>MES RESERVATIONS </h1>
               
                
                    <table class="table table-striped table-bordered table-hover">
                        <tr>
                            <td>ID de la Reservation</td>
                            <td>Date de debut</td>
                            <td>Date de Fin</td>
                            <td>ID CAR</td>
                            <td>MARQUE</td>
                            <td>MODELE</td>
                            <td>ID Partenaire</td>
                            <td>prix</td>
                            <td>Description</td>
                        </tr>
                        @foreach($reservations as $reservation)
                        <tr>
                            <td>{{ $reservation->id }}</td>
                            <td>{{ $reservation->dateDebutReservation }}</td>
                            <td>{{ $reservation->dateFinReservation }}</td>
                            @foreach($annonces as $annonce)
                            @if($annonce->id == $reservation->annonce_id)
                                <td>{{ $annonce->car_id }}</td>
                                <td>{{ $annonce->marque }}</td>
                                <td>{{ $annonce->modele }}</td>
                                <td>{{ $annonce->partenaire_id }}</td>
                                <td>{{ $annonce->prix }}</td>
                                <td>{{ $annonce->description }}</td>
                            @endif
                            @endforeach
                        </tr>
                        @endforeach
                    </table>
                
                
                
        </div>
    </div>
</div>

<script>

</script>


@endsection

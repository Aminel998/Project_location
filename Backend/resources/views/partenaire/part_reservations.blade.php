@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
                    <h1>Mes RESERVATIONS</h1>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                        <table class="table table-striped table-bordered table-hover">
                            <tr>
                                <td>ID RESERVATION</td>
                                <td>DATE DEBUT DE RESERVATION</td>
                                <td>DATE FIN DE RESERVATION</td>
                                <td>PRIX TOTAL</td>
                                <td>CLIENT</td>
                                <td>ANNONCE</td>
                                <td>ACCEPTER</td>
                                <td>REFUSER</td>
                            </tr>
                            @foreach($reservations as $reservation)
                            @if( $reservation->dateFinReservation > now() )
                                <tr>
                                    
                                    <td>{{ $reservation->id }}</td>
                                    <td>{{ $reservation->dateDebutReservation }}</td>
                                    <td>{{ $reservation->dateFinReservation }}</td>
                                    <td>{{ $reservation->prixTotal }}</td>
                                    <td>
                                        <form action="" method="get">
                                            @csrf
                                            <input type="hidden" name="idcl" value="{{ $reservation->client_id }}">
                                            <button type="submit" class="btn btn-success"> CONSULTER PROFILE </button>
                                        </form> 
                                    </td>
                                    <td>
                                        <form action="" method="get">
                                            @csrf
                                            <input type="hidden" name="idann" value="{{ $reservation->annonce_id}}">
                                            <button type="submit" class="btn btn-success"> CONSULTER L'ANNONCE </button>
                                        </form> 
                                    </td>
                                    <td>
                                        <form action="{{ route('accepterReservation') }}" method="post">
                                            @csrf
                                            <input type="hidden" name="idres" value="{{ $reservation->id }}">
                                            <input type="hidden" name="idcl" value="{{ $reservation->client_id }}">
                                            <input type="hidden" name="idann" value="{{ $reservation->annonce_id }}">
                                            <button type="submit" class="btn btn-primary"> ACCEPTER </button>
                                        </form> 
                                    </td>
                                    <td>
                                        <form action="{{ route('refuserReservation') }}" method="post">
                                            @csrf
                                            <input type="hidden" name="idres" value="{{ $reservation->id }}">
                                            <input type="hidden" name="idcl" value="{{ $reservation->client_id }}">
                                            <input type="hidden" name="idann" value="{{ $reservation->annonce_id }}">
                                            <button type="submit" class="btn btn-danger"> REFUSER </button>
                                        </form> 
                                    </td>

                                </tr>
                            @endif
                            
                            @endforeach

                        </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

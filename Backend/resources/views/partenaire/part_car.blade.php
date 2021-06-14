@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
                    <h1>Mes VOITURES</h1>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                        <a href="{{ route('insertCarView') }}"><button type="submit" class="btn btn-success"> ADD CAR </button></a>
                        <table class="table table-striped table-bordered table-hover">
                            <tr>
                                <td>IMAGE</td>
                                <td>ID VOITURE</td>
                                <td>MARQUE</td>
                                <td>MODELE</td>
                                <td>CARBURANT</td>
                                <td>COULEUR</td>
                                <td>DESCRIPTION</td>
                                <td>MODIFIER</td>
                                <td>SUPPRIMER</td>
                            </tr>
                            @foreach($cars as $car)
                            <tr>
                                <td>
                                    <img src="/cars/{{ $car->image }}" alt="NO IMAGE" style="width:50px; height:50px; float:left;border-radius:50%; margin-right:25px; ">
                                </td>
                                <td>{{ $car->id }}</td>
                                <td>{{ $car->marque }}</td>
                                <td>{{ $car->modele }}</td>
                                <td>{{ $car->carburant }}</td>
                                <td>{{ $car->couleur }}</td>
                                <td>{{ $car->description }}</td>
                                <td>
                                    <form action="{{ route('passCar') }}" method="get">
                                        @csrf
                                        <input type="hidden" name="idcar" value="{{ $car->id }}">
                                        <button type="submit" class="btn btn-primary"> MODIFIER </button>
                                    </form> 
                                </td>
                                <td>
                                    <form action="{{ route('deleteCar') }}" method="get">
                                        @csrf
                                        <input type="hidden" name="idcar" value="{{ $car->id }}">
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

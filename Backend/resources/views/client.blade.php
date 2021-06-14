@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
                <h1>CLIENT WEB PAGE</h1>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                        

                    <table class="table table-striped table-bordered table-hover">
                        <tr>
                            <td>ID</td>
                            <td>ID CAR</td>
                            <td>ID PARTNER</td>
                            <td>Date de debut</td>
                            <td>Date de Fin</td>
                            <td>statut</td>
                            <td>prix</td>
                            <td>ville</td>
                            <td>Description</td>
                            @auth
                                <td>RESERVER</td>
                            @endauth
                        </tr>
                        @foreach ($annonces as $annonce)
                        <tr>
                            <td>{{ $annonce->id }}</td>
                            <td>{{ $annonce->car_id }}</td>
                            <td>{{ $annonce->partenaire_id }}</td>
                            <td>{{ $annonce->dateDebut }}</td>
                            <td>{{ $annonce->dateFin }}</td>
                            @if($annonce->statut ==1) 
                                <?php $stat = 'RENTED' ?>
                            @elseif($annonce->statut ==2)
                                <?php $stat = 'NOT RENTED BUT DEMANDED' ?>
                            @else 
                                <?php $stat = 'NOT RENTED' ?>  
                            @endif
                            <td>{{ $stat }}</td>
                            <td>{{ $annonce->prix }}</td>
                            <td>{{ $annonce->ville }}</td>
                            <td>{{ $annonce->description }}</td>
                            @auth
                            <td>
                                @if($annonce->statut ==1) 
                                    <form action="#" method="POST">
                                        @csrf
                                        <input type="button" class="btn btn-secondary" value="RESERVED" disabled/>
                                    </form> 
                                @elseif($annonce->statut == 2)
                                    <form action="{{ route('reservation') }}" method="get">
                                        @csrf
                                        <input type="hidden" name="ida" value="{{ $annonce->id }}">
                                        <input type="hidden" name="idcar" value="{{ $annonce->car_id }}">
                                        <button type="submit" class="btn btn-warning"> RESERVER </button>
                                    </form> 
                                @else 
                                    <form action="{{ route('reservation') }}" method="get">
                                        @csrf
                                        <input type="hidden" name="ida" value="{{ $annonce->id }}">
                                        <input type="hidden" name="idcar" value="{{ $annonce->car_id }}">
                                        <button type="submit" class="btn btn-primary"> RESERVER </button>
                                    </form> 

                            @endif
                                
                            </td>
                            @endauth
                            
                        </tr>
                        @endforeach
                    </table>
                    <tfoot>
                        <tr>
                            <td>
                                <input type="text" class="form-control filter-input" placeholder="Search with CAR ID ..." data-column="1" />
                            </td>

                            <td>
                                <input type="text" class="form-control filter-input" placeholder="Search with City ..." data-column="7" />
                            </td>

                            <td>
                                <input type="text" class="form-control filter-input" placeholder="Search with Price ..." data-column="6" />
                            </td>
                        </tr>
                    </tfoot>
                </div>
                <style>
                    .w-5{
                        display:none;
                    }
                </style>
                <div class="pagination justify-content-center">
                    {{ $annonces->links() }}
                </div>
                
            </div>
        </div>
    </div>
</div>

<script>

</script>


@endsection

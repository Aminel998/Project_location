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
                <h1>RESERVATION ACCEPTENCE </h1>
                    <span class="text-success">{{ $returns }}</span>    
                    

                <h1>INFORMATION SUR LA RESERVATION</h1>

                <br/>
                <a class="btn btn-link" href="{{ route('home') }}">
                    {{ __('VOIR LES ANNONCES ->') }}
                </a>
                
                
                
        </div>
    </div>
</div>

<script>

</script>


@endsection
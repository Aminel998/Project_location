<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'dateDebutReservation',
        'dateFinReservation',
        'prixTotal',
        'statut',
        'client_id',
        'annonce_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function annonce(){
        return $this->hasOne(Annonce::class);
    }

    public function evaluations(){
        return $this->hasMany(Evaluation::class);
    }

}

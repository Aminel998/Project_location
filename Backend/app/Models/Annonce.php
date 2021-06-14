<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Annonce extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'dateDebut',
        'dateFin',
        'statut',
        'prix',
        'premium',
        'ville',
        'description',
        'car_id',
        'partenaire_id'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function car(){
        return $this->hasOne(Car::class);
    }

    public function reservation(){
        return $this->belongsTo(Reservation::class);
    }
}

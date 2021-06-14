<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'marque',
        'modele',
        'etat',
        'carburant',
        'couleur',
        'airBag',
        'nbrPlace',
        'image',
        'description',
        'partenaire_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function annonces(){
        return $this->belongsToMany(Annonce::class);
    }
}

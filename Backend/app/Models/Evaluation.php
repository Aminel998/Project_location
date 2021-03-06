<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'idFrom',
        'idTo',
        'commentaire',
        'dateEvaluation',
        'note',
        'car_id',
        'reservation_id'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function reservation(){
        return $this->belongsTo(Reservation::class);
    }
}

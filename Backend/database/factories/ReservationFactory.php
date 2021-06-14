<?php

namespace Database\Factories;

use App\Models\Reservation;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReservationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Reservation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'dateDebutReservation' => $this->faker->dateTimeInInterval($startDate = now(), $interval = '+ 30 days', $timezone = null),
            'dateFinReservation' => $this->faker->dateTimeInInterval($startDate = now(), $interval = '+ 30 days', $timezone = null),
            'prixTotal' => $this->faker->numberBetween($min = 200, $max = 10000),
            'statut' => $this->faker->numberBetween($min = 0, $max = 1),
            'annonce_id' => "2",
            'client_id' => "2",
            'created_at'=>now()
        ];
    }
}

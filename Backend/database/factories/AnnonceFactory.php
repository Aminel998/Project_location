<?php

namespace Database\Factories;

use App\Models\Annonce;
use Illuminate\Database\Eloquent\Factories\Factory;

class AnnonceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Annonce::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        
        return [
            'dateDebut' => now(),
            'dateFin' => now(),
            'statut' => $this->faker->numberBetween($min = 0, $max = 1),
            'prix' => $this->faker->numberBetween($min = 200, $max = 1500),
            'premium'=>$this->faker->numberBetween($min = 0, $max = 1),
            'ville' => $this->faker->city,
            'description' => $this->faker->sentence,
            'partenaire_id' => "1",
            'car_id' => "3",
            'created_at'=>now()
        ];
    }
}

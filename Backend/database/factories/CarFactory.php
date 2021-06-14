<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Car::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        
        return [
            
            'marque' => $this->faker->sentence(),
            'modele' => $this->faker->year($max = 'now') ,
            'etat' => $this->faker->sentence(),
            'image'=>"default.jpg",
            'carburant' => $this->faker->sentence(),
            'couleur' => $this->faker->colorName(),
            'airBag' => $this->faker->boolean(),
            'nbrPlace' => $this->faker->numberBetween($min = 2, $max = 9),
            'description' => $this->faker->sentence(),
            'partenaire_id' => "1",
            'created_at'=>now()
        ];
    }
}

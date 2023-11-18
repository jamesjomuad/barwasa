<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ConsumptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'consumer_id' => \App\Models\Consumer::all()->random()->id,
            'previous'    => null,
            'current'     => null,
            'volume'      => $this->faker->numberBetween(0, 100),
            'unit'        => 'Cubic Feet',
            'is_paid'     => 0,
            'created_at'  => $this->faker->dateTimeBetween('-52 week')
        ];
    }
}

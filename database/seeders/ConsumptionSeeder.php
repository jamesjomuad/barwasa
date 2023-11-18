<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class ConsumptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customer_consumption')->insert([
            // 'name' => Str::random(10),
            // 'email' => Str::random(10).'@gmail.com',
            // 'password' => Hash::make('password'),
            // 'consumer_id',
            // 'meter_id',
            // 'previous',
            // 'current',
            // 'volume',
            // 'is_paid',
        ]);
    }
}

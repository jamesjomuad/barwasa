<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $table = "water_activity";

    protected $fillable = [
        'meter_id',
        'volume',
        'note',
    ];

}

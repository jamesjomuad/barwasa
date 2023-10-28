<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consumer extends Model
{
    use HasFactory;

    protected $table = "customer";

    // protected $primaryKey = 'meter_id';

    // protected $keyType = 'string';

    protected $fillable = [
        "age",
        "billing_address",
        "dob",
        "email",
        "first_name",
        "last_name",
        "meter_id",
        "phone_2",
        "phone",
    ];

    public function consumptions()
    {
        return $this->hasMany(Consumption::class, 'consumer_id');
    }
}

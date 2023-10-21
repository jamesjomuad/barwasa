<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consumer extends Model
{
    use HasFactory;

    protected $table = "customer";

    protected $fillable = [
        "age",
        "billing_address",
        "dob",
        "email",
        "first_name",
        "last_name",
        "phone",
        "phone_2",
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $table = "invoice";

    protected $casts = [
        'consumptions' => 'object'
    ];

    protected $fillable = [
        'total',
        'cash',
        'number',
        'reference',
        'is_paid',
        'note',
        'consumptions',
    ];

}

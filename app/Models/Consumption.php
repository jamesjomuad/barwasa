<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consumption extends Model
{
    use HasFactory;

    protected $table = "customer_consumption";

    protected $fillable = [
        'meter_id',
        'volume',
        'note',
    ];


    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            // Set a field value before saving
            $model->unit = $model->unit ?? 'gallon';
        });
    }


    public function customer()
    {
        return $this->belongsTo(Consumer::class, 'consumer_id');
    }
}
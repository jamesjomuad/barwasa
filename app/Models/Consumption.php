<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consumption extends Model
{
    use HasFactory;

    protected $table = "consumption";

    public $cost_per_volume = 0.2;

    protected $casts = [
        'volume' => 'float',
    ];

    protected $fillable = [
        'meter_id',
        'previous',
        'current',
        'volume',
        'is_paid',
    ];

    protected $appends = [
        'payable'
    ];


    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            // Set a field value before saving
            $model->unit = $model->unit ?? 'Cubic Feet';
        });
    }

    public function consumer()
    {
        return $this->belongsTo(Consumer::class, 'consumer_id');
    }

    public function getPayableAttribute()
    {
        return number_format($this->volume * $this->cost_per_volume, 2);
    }

}

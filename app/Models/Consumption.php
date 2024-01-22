<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consumption extends Model
{
    use HasFactory;

    protected $table = "consumption";

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
        'payable',
        'unit_formatted',
    ];

    protected static function boot()
    {
        parent::boot();

        $unit = \App\Models\Setting::option('volume_unit');

        static::saving(function ($model) use($unit)
        {
            // Set a field value before saving
            $model->unit = $model->unit ?? $unit;
        });
    }

    public function consumer()
    {
        return $this->belongsTo(Consumer::class, 'consumer_id');
    }

    public function setVolumeAttribute($value)
    {
        $unit = \App\Models\Setting::option('volume_unit');

        switch($unit)
        {
            case 'ml':
                $this->attributes['volume'] = $value * 1000;
            break;

            case 'm³':
                $this->attributes['volume'] = $value / 1000;
            break;

            case 'in³':
                $this->attributes['volume'] = $value * 61.0237;
            break;

            case 'ft³':
                $this->attributes['volume'] = $value * 0.0353147;
            break;

            case 'gal':
                $this->attributes['volume'] = $value * 0.264172;
            break;

            default: $this->attributes['volume'] = $value;
        }

    }

    public function getVolumeAttribute($value)
    {
        return round($value, 0);
    }

    public function getUnitFormattedAttribute()
    {
        switch($this->unit)
        {
            case 'l': return 'Liter';
            default: return $this->unit;
        }
    }

    public function getPayableAttribute()
    {
        $rate = \App\Models\Setting::option('volume_rate');
        return number_format($this->volume * $rate, 2);
    }

}

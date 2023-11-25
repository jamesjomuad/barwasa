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

    protected $appends = [
        'fullname',
        'total_volume',
    ];

    public function consumer()
    {
        return $this->belongsTo(Consumer::class);
    }

    public function getFullnameAttribute()
    {
        if($this->consumer && isset($this->consumer->user))
        {
            return $this->consumer->user->first_name ." " . $this->consumer->user->last_name;
        }
    }

    public function getTotalVolumeAttribute()
    {
        return collect($this->consumptions)->sum();
    }

}

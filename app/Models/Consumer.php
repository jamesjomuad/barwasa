<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consumer extends Model
{
    use HasFactory;

    protected $table = "customer";

    protected $fillable = [
        "billing_address",
        "dob",
        "barangay",
        "sitio",
        "meter_id",
        "phone_2",
        "phone",
    ];

    protected $appends = [
        'total_volume',
        'total_payable',
        'consumption_dates'
    ];

    public $cost_per_volume = 0.2;

    // Constructor
    public function __construct()
    {
        $this->cost_per_volume = \App\Models\Setting::option('volume_rate');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function consumptions()
    {
        return $this->hasMany(Consumption::class, 'consumer_id');
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class, 'consumer_id');
    }

    public function getTotalVolumeAttribute()
    {
        if( $this->consumptions->isNotEmpty() ){
            return number_format($this->consumptions->sum('volume'), 5);
        }

        return 0;
    }

    public function getTotalPayableAttribute()
    {
        if( $this->consumptions->isNotEmpty() ){
            return number_format($this->consumptions->sum('volume') * $this->cost_per_volume, 2);
        }

        return 0;
    }

    public function getConsumptionDatesAttribute()
    {
        if( $this->consumptions->isNotEmpty() ){
            return [
                'from' => $this->consumptions->pluck('created_at')->min()->format('F d, Y'),
                'to' => $this->consumptions->pluck('created_at')->max()->format('F d, Y'),
            ];
        }

        return [
            'from' => '',
            'to' => '',
        ];
    }

}

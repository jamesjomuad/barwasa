<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    protected $table = 'announcement';

    protected $casts = [
        'created_at' => 'datetime'
    ];

    protected $fillable = [
        'title',
        'content',
        'type',
        'date_start',
        'date_end'
    ];

    protected $appends = [
        'time'
    ];

    function getTimeAttribute()
    {
        return $this->created_at->diffForHumans();
    }

}

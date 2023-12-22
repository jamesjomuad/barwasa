<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    // protected $table = 'settings';

    protected $fillable = [
        'key',
        'value',
    ];

    public static function option($key)
    {
        return (new self)->where('key', $key)->first()->value;
    }
}

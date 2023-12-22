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
        $query = (new self)->where('key', $key)->get();

        if(!$query->isEmpty())
        {
            return $query->first()->value;
        }

        return false;
    }
}

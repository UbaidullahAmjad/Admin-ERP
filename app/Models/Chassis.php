<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chassis extends Model
{
    use HasFactory;
    protected $table = "chassis";
    protected $guarded = [];
}

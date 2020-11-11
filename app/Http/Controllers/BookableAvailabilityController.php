<?php

namespace App\Http\Controllers;

use App\Models\Bookable;
use Illuminate\Http\Request;

class BookableAvailabilityController extends Controller
{
    public function show(Bookable $bookable)
    {
        $validate = request()->validate([
            'from'  =>  'required|date_format:Y-m-d|after_or_equal:now',
            'to'    =>  'required|date_format:Y-m-d|after_or_equal:from'
        ]);

        $available = $bookable->availableFor($validate['from'], $validate['to']);
        return response()->json(['available' => $available]);
    }
}

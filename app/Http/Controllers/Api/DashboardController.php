<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Consumption;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $date = Carbon::now();
        $startOfYear = $date->copy()->startOfYear();
        $endOfYear   = $date->copy()->endOfYear();

        $monthly = Consumption::whereBetween('created_at', [$startOfYear, $endOfYear])
            ->get()
            ->groupBy(function($item){
                return $item->created_at->format('M');
            })
            ->map(function($item){
                return count($item);
            })
        ;

        $weekly = Consumption::where( 'created_at','>=', Carbon::now()->subDays(7) )
            ->orderBy( 'created_at', 'ASC' )
            ->get()
            ->groupBy(function($item){
                return $item->created_at->format('l');
            })
            ->map(function($item){
                return count($item);
            })
        ;

        return response()->json([
            'monthly' => $monthly,
            'weekly'  => $weekly,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

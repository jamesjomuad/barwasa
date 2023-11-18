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
        return response()->json([
            'monthly' => $this->monthly(),
            'weekly'  => $this->weekly(),
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

    private function monthly()
    {
        $months = collect(range(0,11))->mapWithKeys(function($m){
            return [Carbon::now()->subMonths($m)->format('M') => 0];
        })->reverse();

        $date  = Carbon::now();
        $start = $date->copy()->subMonths(11)->startOfMonth();
        $end   = $date->copy()->endOfMonth();

        $monthly = Consumption::whereBetween('created_at', [$start, $end])
            ->get()
            ->groupBy(function($item){
                return $item->created_at->format('M');
            })
            ->map(function($item){
                return count($item);
            })
        ;

        return $months->merge($monthly);
    }

    private function weekly()
    {
        $weeks = collect([
            Carbon::now()->subDays(6)->format('l') => 0,
            Carbon::now()->subDays(5)->format('l') => 0,
            Carbon::now()->subDays(4)->format('l') => 0,
            Carbon::now()->subDays(3)->format('l') => 0,
            Carbon::now()->subDays(2)->format('l') => 0,
            Carbon::now()->subDays(1)->format('l') => 0,
            Carbon::now()->format('l') => 0
        ]);

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

        return $weeks->merge($weekly);
    }
}

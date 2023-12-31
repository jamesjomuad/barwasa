<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Consumer;
use App\Models\Consumption;

class ConsumptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->get('per_page') ? : 50;

        $query = Consumption::with('consumer.user');

        if( $request->user() && $request->user()->is_consumer )
        {
            $query->where('consumer_id', $request->user()->consumer->id);
        }

        //  Sort & Order
        $query->when($request->exists('sortBy') && $request->exists('orderBy'), function($q) use ($request) {
            $sortBy  = $request->get('sortBy');
            $orderBy = $request->get('orderBy');
            return $q->orderBy( $sortBy, $orderBy );
        });

        //  Filter/Search
        $query->when($request->get('filter'), function($q) use ($request) {
            $filter = $request->get('filter');
            $q->whereHas( 'consumer', function($c) use($filter) {
                $c->where( 'first_name', 'LIKE', "%$filter%" );
                $c->orWhere( 'last_name', 'LIKE', "%$filter%" );
            });
            return $q;
        });

        return $query->paginate($per_page);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            // Set default status
            ConsumerController::setStatusDefault();

            // Set status Active
            ConsumerController::setStatusActive( $request->input('id') );

            $consumer = Consumer::where('meter_id', $request->input('id'))->firstOrFail();

            $consumption = new Consumption([
                'previous' => $request->input('previous'),
                'current' => $request->input('current'),
                'volume' => $request->input('volume'),
            ]);

            $consumer
                ->consumptions()
                ->save($consumption)
            ;

            return response()->json([
                'id'     => $consumption->id,
                'unit'   => $consumption->unit,
                'volume' => $consumption->volume,
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'ID not found'], 404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            return Consumption::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response([
                'status' => false,
                'message' => '404 not found'
            ], 404);
        }
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
    public function destroy($ids)
    {
        return Consumption::whereIn('id', explode(',', $ids))->delete();
    }

}

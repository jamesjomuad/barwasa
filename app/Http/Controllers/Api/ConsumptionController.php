<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Activity as Model;

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

        $query = Model::query();

        //  Sort & Order
        $query->when($request->exists('sortBy') && $request->exists('orderBy'), function($q) use ($request) {
            $sortBy  = $request->get('sortBy');
            $orderBy = $request->get('orderBy');
            return $q->orderBy( $sortBy, $orderBy );
        });

        //  Filter/Search
        $query->when($request->get('filter'), function($q) use ($request) {
            $filter = $request->get('filter');
            $q->where( 'first_name', 'LIKE', "%$filter%" );
            $q->orWhere( 'last_name', 'LIKE', "%$filter%" );
            $q->orWhere( 'email', 'LIKE', "%$filter%" );
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
        return Model::create([
            'meter_id'  => $request->input('id'),
            'volume'    => $request->input('volume'),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Model::findOrFail($id);
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

    // public function log(Request $request, $id)
    // {
    //     $model = Model::create([
    //         'meter_id'  => $id,
    //         'volume'    => $request->input('volume'),
    //     ]);

    //     return $model;
    // }

}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Announcement;
use Carbon\Carbon;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->get('per_page') ? : 50;

        $query = Announcement::query();

        if( $request->user()->is_consumer )
        {
            $query->whereDate('date_start', '<=', Carbon::now());
            $query->whereDate('date_end', '>=', Carbon::now());
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
                $c->where( 'title', 'LIKE', "%$filter%" );
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
        $validator = Validator::make($request->all(), [
            'title'      => ['required'],
            'content'    => ['required'],
            'date_start' => ['required'],
            "date_end"   => ["required"],
        ]);

        // Validator
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()->first(),
            ]);
        }

        $announcement = new Announcement([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'type' => $request->input('type'),
            'date_start' => $request->input('date_start'),
            'date_end' => $request->input('date_end'),
        ]);

        return response()->json([
            'status'  => $announcement->save(),
            'data'    => $announcement,
            'message' => 'Announcement created.',
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Announcement::find($id);
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
        $announcement = Announcement::findOrFail($id);

        return response()->json([
            'status'  => $announcement->update([
                'title'      => $request->input('title'),
                'content'    => $request->input('content'),
                'type'       => $request->input('type'),
                'date_start' => $request->input('date_start'),
                'date_end'   => $request->input('date_end'),
            ]),
            'data'    => $announcement,
            'message' => 'Announcement updated!',
        ], 201);
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

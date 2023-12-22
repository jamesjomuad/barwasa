<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Consumer;

class ConsumerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->get('per_page') ? : 50;

        $query = User::with('consumer')->whereHas('consumer');

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
        $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:80', 'unique:users'],
            "last_name" => ["required"],
        ]);

        // Validator
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()->first(),
            ]);
        }

        $data = $request->all();

        // Generate Meter ID
        $data['meter_id'] = uniqid();       //Str::uuid()->toString();

        $user = User::create([
            'name'       => $request->name,
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'email'      => $request->email,
            'password'   => Hash::make($request->password)
        ]);

        $user->consumer()->create($data);

        return response()->json([
            'message' => 'Customer created successfully',
            'data'    => $user
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
        try {
            $query = User::whereHas('consumer')
                ->with(['consumer.consumptions'=>function($q){
                    $q->orderBy( 'is_paid', 'ASC' );
                }])
                ->findOrFail($id)
            ;
            return $query;
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
        $model = User::findOrFail($id);

        if( $request->filled('password') ){
            $model->password = Hash::make($request->password);
        }

        $model->name = $request->input('name');
        $model->email = $request->input('email');
        $model->first_name = $request->input('first_name');
        $model->last_name = $request->input('last_name');

        $model->save();

        return [
            'status' => $model->consumer()->update([
                "billing_address" => $request->input('consumer.billing_address'),
                "dob"             => $request->input('consumer.dob'),
                "barangay"        => $request->input('consumer.barangay'),
                "sitio"           => $request->input('consumer.sitio'),
                "meter_id"        => $request->input('consumer.meter_id'),
                "phone_2"         => $request->input('consumer.phone_2'),
                "phone"           => $request->input('consumer.phone'),
            ]),
            'data'   => $model
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return User::findOrFail($id)->delete();
    }

    public function isActive($id)
    {
        return dd($id);
    }
}

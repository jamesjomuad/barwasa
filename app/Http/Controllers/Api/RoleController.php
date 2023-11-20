<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Role as Model;

class RoleController extends Controller
{
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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:80', 'unique:users'],
            // "permissions" => ["required"],
        ]);

        // Validator
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()->first(),
            ]);
        }

        $data = $request->all();


        $role = Model::create($data);

        return response()->json([
            'message' => 'Created successfuly',
            'data'    => $role
        ], 201);
    }
}

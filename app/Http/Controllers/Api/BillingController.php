<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Consumer;
use App\Models\Consumption;
use App\Models\Invoice;


class BillingController extends Controller
{

    public function index(Request $request)
    {
        $per_page = $request->get('per_page') ? : 50;

        $query = Consumer::with(['consumptions','user']);

        $query->whereHas('consumptions', function($q){
            $q->where('is_paid', 0);
        });

        if( $request->user()->is_consumer )
        {
            $query->where('user_id', $request->input('user'));
        }

        $query->whereHas('user');

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
        $consumer = $this->show($request->input('id'));

        $invoice = new Invoice( $request->all() );

        $invoice->is_paid = 1;

        $consumer
            ->invoices()
            ->save($invoice)
        ;

        Consumption::whereIn('id', $request->input('consumptions'))->update(['is_paid' => 1]);

        return $invoice;
    }

    public function show($id)
    {
        try {
            return Consumer::with(['consumptions' => function($q){
                $q->where('is_paid', 0);
            }])->findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response([
                'status' => false,
                'message' => '404 not found'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($ids)
    {
        return Consumption::whereIn('id', explode(',', $ids))->delete();
    }
}

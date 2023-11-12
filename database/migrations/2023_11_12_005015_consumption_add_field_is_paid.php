<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ConsumptionAddFieldIsPaid extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customer_consumption', function (Blueprint $table) {
            $table->boolean('is_paid')->default(0)->after('unit');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customer_consumption', function (Blueprint $table) {
            $table->dropColumn('is_paid');
        });
    }

}

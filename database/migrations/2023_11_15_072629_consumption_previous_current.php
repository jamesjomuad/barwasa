<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ConsumptionPreviousCurrent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customer_consumption', function (Blueprint $table) {
            $table->integer('previous')->nullable()->default(null)->after('consumer_id');
            $table->integer('current')->nullable()->default(null)->after('consumer_id');
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
            $table->dropColumn('previous');
            $table->dropColumn('current');
        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateCustomer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customer', function (Blueprint $table) {
            if(Schema::hasColumn('customer','age')){
                $table->dropColumn('age');
            }
            $table->string('user_id')->nullable()->change();
            $table->string('meter_id')->nullable()->change();
            $table->string('is_active')->nullable()->change();
            $table->string('billing_address')->nullable()->change();
            $table->string('phone')->nullable()->change();
            $table->string('phone_2')->nullable()->change();
            $table->string('email')->nullable()->after('last_name');
            $table->date('dob')->nullable()->after('phone_2');
            $table->string('device')->nullable()->after('dob');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customer', function (Blueprint $table) {
            $table->dropColumn('email');
            $table->dropColumn('dob');
            $table->dropColumn('device');
        });
    }
}

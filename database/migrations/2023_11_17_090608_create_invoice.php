<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoice extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('consumer_id');
            $table->bigInteger('tax')->default(0)->description('in peso');
            $table->bigInteger('total')->default(0)->description('in peso, including tax');
            $table->bigInteger('cash')->default(0);
            $table->char('number', 50)->nullable();
            $table->char('reference', 30)->nullable();
            $table->boolean('is_paid')->default(0);
            $table->text('note')->nullable();
            $table->json("consumptions");

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('marque');
            $table->string('modele');
            $table->string('etat');
            $table->string('carburant');
            $table->string('couleur');
            $table->string('airBag');
            $table->string('nbrPlace');
            $table->string('image');
            $table->string('description');
            $table->timestamps();

            $table->unsignedBigInteger('partenaire_id');
            $table->foreign('partenaire_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}

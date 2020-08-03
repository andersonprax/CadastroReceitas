package com.example.frontendreceita

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class RetrofitConfig {


        val retrofit = Retrofit.Builder()
            .baseUrl( "http://192.168.1.11:3000")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

    fun receitaService(): ReceitaService = retrofit.create(ReceitaService:: class.java)
}

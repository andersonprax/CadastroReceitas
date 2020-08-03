package com.example.frontendreceita


import retrofit2.Call
import retrofit2.http.GET

interface ReceitaService {

    @GET( value = "receita")
    fun list(): Call<ArrayList<Receita>>
}
package com.example.frontendreceita

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.StaggeredGridLayoutManager
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.receita_list_layout.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity() {

    lateinit var adapter : ReceitaAdapter

    val receita : ArrayList<Receita> = ArrayList()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        configureRecyclerView()

       val call : Call<ArrayList<Receita>> = RetrofitConfig().receitaService().list()
        call.enqueue(object : Callback<ArrayList<Receita>>{
            override fun onFailure(call: Call<ArrayList<Receita>>, t: Throwable) {
                print(t)
            }

            override fun onResponse(call: Call<ArrayList<Receita>>, response: Response<ArrayList<Receita>>) {
                response.body()?.let {
                    adapter.addAll(it)
                }
            }

        })
    }

    private fun configureRecyclerView() {

        val recyclerView = rv_receita
        adapter = ReceitaAdapter(receita, this) { receita, position ->
            iv_receita.setOnClickListener {
            }
        }

        recyclerView.adapter = adapter
        val layoutManager = StaggeredGridLayoutManager(2, StaggeredGridLayoutManager.VERTICAL)
        recyclerView.layoutManager = layoutManager
    }
}

package com.example.frontendreceita

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.frontendreceita.R.layout.receita_list_layout
import kotlinx.android.synthetic.main.receita_list_layout.view.*


class ReceitaAdapter(
    private var receita: ArrayList<Receita>,
    private val context: Context,
    private val onItemClickListener: (receita: Receita, position: Int) -> Unit
) : RecyclerView.Adapter<ReceitaAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(context).inflate(receita_list_layout, parent, false)
        return ViewHolder(view)
    }

    override fun getItemCount() = receita.size


    override fun onBindViewHolder(holder: ViewHolder, position: Int) {

        val receita = this.receita[position]
        holder.bindView(receita, context)
        holder.itemView.setOnClickListener {
            onItemClickListener(receita, position)
        }
    }

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {

        fun bindView(receita: Receita, context: Context) {
            itemView.tv_receita_codigo.text = receita.codReceita.toString()
            itemView.tv_receita_description.text = receita.descReceita
            itemView.tv_receita_modpreparo.text = receita.modoPreparo
            itemView.tv_receita_rendimento.text = receita.rendimento
        }
    }

    fun getList(): ArrayList<Receita> {
        return receita
    }

    fun addAll(receita: ArrayList<Receita>) {
        this.receita.clear()
        this.receita.addAll(receita)
        notifyDataSetChanged()
    }

    fun add(receita: Receita) {
        this.receita.add(receita)
        notifyDataSetChanged()
    }

//
//    fun update(receita: Receita, position: Int) {
//        this.receita.add(position, receita)
//        notifyItemChanged(position)
//    }
//
//    private fun delete(position: Int) {
//        this.receita.removeAt(position)
//        notifyDataSetChanged()
//    }
}


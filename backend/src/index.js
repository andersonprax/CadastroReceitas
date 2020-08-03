const express = require('express');
const mongoose = require('mongoose');

require("./models/Receita");
const Receita = mongoose.model('receita');

require("./models/Ingrediente");
const Ingrediente = mongoose.model('ingrediente');

const app = express();

app.use(express.json());



/**
 * Configuração do banco de dados
 */
 mongoose.connect(
     process.env.MONGO_URL, {
     useNewUrlParser: true,
     useUnifiedTopology:true
 }).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
 }). catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
 });



 /**
 * Rotas de acesso ao banco de dados RECEITA (CRUD)
 */
 app.get("/receita/:id", (req,res) => {
     Receita.findOne({_id: req.params.id}).then((receita) => {
        return res.json(receita);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhuma receita visualizada!"
        });
    });
});

 app.get("/receita", (req,res) => {
    Receita.find({}).then((receita) => {
        return res.json(receita);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhuma receita visualizada!"
        });
    });
});

app.post("/receita", (req,res) => {
    const receita = Receita.create(req.body, (err) => {
        if (err) return res.status (400).json({
        error: true,
        message: "Error: Receita não foi cadastrada!"
        })

        return res.status (200).json({
            error: false,
            message: "Receita cadastrada com sucesso!"
        });
    });
});

app.put("/receita/:id", (req, res) => {
    const receita = Receita.updateOne({_id: req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Receita não foi editada!"
        });

        return res.json({
            error: false,
            message: "Receita editada com sucesso!"
        });
    });
});

app.delete("/receita/:id", (req,res) => {
    const receita = Receita.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Receita não foi excluída!"
        });

        return res.json({
            error: false,
            message: "Receita excluída com sucesso!"
        });
    });
});



 /**
 * Rotas de acesso ao banco de dados INGREDIENTE (CRUD)
 */
app.get("/ingrediente/:id", (req,res) => {
    Ingrediente.findOne({_id: req.params.id}).then((ingrediente) => {
       return res.json(ingrediente);
   }).catch((erro) => {
       return res.status(400).json({
           error: true,
           message: "Nenhum ingrediente visualizado!"
       });
   });
});

app.get("/ingrediente", (req,res) => {
    Ingrediente.find({}).then((ingrediente) => {
       return res.json(ingrediente);
   }).catch((erro) => {
       return res.status(400).json({
           error: true,
           message: "Nenhum ingrediente visualizado!"
       });
   });
});

app.post("/ingrediente", (req,res) => {
   const ingrediente = Ingrediente.create(req.body, (err) => {
       if (err) return res.status (400).json({
       error: true,
       message: "Error: Ingrediente não foi cadastrado!"
       })

       return res.status (200).json({
           error: false,
           message: "Ingrediente cadastrado com sucesso!"
        });
    });
});

app.put("/ingrediente/:id", (req, res) => {
   const ingrediente = Ingrediente.updateOne({_id: req.params.id}, req.body, (err) => {
       if(err) return res.status(400).json({
           error: true,
           message: "Error: Ingrediente não foi editado!"
       });

       return res.json({
           error: false,
           message: "Ingrediente editado com sucesso!"
       });
   });
});

app.delete("/ingrediente/:id", (req,res) => {
   const ingrediente = Ingrediente.deleteOne({_id: req.params.id}, (err) => {
       if(err) return res.status(400).json({
           error: true,
           message: "Error: Ingrediente não foi excluído!"
       });

       return res.json({
           error: false,
           message: "Ingrediente excluído com sucesso!"
       });
   });
});



/**
 * Server
 */
app.listen(process.env.PORT || 3000);
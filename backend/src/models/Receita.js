const mongoose = require ('mongoose');

const Receita = new mongoose.Schema({
    codReceita: {
        type: Number,
        required: true
    },
    descReceita: {
        type: String,
        required: true
    },
    modoPreparo: {
        type: String,
        required: true
    },
    rendimento: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('receita', Receita);
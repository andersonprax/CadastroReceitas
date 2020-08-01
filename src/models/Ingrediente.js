const mongoose = require ('mongoose');

const Ingrediente = new mongoose.Schema({
    codIngrediente: {
        type: Number,
        required: true
    },
    descIngrediente: {
        type: String,
        required: true
    },
    quantidade: {
        type: String,
        required: true
    }
},
{
        timestamps: true,
});

mongoose.model('ingrediente', Ingrediente);
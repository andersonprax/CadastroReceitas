if (process.env.NODE_ENV == "production"){
    module.exports = {MONGO_URL: "mongodb+srv://root:lala@cluster0.deste.mongodb.net/cadastroreceitas?retryWrites=true&w=majority"}
}else{
    module.exports = {MONGO_URL: "mongodb://localhost/cadastroreceitas"}
}
const express = require("express");
const app = express();



app.get("/",function(req,res){
    res.send("Backend rodando")
});

app.get("/matrix/:matArray",function(req,res){
    try {
        var array = JSON.parse("[" + req.params.matArray + "]");
        if (array.length<3){
            if (array[0].length<3 & array[1].length<3){
                var determinante = (array[0][0] * array[1][1]) - (array[0][1] * array[1][0]);
                res.send("A determinante da matriz  "+ array + "  e igual a:  " + determinante.toString());

            }
            else{
                res.send("Por favor, insira uma matrix no modelo [x,y],[z,w]");
            }
        }else{
            res.send("A matrix contem mais itens do que o esperado");
    
        }  
   
   
   
    } catch (e) {
         res.send("Por favor, insira uma matrix no modelo [x,y],[z,w]");
    }


    
    // res.send(array);
});


app.listen(8081, function(){
    console.log("Backend rodando");
});
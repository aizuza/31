
//cargamos la dependencia express
const express = require('express');
//creamos una nueva app con express
const app = express();

app.set('view engine','ejs');


app.use(express.static('public'));
//definir puerto
const port = 3000;

const specialDay = 31;
//Month base 0
const specialMonth = 30;

//When root url is requested (/)
//HTTP GET Method
//Configurar la respuesta del servidor cuando se pide la
//url raíz con GET
app.get('/', (req, res) => {
    let currentDate = new Date();

    let currentDayoftheMonth = currentDate.getDate();
    let currentMonth = currentDate.getMonth();

    if(currentDayoftheMonth === specialDay && currentMonth === specialMonth){
        res.send('YES');
        //res.render('index', {message: 'YES'});
    }else{
        res.send('NEL');
        //res.render('index', {message: 'NO'});
    }

  
});

app.listen(port, () =>{
console.log(`Server listening on port ${port}`);

});

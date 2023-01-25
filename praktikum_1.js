const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

//SOAL 1
//KUBUS
app.post("/kubus", (req,res) => {
    
    let sisi = Number(req.body.sisi) 
    
    let luas = sisi * sisi
    let volume =  sisi * sisi * sisi
    
    let response = {
        sisi: sisi ,    
        luas: luas, 
        volume: volume
    }
        res.json(response)
    })

//BALOK
app.post("/balok", (req,res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luas = panjang * lebar
    let volume = panjang * lebar * tinggi

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    }
        res.json(response)
})

//PRISMA SEGITIGA
app.post("/prisma", (req,res) => {

    let alas = Number(req.body.alas)
    let tinggiS = Number(req.body.tinggiS)
    let tinggiP = Number(req.body.tinggiP)

    let luas = (alas * tinggiS) / 2
    let volume = ((alas * tinggiS) / 2) * tinggiP

    let response = {
        alas: alas,
        tinggiS: tinggiS,
        tinggiP: tinggiP,
        luas: luas,
        volume: volume
    }
        res.json(response)
})

//LIMAS SEGITIGA
app.post("/limas", (req,res) => {

    let alas = Number(req.body.alas)
    let tinggiS = Number(req.body.tinggiS)
    let tinggiL = Number(req.body.tinggiL)

    let luas = (alas * tinggiS) / 2
    let volume = (((alas * tinggiS) / 2) * tinggiL ) / 3

    let response = {
        alas: alas,
        tinggiS: tinggiS,
        tinggiL: tinggiL,
        luas: luas,
        volume: volume
    }
        res.json(response)
})


//SOAL 2
//CELCIUS
app.post("/celcius", (req,res) => {

    let celcius = Number(req.body.celcius)

    let reamur = (4 * celcius) / 5
    let kelvin = celcius + 273
    let fahrenheit = ((9* celcius) / 5) + 32

    let response = {
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin,
        fahrenheit: fahrenheit
    }
        res.json(response)
})

//REAMUR
app.post("/reamur", (req,res) => {

    let reamur = Number(req.body.reamur)

    let celcius = (5 * reamur) / 4
    let fahrenheit = ((9 * reamur) / 4) + 32
    let kelvin =  ((5 * reamur) / 4) + 273 + (reamur * 1)

    let response = {
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin,
        fahrenheit: fahrenheit
    }
        res.json(response)
})

//KELVIN
app.post("/kelvin", (req,res) => {
    
    let kelvin = Number(req.body.kelvin)

    let celcius = kelvin - (273 * 1)
    let reamur = (4 / 5 * (kelvin - (273 * 1)))
    let fahrenheit = (((kelvin - 32) * 5) / 9)+ (273 * 1)
    
    let response = {
        kelvin: kelvin,
        celcius: celcius,
        reamur: reamur,
        farenheit: fahrenheit
    }
        res.json(response)
})

//FAHRENHEIT
app.post("/fahrenheit", (req,res) => {
  
    let farenheit = Number(req.body.kelvin)

    let celcius = ((farenheit - 32) * 5) / 9
    let reamur = ((farenheit - 32) * 4) / 9
    let kelvin =  (((farenheit - 32) * 5) / 9) + 273 + (farenheit * 1)

    let response = {
        farenheit: fahrenheit,
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin
    }
        res.json(response)
    })


//SOAL 3
//DECIMAL
app.post("/decimal", (req,res) => {

    let angka = Number(req.body.angka)
    
    let biner = angka.toString(2)
    let oktal = angka.toString(8)
    let heksadesimal = angka.toString(16)
    
    let response = {
        bildesimal : angka,
        bilbiner : biner,
        biloktal: oktal,
        bilheksadesimal : heksadesimal
    }
    res.json(response)
})

//BINER
app.post("/biner", (req, res) => {

    let angka = Number(req.body.angka) 
    
    let desimal=parseInt(angka,2)
    let oktal=parseInt(angka,2).toString(8)
    let heksadesimal=parseInt(angka,2).toString(16)
    
    let response = {
        bilbiner : angka,
        bildesimal : desimal,
        biloktal: oktal,
        bilheksadesimal : heksadesimal
    }
    res.json(response)
})

//OKTAL
app.post("/oktal", (req,res) => {
    
    let angka = Number(req.body.angka) 
        
    let desimal=parseInt(angka,8)
    let biner=parseInt(angka,8).toString(2)
    let heksadesimal=parseInt(angka,8).toString(16)
        
    let response = {
        biloktal : angka,
        bildesimal : desimal,
        bilbiner: biner,
        bilheksadesimal : heksadesimal
    }
    res.json(response)
})

//HEKSADESIMAL
app.post("/heksadesimal", (req,res) => {
  
    let angka = Number(req.body.angka) 
        
    let desimal=parseInt(angka,16)
    let biner=parseInt(angka,16).toString(2)
    let oktal=parseInt(angka,16).toString(8)
        
    let response = {
        bilheksadesimal : angka,
        bildesimal : desimal,
        bilbiner: biner,
        biloktal : oktal
    } 
    res.json(response)
})


//SOAL 4
//CALCULATOR BMI
app.post("/bmi", (req,res) => {
    
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi) 

    let bmi = berat / (tinggi * tinggi)
    let status = ''

    if(bmi < 18.5) {
        status = "Kekurangan berat badan"
    }
    else if(bmi >= 18.5 && bmi < 25) {
        status = "Normal"
    }
    else if(bmi >= 25 && bmi < 30) {
        status = "Berat badan berlebih"
    }
    else if(bmi >= 30) {
        status = "Kegemukan (Obesitas)"
    }

    let response = {
        berat: berat,   
        tinggi: tinggi,
        bmi: bmi,
        status: status
    }

    console.log(response.berat)
    
    res.json(response)
})

app.listen(4000, ()=>{
    console.log("Alhamdulillah");
})
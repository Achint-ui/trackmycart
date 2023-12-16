const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

const Vendor = require('./mongo')
const multer = require('multer')

app.use(cors())
app.use(express.json())

const dbURI = "mongodb+srv://achint_harshil:321688442211Aa@nodetuts.geh6lth.mongodb.net/NodeTutsDB?retryWrites=true&w=majority"

//connecting db
mongoose.connect(dbURI)
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err)
})

//MULTER

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "../client/public/images")
    },

    filename: (req,file,cb)=>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

//GET
app.get("/", (req,res)=>{
    Vendor.find()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

//POST
app.post("/", upload.single("image"), async (req,res)=>{
    const {name, category, lat, lon, description, description_long} = req.body
    const id = Date.now()
    const data = {
        id: id,
        name: name,
        category: category,
        image: req.file.filename,
        lat: lat,
        lon: lon,
        description: description,
        description_long: description_long
    }
    
    await Vendor.insertMany([data])
})

//listening
app.listen(8000, ()=>{
    console.log("alive at 8000")
})
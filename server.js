const http = require("node:http")
// console.log(http)



//? /////////////////////////////......د بقا الفاهمان...///////

const express = require("express")
const app = express()



//* عاوز بقا اعرض الصقحه اللي عملتهااا في الخارج دي من المسار

const path = require("node:path")
const x = path.join(__dirname , "./public")
app.use(express.static(x))
// console.log(__dirname)    //? بتجيب المسار 




//*hbs هنا هرندر الصفحه الدينمك 
app.set('view engine', 'hbs');   //? د مهم جدا د اللي هيشغلو اصلا
const pathDirctory = path.join(__dirname , "./templates/views") //? دي هقرء المسار
app.set("views" , pathDirctory)  //? دي علشان انفذ



//* هستدعي الهدر
var hbs = require('hbs');
const pathPartils = path.join(__dirname , "./templates/views/partials")
hbs.registerPartials(pathPartils)


app.get("/" , (req , res) =>{
    res.render("index" , {
        logo : "Home Page",
        title : "Hellow web Site",
        site : "Ramadan Kareem Happy New Year",
        img11 : "images/img1.jpg"
    })
})


app.get("/servers" , (req , res) =>{
    res.render("servers" , {
        logo : "Servers Page",
        img3 : "images/img3.jpg",
        img4 : "images/img4.jpg",
        img5 : "images/img5.jpg",

    })
})

app.get("/users" , (req , res) =>{
    res.render("users" ,{
        logo : "User Page",
        name : "Adel",
        age : "20",
        city : "MET GAMER",
        img1 :"images/lantern.png"
    })
})


app.get(/.*/ , (req , res) =>{
    res.render("404" , {
        error1 : "404",
        error2 : "page is not found!❌",
        error3 : "عذرا الصفحه التي تبحث عنها غير موجوده او قد تم نقلها.",
    })
})



const port = process.env.PORT || 5000
app.listen(port , () =>{
    console.log(`server is running on port >> 🟢 ${port} http://localhost:5000`)
})
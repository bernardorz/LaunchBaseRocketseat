const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape : false,
    noCache : true

})

server.get("/", (request, response) => {
    
    const data = {
        avatar : "https://avatars.githubusercontent.com/u/57377521?s=460&u=a0e9f7373ad670f4a45bc08fe0c9c69965191dfe&v=4",
        nome : "Bernardo Rizzatti",
        role : "sofwtare developer",
        empresa : "Brasil Connecting",
        linkedin : "https://www.linkedin.com/in/bernardo-rizzatti-6382ab1a6/",
        github : "https://github.com/bernardorz"
    }
    
    return response.render("about", {items : data})
})

server.get("/portifolio", (request, response) => {
    return response.render("portifolio", {items : videos})
})

server.get("/conteudos", (request, response) => {
    return response.render("conteudos")
})

server.get("/video", (request, response) => {
    const id = request.query.id
    const video = videos.find((video) => {
       return video.id == id
       
    })

    if(!video) {
        return response.send("Not found video ")
    }


    return response.render("video", { item : video })
})

server.listen(3001, () => {
    console.log("server is running")
})

//<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
//rel="stylesheet">

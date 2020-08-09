const proffys = [
    { 
     name: "Allexia Alcantara",
     avatar: "https://avatars0.githubusercontent.com/u/48778668?s=460&u=0a692bb8ea3cc8284eaf7a8d99e72d9ae1d18de8&v=4", 
     whatsapp: "90938407", 
     bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque corporis quisquam, quo facilis earum ullam quibusdam optio. Possimus voluptates est ullam, itaque dolore tempore inventore, fuga quasi voluptatibus labore a.", 
     subject: "Developer", 
     cost: "20", 
     weekday: [0], 
     time_from: [720], 
     time_to: [1220]
    },

    { 
        name: "Danny",
        avatar: "https://avatars0.githubusercontent.com/u/48778668?s=460&u=0a692bb8ea3cc8284eaf7a8d99e72d9ae1d18de8&v=4", 
        whatsapp: "90938407", 
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque corporis quisquam, quo facilis earum ullam quibusdam optio. Possimus voluptates est ullam, itaque dolore tempore inventore, fuga quasi voluptatibus labore a.", 
        subject: "Developer", 
        cost: "1", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },

    { 
        name: "Filipe Magalhães",
        avatar: "https://avatars2.githubusercontent.com/u/56122079?s=460&u=75db9013afc37d4071960628532d827e54e64339&v=4", 
        whatsapp: "90938407", 
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque corporis quisquam, quo facilis earum ullam quibusdam optio. Possimus voluptates est ullam, itaque dolore tempore inventore, fuga quasi voluptatibus labore a.", 
        subject: "Analista de suporte", 
        cost: "1", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express ()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5000)
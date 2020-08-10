const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    proffyValue = { 
        name: "Allexia Alcantara",
        avatar: "https://avatars0.githubusercontent.com/u/48778668?s=460&u=0a692bb8ea3cc8284eaf7a8d99e72d9ae1d18de8&v=4", 
        whatsapp: "90938407", 
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque corporis quisquam, quo facilis earum ullam quibusdam optio. Possimus voluptates est ullam, itaque dolore tempore inventore, fuga quasi voluptatibus labore a."
       }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

//    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    // console.log(selectClassesSchedules)

})
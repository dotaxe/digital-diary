var development = require('./config.dev').development;
var production = {
    host: 'localhost',
    port: 300,
    env: 'production',
    database: {
        name: "",
        username: "",
        password: "",
        options: {
            host: "localhost",
            port: "5432",
            dialect: 'postgres',
            logging: console.log,
            timezone: '+03:00',
            isolationLevel: "READ COMMITTED",
            define: {
                underscoredAll: true,
                underscored: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        },
        inits: {
            users: [{name: 'Allison Tyler', password: 'password1'},
                {name: 'Izabella Hartman', password: 'password2'},
                {name: 'Bianca Bates', password: 'password'},
                {name: 'Kelton Freeman', password: 'password'},
                {name: 'Lillianna Washington', password: 'password'},
                {name: 'Courtney Harrell', password: 'password'},
                {name: 'Gretchen Singh', password: 'password'},
                {name: 'Fiona Newman', password: 'password'},
                {name: 'Brayden Richards', password: 'password'},
                {name: 'Greta Norton', password: 'password'},
                {name: 'Rolando Figueroa', password: 'password'},
                {name: 'Gordon Escobar', password: 'password'},
                {name: 'Peyton Villanueva', password: 'password'},
                {name: 'Denzel Krause', password: 'password'},
                {name: 'Zaiden Pearson', password: 'password'},
                {name: 'Jose Richards', password: 'password'},
                {name: 'Hayden Walker', password: 'password'},
                {name: 'Lizeth Davila', password: 'password'},
                {name: 'Madalyn Vincent', password: 'password'},
                {name: 'Luca Whitney', password: 'password'}],
            subjects: ['Mathematics', 'Reading', 'Art', 'Sports', 'Computer Science'],
            classes: ['Alpha', 'Bravo', 'Charlie']
        }
    }
};

var config = global.process.env.NODE_ENV === 'production' ? production : development;
global.IS_PRODUCTION = global.process.env.NODE_ENV === 'production';

module.exports = config;
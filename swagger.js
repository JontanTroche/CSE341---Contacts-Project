const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Useres Api'
    },
    host: 'localhost:3000',
    schemes: ['htpps', 'http']
};

const outputFile = './swagger.json';
const endPointsFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endPointsFiles, doc);
const jsonServer = require('json-server');
const dotenv = require('dotenv');
const cors = require('cors');
const middlewares = jsonServer.defaults();

// obtain our request endpoints
const endpoints = require('./endpoints');

// obtain an instance of a server
const server = jsonServer.create();

// wire up the default node middlewares
server.use(middlewares);

// parse the body using bodyParser middleware
server.use(jsonServer.bodyParser);

//Para obtener las variables de entorno del .env
dotenv.config();

//Cors
server.use(cors());

// LOGIN ROUTE - POST
const { postLogin } = endpoints;

server.post(postLogin.endpoint, (req, res, next) => {
    const { email, password } = req.body;
    const responseObj = postLogin.data.email === email && postLogin.data.password === password ? postLogin.response.token : null;

    if (responseObj) {
        res.send({ 
            token: responseObj,
            email,
            photoUrl: 'https://avatars.githubusercontent.com/u/85971180?s=96&v=4'
        });
    } else {
        res.status(401);
        res.send({
            errorMsg: 'unauthorized',
            code: 401
        });
    }
    next();
});

// SERVER ON PORT NUMBER AS SPECIFIED HERE
server.listen(4005, () => {
    console.log('JSON Server is running');
});
//Middleware that logs out the type and path of each request to the server
const clog = (req, res) => {
    const clr= '\x1b[36m';
    switch (req.method) {
        case 'GET' : {
            console.info(`📗 ${clr}${req.method} request to ${req.path}`);
            break;
        }
        case 'POST' : {
            console.info(`📘 ${clr}${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.log(`📙 ${clr} ${req.method} request to ${req.path}`);
    }

};

exports.clog = clog;
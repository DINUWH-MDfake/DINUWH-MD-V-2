const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG, || "https://i.ibb.co/mcWTCp2/3586.jpg"
ALIVE_MSG: process.env.ALIVE_IMG, || "*හායි ලස්සන ළමයෝව් DINUWH-MD බොට් වෙතව සාදරෙයෙන් පිලිගන්නේ නෑ🥲*"
};

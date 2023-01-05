const Eris = require("eris");
const fs = require('fs');

let rawdata = fs.readFileSync('./config.json');
let config = JSON.parse(rawdata);

let token = config.discord_bot_token;
const bot = new Eris(token);



bot.on("ready", () => {
    console.log("Ready!, listening to " + prefix);
});

const prefix = config.prefix;

bot.on("messageCreate", (msg) => {
    if (!msg.content.startsWith(prefix)) return;
    
    const [command, ...args] = msg.content.slice(prefix.length).split(' ');

    
    if (command === "ping") {
        bot.createMessage(msg.channel.id, "pong");
    }
    if (command === "echo") {
        let retStr = "";
        for (let ele in args){
            retStr += args[ele] + " ";
        }
        bot.createMessage(msg.channel.id, retStr);
        retStr = null;
        
    }
}); 


bot.connect();

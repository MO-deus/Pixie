
module.exports = {
    name : 'youtube',
    desscription : 'sends a youtube link!',
    execute(message, args){
        
        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send("you have the right permissions.");
        }

        else {
            message.channel.send("you DON'T have the right permissions.");            
        }

        // if(message.member.roles.cache.some(r => r.name === "MOD")){

        //     message.channel.send('https://www.youtube.com/channel/UCgIfLpQvelloDi8I0Ycbwpg');
        // }
    
        // else {
        //     message.channel.send('You are not the guy, pal. Trust me');
        //     message.member.roles.add('1000674795911921664').catch(console.error);
        // }

    }
}
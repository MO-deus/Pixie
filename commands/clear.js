
module.exports = {
    name: 'clear',
    descriptoin: 'Clears Messages',
    async execute(message, args){
        if(!args[0]) return message.reply('Please enter the amount of messages to be cleared');
        if(isNaN(args[0])) return message.reply('enter a numeric value');
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}
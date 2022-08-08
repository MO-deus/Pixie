
module.exports = {
    name : 'ban',
    description : "command for banning members",
    execute(message, args)
    {
        const member = message.mentions.users.first();

        if(member)
        {
            const TargetMembers = message.guild.members.cache.get(member.id);
            TargetMembers.ban();
            message.channel.send("User has been banned");
        }
        else {
            message.channel.send('Provide a member name');
        }
    }
}
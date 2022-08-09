
module.exports = {
    name : 'kick',
    description : "command for kicking members",
    execute(message, args)
    {
        const member = message.mentions.users.first();

        if(member)
        {
            const TargetMembers = message.guild.members.cache.get(member.id);
            TargetMembers.kick();
            message.channel.send("User has been kicked");
        }
        else {
            message.channel.send('Provide a member name');
        }
    }
}
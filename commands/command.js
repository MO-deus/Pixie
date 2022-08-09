module.exports = {
    name : 'Commands',
    description: "Embeds",

    execute(message, args, discord){
        const newEmbed = new discord.MessageEmbed()
        .setColor('#582b7a')
        .setTitle('Rules')
        .setDescription('This is Embed for Server rules')
        .addFields(
            {name:'Rule 1', value: 'Be nice'},
            {name:'Rule 2', value: 'Be cool'},
            {name:'Rule 3', value: 'Be awesome'}
        )
        .setImage('https://static.zerochan.net/Prinz.Eugen.%28Azur.Lane%29.full.3130056.jpg')
        .setFooter({text : ' Make sure to check the rules '});

        message.channel.send({ embeds: [newEmbed] });
    }
}
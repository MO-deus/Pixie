
var Scraper =  require('images-scraper');

const google = new Scraper({
    puppeteer : {
        headless : true
    }
});

module.exports = {
    name : 'images',
    description : 'searches image on the net',

    async execute(Client, message, args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('at least specify the image bruh');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0]);
    }
}
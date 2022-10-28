const rwClient = require('./twitterClient');


const tweet = async () => {
    
    try {
        await rwClient.v1.tweet("hello testing Twitter API")
    } catch (e) {
        console.error(e);
    }
}

tweet()
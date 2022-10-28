const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi ({
    appKey: "7dwo3UwgSKJudPb1HeJuIzSNT",
    appSecret: "6z8q2a6LLSf4mZacFK6OVM0IhEvJaCwJjnpPHNZzhyz2NGvl9e",
    accessToken: "1133664097227067392-yQKWntzNJPaHtnKX28sGBWpdtAvAE5",
    accessSecret: "Fl8D7a9XnoBq9BsW93tYcSYh08U5XThP3yFG0hvA4Sx"
});

const rwClient = client.readWrite


const tweet = async () => {
    
    try {

        await rwClient.v1.tweet("Hello World using twitter API and nodejs")

    } catch (e) {
        console.error(e);
    }
}

tweet()

// require("dotenv").config();

// module.exports = new TwitterApi({
//     appKey: process.env.APP_KEY,
//     appSecret: process.env.APP_SECRET,
//     accessToken: process.env.ACCESS_TOKEN,
//     accessSecret: process.env.ACCESS_SECRET
// })

// module.export = rwClient


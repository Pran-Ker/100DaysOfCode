const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi ({
    appKey: "7dwo3UwgSKJudPb1HeJuIzSNT9e",
    appSecret: "6z8q2a6LLSf4mZacFK6OVM0IhEvJaCwJjnpPHNZzhyz2NGvl9e",
    accessToken: "1133664097227067392-yQKWntzNJPaHtnKX28sGBWpdtAvAE5",
    accessSecret: "Fl8D7a9XnoBq9BsW93tYcSYh08U5XThP3yFG0hvA4Sxv6"
});


"https://api.twitter.com/labs/2/tweets/1138505981460193280?expansions=attachments.media_keys&tweet.fields=created_at,author_id,lang,source,public_metrics,context_annotations,entities"



const rwClient = client.readWrite

const tweetOfId20 = await client.v2.singleTweet('20', {
    expansions: [
      'HebbarPrannay',
      'Day 26',
    ],
  });

tweetOfId20();


// const tweet = async () => {
    
//     try {

//         await rwClient.v1.tweet("Hello World using twitter API and nodejs")

//     } catch (e) {
//         console.error(e);
//     }
// }

// tweet()

// require("dotenv").config();

// module.exports = new TwitterApi({
//     appKey: process.env.APP_KEY,
//     appSecret: process.env.APP_SECRET,
//     accessToken: process.env.ACCESS_TOKEN,
//     accessSecret: process.env.ACCESS_SECRET
// })

// module.export = rwClient



wget --no-verbose -O /tmp/chrome.deb https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_107.0.5304.87-1_amd64.deb \
  && apt install -y /tmp/chrome.deb \
  && rm /tmp/chrome.deb
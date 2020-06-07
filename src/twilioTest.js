var twilio = require('twilio');

var accountSid = 'ACec78e0f16e9d7b04255d3a9575310872'; // Your Account SID from www.twilio.com/console
var authToken = '95743c7feb6a0877025584e98729af05';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Thanks for your order! On a scale of 1-10 would you recommend Atishay to a friend? Reply with the number 1 to 10 to this message',
    to: '+919971310538',  // Text this number
    from: '+12055289931' // From a valid Twilio number
}).then((message) => console.log(message.sid));
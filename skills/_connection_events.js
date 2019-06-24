/* This module kicks in if no Botkit Studio token has been provided */

module.exports = function(controller) {

    controller.on('hello', conductOnboarding);
    controller.on('welcome_back', conductOnboarding);

    function conductOnboarding(bot, message) {

      bot.startConversation(message, function(err, convo) {

        convo.say({
          text: 'hello how can i help you in admission',
          quick_replies: [
            {
              title: 'admission process',
              payload: 'admission process',
            },
			            {
              title: 'hostel facility',
              payload: 'hostel facility',
            },
			            {
              title: 'course list',
              payload: 'course list',
            },
          ]
        });


      });

    }

    

}

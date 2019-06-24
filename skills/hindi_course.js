module.exports = function(controller) {
 controller.hears([' कोर्स लिस्ट ','आपके यहाँ कौन कौन से कोर्स चलते है ','कोर्स नाम'],'message_received', function(bot, message) {

    bot.reply(message,{
        text: 'कोर्स की लिस्ट :',
        quick_replies: [
            {
                title: 'सर्टिफिकेट',
                payload: 'सर्टिफिकेट'
            },
            {
                title: 'डिप्लोमा',
                payload: 'डिप्लोमा'
            },
			{
                title: 'स्नातक',
                payload: 'स्नातक'
            },
			{
                title: 'अनुस्नातक',
                payload: 'अनुस्नातक'
            },
			{
                title: 'ऍम.फिल और पी.अचडी . ',
                payload: 'ऍम.फिल और पी.अचडी .'
            },
        ]
      },function() {});

  });
  controller.hears('सर्टिफिकेट','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'सर्टिफिकेट कोर्स की लिस्ट ',
        quick_replies: [
            {
                title: 'लाइट म्यूजिक',
                payload: 'लाइट म्यूजिक'
            },
            {
                title: 'छंद  शास्त्र ',
                payload: 'छंद  शास्त्र '
            },
			{
                title: 'आर्ट और क्राफ्ट',
                payload: 'आर्ट और क्राफ्ट'
            },
			{
                title: 'कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी ',
                payload: 'कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी '
            },
        ]
      },function() {});

  });
  controller.hears('डिप्लोमा','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'डिप्लोमा कोर्स की लिस्ट ',
        quick_replies: [
            {
                title: 'पी.जी.डी . इन योगिक आर्ट और साइंस ',
                payload: 'पी.जी.डी . इन योगिक आर्ट और साइंस '
            },
            {
                title: 'पी.जी.डी. इन ऑडियो विसुअल प्रोडक्शन ',
                payload: 'पी.जी.डी. इन ऑडियो विसुअल प्रोडक्शन'
            },
			{
                title: 'पी.जी.डी. इन कंप्यूटर एप्लीकेशन ',
                payload: 'पी.जी.डी. इन कंप्यूटर एप्लीकेशन '
            },
			{
                title: 'पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी ',
                payload: 'पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी'
            },
			{
                title: 'पी.जी.डी. इन प्रयोजनमूलक हिंदी',
                payload: 'पी.जी.डी. इन प्रयोजनमूलक हिंदी'
            },
			{
                title: 'पी.जी.डी. इन ट्रांसलेशन हिंदी',
                payload: 'पी.जी.डी. इन ट्रांसलेशन हिंदी'
            },	
        ]
      },function() {});

  });
  controller.hears('अनुस्नातक','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'अनुस्नातक कोर्स की लिस्ट',
        quick_replies: [
            {
                title: 'ऍम.एड.',
                payload: 'ऍम.एड,'
            },
            {
                title: 'मास्टर ऑफ़ फिजिकल एजुकेशन एंड सपोर्टस',
                payload: 'मास्टर ऑफ़ फिजिकल एजुकेशन एंड स्पोर्ट्स  '
            },
			{
                title: 'मास्टर ऑफ़ फिजिकल एजुकेशन',
                payload: 'मास्टर ऑफ़ फिजिकल एजुकेशन'
            },
			{
                title: 'एम.ए.',
                payload: 'एम.ए.'
            },
			{
                title: 'एम.सी,ए.',
                payload: 'एम.सी,ए.'
            },
			{
                title: 'एम.लिब.',
                payload: 'एम.लिब.'
            },
			{
                title: 'एम.एस.डब्लू.',
                payload: 'एम.एस.डब्लू.'
            },
			{		
                title: 'एम.एस.सी. इन एन्विरोंमेंतल साइंस एंड टेक्नोलॉजी ',
                payload: 'एम.एस.सी. इन एन्विरोंमेंतल साइंस एंड टेक्नोलॉजी '
            },
			{		
                title: 'एम.एस.सी. इन माइक्रोबायोलॉजी ',
                payload: 'एम.एस.सी. इन माइक्रोबायोलॉजी '
            },						
			{		
                title: 'एम.बी.ए. इन रूरल मैनेजमेंट',
                payload: 'एम.बी.ए. इन रूरल मैनेजमेंट'
            },		
        ]
      },function() {});

  });
  controller.hears('स्नातक','message_received', function(bot, message) {
    bot.reply(message,{
        text: 'स्नातक कोर्स की लिस्ट',
        quick_replies: [
            {
                title: 'बी.एड.',
                payload: 'बी.एड.'
            },
            {
                title: 'बी.ए.',
                payload: 'बी.ए.'
            },
			{
                title: 'बी.एस.सी.',
                payload: 'बी.एस.सी.'
            },
			{
                title: 'बी.वोक.( फूड प्रोसेस टेक्नोलॉजी)',
                payload: 'बी.वोक.( फूड प्रोसेस टेक्नोलॉजी)'
            },
			{
                title: 'बी.वोक.(फैशन डिजाईन और अपैरल साइंस)',
                payload: 'बी.वोक.(फैशन डिजाईन और अपैरल साइंस)'
            },
			{
                title: 'बेचेलर ऑफ़ रूरल स्टडीज ',
                payload: 'बेचेलर ऑफ़ रूरल स्टडीज '
            },
			{
                title: 'बेचेलर इन फिजिकल एजुकेशन एंड सपोर्टस',
                payload: 'बेचेलर इन फिजिकल एजुकेशन एंड सपोर्टस'
            },
			{
                title: 'बेचेलर इन फिजिकल एजुकेशन',
                payload: 'बेचेलर इन फिजिकल एजुकेशन'
            },
			{
                title: 'बी.लिब.आई.एसी.',
                payload: 'बी.लिब.आई.एसी.'
            },	
			
        ]
      },function() {});

  });
	controller.hears(['एम.ए. फीस','एम.ए फीस'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'एम.ए. कोर्स की फीस 4455rsहैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'एम.ए.',
                payload: 'एम.ए.'
            },
			
		]
      },function() {});
  });
  	controller.hears(['एम.एस.डब्लू. फीस','एमएसडब्लु  फीस'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'एम.एस.डब्लू. कोर्स की फीस 4455rsहैं ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'एम.एस.डब्लू.',
                payload: 'एम.एस.डब्लू.'
            },
			
		]
      },function() {});
  });
   controller.hears(['बी.लिब. फीस','बी.लिब फीस','बी.लिब.आई.एसी. फीस'],'message_received', function(bot, message) {
   
   bot.reply(message,{
        text:'बी.लिब.आई.एसी. कोर्स की फीस 4455rsहैं ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'बी.लिब.आई.एसी.',
                payload: 'बी.लिब.आई.एसी.'
            },
			
		]
      },function() {});
  });
  controller.hears(['एम.लिब. फीस','एम.लिब फीस'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'एम.लिब.  कोर्स की फीस 4455rsहैं   ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'एम.लिब.',
                payload: 'एम.लिब.'
            },
			
		]
      },function() {});
  });
  controller.hears(['एम.सी.ए. फीस','एमसीए फीस'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'एम.सी.ए. कोर्स की फीस 9905rsहैं ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'एम.सी.ए.',
                payload: 'एम.सी.ए.'
            },
			
		]
      },function() {});
  });
  controller.hears(['पी.जी.डी.सी.एच.एन. फीस','पीजीडीसीएचएन कोर्स  फीस','पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी फीस'],'message_received', function(bot, message) {
	 bot.reply(message,{
        text:'पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी कोर्स की फीस 8105rsहैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी',
                payload: 'पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी'
            },
			
		]
      },function() {});
  });
    controller.hears(['पी.जी.डी.सी.ए. फीस','पीजीडीसीए कोर्स  फीस'],'message_received', function(bot, message) {
	 bot.reply(message,{
        text:'पी.जी.डी.सी.ए. कोर्स की फीस 9905rsहैं ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पी.जी.डी.सी.ए.',
                payload: 'पी.जी.डी.सी.ए.'
            },
			
		]
      },function() {});
  });
  controller.hears(['एम.ए  योगा फीस','एम.ए. योगा कोर्स  फीस'],'message_received', function(bot, message) {
	  bot.reply(message,{
        text:'एम.ए. योगा कोर्स की फीस 13125rsहैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'एम.ए  योगा',
                payload: 'एम.ए  योगा'
            },
			
		]
      },function() {});
  });
   controller.hears(['योगा सर्टिफिकेट फीस','योगा सर्टिफिकेट कोर्स फीस'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'योगा सर्टिफिकेट कोर्स की फीस 6000rsहैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पी.जी.डी . इन योगिक आर्ट और साइंस',
                payload: 'पी.जी.डी . इन योगिक आर्ट और साइंस'
            },
			
		]
      },function() {});
  });
 controller.hears(['डिप्लोमा योगा फीस','डिप्लोमा योगा कोर्स फीस'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'योगा सर्टिफिकेट कोर्स की फीस 12725rsहैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पी.जी.डी . इन योगिक आर्ट और साइंस',
                payload: 'पी.जी.डी . इन योगिक आर्ट और साइंस'
            },
			
		]
      },function() {});
  });
 controller.hears(['ऑडियो विसुअल फीस ','ऑडियो विसुअल कोर्स  फीस'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'ऑडियो विसुअल  कोर्स की फीस 16605rsहैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पी.जी.डी. इन ऑडियो विसुअल प्रोडक्शन',
                payload: 'पी.जी.डी. इन ऑडियो विसुअल प्रोडक्शन'
            },
			
		]
      },function() {});
  });
  controller.hears(['कन्या छात्रालय फीस'],'message_received', function(bot, message) {
	 bot.reply(message,{
        text:'कन्या छात्रालय की  6 महीने की फीस 7750rsहैं  ',
        quick_replies: [
            {
                title: 'छात्रालय सुविधा',
                payload: 'छात्रालय सुविधा'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			
		]
      },function() {});
  });
  controller.hears(['हॉस्टल फीस','बॉय हॉस्टल फीस'],'message_received', function(bot, message) {
	 bot.reply(message,{
        text:'बॉय हॉस्टल की 6 महीने की फीस 10000rsहैं  ',
        quick_replies: [
            {
                title: 'छात्रालय सुविधा',
                payload: 'छात्रालय सुविधा'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			
		]
      },function() {});
  });
  
  
	controller.hears('लाइट म्यूजिक','message_received', function(bot, message) {
  	 bot.reply(message,{
        text:'यह 6 महीने का कोर्स हैं |\n\n 12th होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
	controller.hears('छंद  शास्त्र ','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 6 महीने का कोर्स हैं |\n\n 12th होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('आर्ट और क्राफ्ट ','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\n 12th होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी ','message_received', function(bot, message) {
	bot.reply(message,{
        text:'यह 6 महीने का कोर्स हैं |\n\n 12th होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {}); 
 });
  controller.hears('पी.जी.डी . इन योगिक आर्ट और साइंस ','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'डिप्लोमा योगा फीस',
                payload: 'डिप्लोमा योगा फीस'
            },
		]
      },function() {});
  });
  controller.hears('पी.जी.डी. इन ऑडियो विसुअल प्रोडक्शन','message_received', function(bot, message) {
	bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'ऑडियो विसुअल फीस',
                payload: 'ऑडियो विसुअल फीस'
            }, 
		]
      },function() {}); 
 });
   controller.hears('पी.जी.डी. इन कंप्यूटर एप्लीकेशन ','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पी.जी.डी.सी.ए. फीस',
                payload: 'पी.जी.डी.सी.ए. फीस'
            },
		]
      },function() {});
  });
  controller.hears('पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी फीस',
                payload: 'पी.जी.डी. इन कंप्यूटर हार्डवेयर और नेटवर्क टेक्नोलॉजी फीस'
            },
			
		]
      },function() {});
  });
  controller.hears('पी.जी.डी. इन प्रयोजनमूलक हिंदी','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('पी.जी.डी. इन ट्रांसलेशन हिंदी','message_received', function(bot, message) {
	bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('बी.एड.','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं |\n\nयहाँ पर आप  Maths, Science, English, Sanskrit, Gujarati, Social Science, Primary Education and Hindi इन सभी विषय में बी.एड. कर सकते हैं| ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('बी.ए.','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 3 वर्ष का कोर्स हैं |\n\n 12th होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं |\n\nयहाँ पर आप  English ,Gujarati ,Hindi ,History ,Economics ,Sociology इन सभी विषय में बी.ए. कर सकते हैं| ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('बी.एस.सी.','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 3 वर्ष का कोर्स हैं |\n\n 12th साइंस में B/AB के साथ  होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('बी.वोक.( फूड प्रोसेस टेक्नोलॉजी)','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 3 वर्ष का कोर्स हैं |\n\n 12th साइंस में B/AB के साथ  होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('बी.वोक.(फैशन डिजाईन और अपैरल साइंस)','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 3 वर्ष का कोर्स हैं |\n\n 12th होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('बेचेलर ऑफ़ रूरल स्टडीज ','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 3 वर्ष का कोर्स हैं |\n\n 12th होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('बेचेलर इन फिजिकल एजुकेशन एंड सपोर्टस','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 3 वर्ष का कोर्स हैं |\n\n 12th होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });    
  controller.hears('बेचेलर इन फिजिकल एजुकेशन','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});
  });
  controller.hears('बी.लिब.आई.एसी.','message_received', function(bot, message) {
bot.reply(message,{
        text:'यह 1 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {}); 
 });
  controller.hears('ऍम.एड.','message_received', function(bot, message) {
bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nबी.एड. में स्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});  
 });
  controller.hears('मास्टर ऑफ़ फिजिकल एजुकेशन एंड सपोर्टस','message_received', function(bot, message) {
	bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nबी.पी.इ.एस. में स्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});  
 });
  controller.hears('मास्टर ऑफ़ फिजिकल एजुकेशन','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nबी.पी.एड. में स्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं |',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {}); 
  });
    controller.hears('एम.ए.','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं |\n\nयहाँ पर आप Gujarati, Hindi, English, Economics, History, Sociology, Gandhian Thoughts, Journalism and Mass Communication, Jain Study, Human Resource Development,Yoga इन सभी विषय में एम. ए. कर सकते हैं|',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'एम.ए. फीस',
                payload: 'एम.ए. फीस'
            },
			
		]
      },function() {}); 
  }); 
  controller.hears('एम.सी,ए.','message_received', function(bot, message) {
	bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं |\n\nयहाँ पर एम.सी,ए. दो तरह से कर सकते हैं |\n\n1.Regular  2.Lateral\n\n1.यह 3 वर्ष का कोर्स होता हैं ,और इस में 45 सीट् होती हैं |\n\n2.यह कोर्स 2 वर्ष का होता हैं, और इसमे प्रवेश परीक्षा ली जाती हैं |  ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'एम.सी.ए. फीस',
                payload: 'एम.सी.ए. फीस'
            },
			
		]
      },function() {});  
 });
  controller.hears('एम.लिब.','message_received', function(bot, message) {
   bot.reply(message,'');
  bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nबी.लिब. में स्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'एम.लिब. फीस',
                payload: 'एम.लिब. फीस'
            },
			
		]
      },function() {}); 
  }); 
  controller.hears('एम.एस.डब्लू.','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं |\n\nऔर एस कोर्स में आपको फ़ील्ड वर्क भी करना होता हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'क्षेत्रकार्य',
                payload: 'क्षेत्रकार्य'
            },
			{
                title: 'एम.एस.डब्लू. फीस',
                payload: 'एम.एस.डब्लू. फीस'
            },
			
		]
      },function() {}); 
  }); 
  controller.hears('एम.एस.सी. इन माइक्रोबायोलॉजी','message_received', function(bot, message) {
	bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nमाइक्रोबायोलॉजी में स्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {});  
 }); 
  controller.hears('एम.एस.सी. इन एन्विरोंमेंतल साइंस एंड टेक्नोलॉजी','message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {}); 
  });
  controller.hears('एम.बी.ए. इन रूरल मैनेजमेंट','message_received', function(bot, message) {
	bot.reply(message,{
        text:'यह 2 वर्ष का कोर्स हैं |\n\nस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं | ',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {}); 
	});
  controller.hears('ऍम.फिल और पी.अचडी .','message_received', function(bot, message) {
	bot.reply(message,{
        text:'अनुस्नातक होने के बाद आप इस कोर्स के लिए आवेदन कर सकते हैं.\n\nयहाँ पर आप  Education ,Gujarati ,Hindi ,Economics ,History ,Sociology ,Social Work ,Gandhian Thoughts ,Science and Non-violence ,Journalism and Mass Communication ,Library and Information Science ,Computer Science ,Microbiology ,Physical Education ,Rural Management ,Population Education ,Peace Studies & Conflict Resolution ,Adult Education इन सभी विषय में ऍम.फिल और पी.अचडी. कर सकते हैं|',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {}); 
	});  
}

module.exports = function(controller) {
controller.hears('नमस्कार ','message_received', function(bot, message) {
    bot.reply(message,'नमस्कार');
  });
  controller.hears(['आपके महाविद्यालय का क्या नाम हैं ','महाविद्यालय का नाम '],'message_received', function(bot, message) {
    bot.reply(message,'महादेव देसाई समाजसेवा संकुल महाविद्यालय गूजरात विद्यापीठ अहमदाबाद');
  });
  controller.hears(['प्रवेश फॉर्म की क्या दिनांक हैं ','फॉर्म दिनांक'],'message_received', function(bot, message) {
    bot.reply(message,'15 May');
  });
   controller.hears(['प्रवेश की क्या प्रक्रिया हैं','प्रवेश प्रक्रिया','प्रवेश','प्रवेस'],'message_received', function(bot, message) {
    bot.reply(message,'सबसे पहले ऑनलाइन फॉर्म भरना हैं और उसके बाद प्रवेश की पुष्ठी करने व फीस जमा करवाने के लिये महाविद्यालय में आइये |');
    bot.reply(message,'[फॉर्म भरने के लिये यहाँ क्लिक करे],(http://www.gujaratvidyapith.org/admm/index.htm)');
  });
    controller.hears(['महाविद्यालय द्वारा छात्रालय में क्या क्या सुविधा मिलती हैं ','छात्रालय सुविधा'],'message_received', function(bot, message) {
    bot.reply(message,'- यहाँ आपको अच्छे किस्म की खटिया,पढ़ने की मेज,लाइट ,पंखा मिलता हैं | ');
    bot.reply(message,'- सामान्य कमरा, कंप्यूटर व  मनोरंजन तथा पढ़ने के लिए कमरे,विश्राम और अतिथि कक्ष भी।');
    bot.reply(message,'-24X7 पानी और बिजली की आपूर्ति ');
    bot.reply(message,'- किचन / स्टोर के साथ डाइनिंग हॉल');
    bot.reply(message,'- सोलर वाटर हीटर');
    bot.reply(message,'-स्टीम कुकिंग सिस्टम जो खाना पकाने के समय को बचाता है और मेस के बिल को कम करता है.');
    bot.reply(message,'- अहमदाबाद परिसर में खाना पकाने के लिए पीएनजी लाइन.');
    bot.reply(message,'- पर्याप्त स्वच्छता सुविधाएं');
	bot.reply(message,'- गर्ल्स हॉस्टल के लिये पर्याप्त सुरक्षा व्यवस्था');
  });
  controller.hears(['अध्ययन में कितनी भाषा का उपयोग होता हैं','अध्ययन में उपयोग में आने वाली भाषा '],'message_received', function(bot, message) {
    bot.reply(message,'गुजराती,हिंदी,अंग्रेजी');
  });
    controller.hears(['प्रवेश परीक्षा की तारीख क्या है','प्रवेश परीक्षा की तारीख'],'message_received', function(bot, message) {
    bot.reply(message,'20 june');
  });
  controller.hears(['आपके महाविद्यालयमें प्रवेश के लिए कोई भी प्रवेश परीक्षा ली जाती है','प्रवेश परीक्षा'],'message_received', function(bot, message) {
    bot.reply(message,'लेटरल प्रवेश में प्रवेश के लिये परीक्षा ली जाती हैं |');
  });
  controller.hears(['प्रवेश परीक्षा की योग्यता क्या है','प्रवेश परीक्षा की योग्यता'],'message_received', function(bot, message) {
	bot.reply(message,'60%');
  });
  controller.hears(['आपके छात्रावास में भोजन की गुणवत्ता क्या है','भोजन'],'message_received', function(bot, message) {
	bot.reply(message,'यहाँ हम छात्रावास में सर्वोत्तम गुणवत्ता का भोजन प्रदान करते हैं');
  });
  controller.hears(['महाविद्यालय और छात्रावास में किस प्रकार की पोशाक हैं ','पोशाक'],'message_received', function(bot, message) {
   
	  bot.reply(message,{
  text: 'महाविद्यालय और छात्रावास में केवल खादी की पोशाक की अनुमति है और यह हमारे महाविद्यालय की पोशाक है',
  files: [
      {
        url: 'https://i.ytimg.com/vi/EN6__NkRJgo/0.jpg',
        image: true
      }
	] 
  });
  });
 controller.hears(['महाविद्यालय कोई छात्रवृत्ति सुविधा प्रदान करता है','छात्रवृति'],'message_received', function(bot, message) {
   
	bot.reply(message,'हमारे महाविद्यालय सभी राजकीय छात्रवृत्ति प्रदान करते हैं');
  });  
  controller.hears(['क्लास का समय क्या है','क्लास समय '],'message_received', function(bot, message) {
	bot.reply(message,'8.00AM to 6.00PM');
  });
   controller.hears(['आपके महाविद्यालय की रैंकिंग क्या है','रैंकिंग'],'message_received', function(bot, message) {
	bot.reply(message,'यह UGC द्वारा अनुमोदित A + प्रमाणित महाविद्यालय है और यह एक डीम्ड महाविद्यालय है। इसकी रैंकिंग 5 में से 4.5 है');
  });
  controller.hears(['क्या महाविद्यालय कोई ऋण सुविधा प्रदान करता है','ऋण'],'message_received', function(bot, message) { 
	bot.reply(message,'हाँ हमारे महाविद्यालयगरीब छात्रों के लिए ऋण सुविधा प्रदान करते हैं और उन छात्रों के लिए भी ऋण प्रदान करते हैं जो स्वयं का स्टार्टअप व्यवसाय शुरू करना चाहते हैं');
  });
  controller.hears(['महाविद्यालय में प्रवेश के लिए कितने प्रतिशत की आवश्यकता है','प्रतिशत'],'message_received', function(bot, message) {
	bot.reply(message,'सभी विषयों में 50% से अधिक अंक अनिवार्य हैं');
  });
  controller.hears(['आपके महाविद्यालय में एक कक्षा में कितनी शीट हैं','शीट'],'message_received', function(bot, message) {
	bot.reply(message,'सभी कक्षा में 45 से 60 शीट उपलब्ध हैं');
  });
  controller.hears(['क्या आपके परिसर के अंदर वाई-फाई की सुविधा उपलब्ध है','वाई-फाई'],'message_received', function(bot, message) {
	bot.reply(message,'हाँ आप हमारे परिसर में 24 घंटे वाई-फाई का उपयोग कर सकते हैं');
  });
  controller.hears(['अपने महाविद्यालय के अध्यापक की जानकारी बताएं','अध्यापक'],'message_received', function(bot, message) {
	bot.reply(message,'[अध्यापक की जानकारी के लिय यहाँ क्लिक करे],(http://www.gujaratvidyapith.org/faculty.htm)');
  }); 
  controller.hears(['क्या आपके पास अपने महाविद्यालय में औद्योगिक प्रशिक्षण की सुविधा है','औद्योगिक प्रशिक्षण'],'message_received', function(bot, message) {
	bot.reply(message,'हाँ, हम छात्रों के विकास के लिए सभी प्रकार के औद्योगिक प्रशिक्षण और कार्यशाला की सुविधा प्रदान करते हैं');
  }); 
    controller.hears(['आपके महाविद्यालय में कितने विभाग हैं','विभाग'],'message_received', function(bot, message) {
	bot.reply(message,'1.गुजराती  2.हिंदी 3.ग्रामीण अर्थशास्त्र  4.इतिहास और संस्कृति 5.अभिलेखीय विज्ञान 6.सामाजिक मानविकी 7.सामाजिक पुनर्निर्माण 8.जैनिसम 9.सामाजिक कार्य 10.पत्रकारिता और जनसंचार 11.कंप्यूटर विज्ञान विभाग 12.पुस्तकालय विज्ञान और सूचना विज्ञान 13.गांधीवादी दर्शन 14.शांति अनुसंधान 15.बुद्धिज़्म');
  });   
  controller.hears(['आपके महाविद्यालयमें कितने कोर्स हैं','कोर्स'],'message_received', function(bot, message) {
    bot.reply(message,{
        text:'कोर्स की जानकारी यहाँ से प्राप्त करे ',
        quick_replies: [
            {
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट'
            },
		]
      },function() {});
  });
  controller.hears(['क्या  क्षेत्रकार्य में होने वाला खर्च महाविद्यालय द्वारा दिए जाते है','क्षेत्रकार्य में खर्च'],'message_received', function(bot, message) {
	bot.reply(message,'क्षेत्रकार्य में होने वाला खर्च विधार्थी खुद करता हैं');
  }); 
 controller.hears(['यहाँ  एम.एस.डब्लू. पाठ्यक्रम में  क्षेत्रकार्य होता है','क्षेत्रकार्य'],'message_received', function(bot, message) {
	bot.reply(message,'हाँ  एम.एस.डब्लू. कोर्स में हम क्षेत्रकार्य प्रदान करते हैं');
  });
  controller.hears('पाठ्यक्रम','message_received', function(bot, message) {
	 bot.reply(message,'[पाठ्यक्रम के लिये यहाँ क्लिक करे](http://www.gujaratvidyapith.org/syllabus.htm)');
  });
  controller.hears(['आपके महाविद्यालय के नियम क्या हैं','नियम'],'message_received', function(bot, message) {
	 bot.reply(message,'1.इस परिसर में केवल खादी पोशाक की अनुमति है.\n\n2.किसी भी पाठ्यक्रम में 80% उपस्थिति अनिवार्य है.\n\n3.आप नियमित रूप से प्रार्थना में आएंगे और रेटिया चलाएंगे.');
  });
  controller.hears(['महाविद्यालय के कौन कौन से परीक्षा देना होता हैं','जरुरी परीक्षा'],'message_received', function(bot, message) {
	 bot.reply(message,'1.समूह जीवन \n\n2. रेटीया \n\n3. उपासना\n\n4. छात्रालय परीक्षा');
  }); 
  controller.hears(['क्या आपके महाविद्यालय में पुस्तकालय है','पुस्तकालय'],'message_received', function(bot, message) {
	 bot.reply(message,'हाँ, हमारे परिसर में एक बहुत बड़ी लाइब्रेरी है। इसमें 7 लाख किताबें और पत्रिकाएँ हैं');
  });
  controller.hears(['आपका महाविद्यालय किस स्थान पर है','स्थान','लोकेशन'],'message_received', function(bot, message) {
	bot.reply(message,'आयकर कार्यालय के पास, आश्रम रोड, अहमदाबाद, गुजरात  380014');  
	bot.reply(message,'[मेप के लियेयहाँ क्लिक करे ](https://www.google.com/maps/place/Gujarat+Vidyapith/@23.0446798,72.5664692,)');
  });
   controller.hears(['क्या आपके महाविद्यालय में कौशल विकास के कोर्स  हैं','कौशल विकास'],'message_received', function(bot, message) {
	bot.reply(message,'हाँ हमारे महाविद्यालय संगीत, भाषा सीखने, उधोग, तैराकी,हस्तकला  की शिक्षा  प्रदान करता हैं ');  
  });
  controller.hears(['क्या आपके पास अपने महाविद्यालय में एन.एस.एस. और एन.सी.सी. की व्यवस्था है','एन.सी.सी.','एन.एस.एस.'],'message_received', function(bot, message) {
	bot.reply(message,'हाँ हमारे महाविद्यालय में एन.एस.एस. सुविधा है।');  
  });
  controller.hears(['क्या आपके महाविद्यालय में भ्रमण की सुविधा है','भ्रमण','प्रवास'],'message_received', function(bot, message) {
	bot.reply(message,'हाँ हमारे महाविद्यालय हर साल में भ्रमण और पदयात्रा का आयोजन करते हैं।');  
  });
 controller.hears(['मैं किसी भी विभाग से कैसे संपर्क कर सकता हूं','संपर्क'],'message_received', function(bot, message) {
	bot.reply(message,'संपर्क: 079-27541148, 079-27540746, 079-40016200');  
	bot.reply(message,'email: info@gujaratvidyapith.org');  
  });
 controller.hears(['क्या आपके महाविद्यालय में अतिरिक्त क्रेडिट कोर्स हैं','अतिरिक्त कोर्स','क्रेडिट कोर्स'],'message_received', function(bot, message) {
	bot.reply(message,'हाँ, एआईसीटीई के दिशानिर्देश के अनुसार छात्र अपने कोर्स के साथ एक अतिरिक्त विषय चुन सकता है.');  
  });
 controller.hears(['आपके महाविद्यालय के विकास की रिपोर्ट क्या है','रिपोर्ट'],'message_received', function(bot, message) {
	bot.reply(message,'[रिपोर्ट के लिये यहाँ क्लिक करे],(http://gujaratvidyapith.org/newsandevents/Gujarat%20Vidyapith%20Report-MHRD.pdf)');  
  });
  controller.hears(['क्या दूसरे राज्य का छात्र आपके महाविद्यालय में आवेदन कर सकता है','दुसरे राज्य'],'message_received', function(bot, message) {
	bot.reply(message,'किसी भी राज्य का छात्र हमारे महाविद्यालय में आवेदन कर सकता है.');  
  });
  controller.hears(['क्या आपके महाविद्यालय में आरक्षण के लिए सुविधाएं हैं','आरक्षण'],'message_received', function(bot, message) {
	bot.reply(message,'आरक्षण प्रणाली की सुविधा उपलब्ध है');  
  });
 controller.hears(['पोस्ट ग्रेजुएशन के बाद सालाना पैकेज कितना मिलता है','सालाना पैकेज'],'message_received', function(bot, message) {
	bot.reply(message,'पोस्ट-ग्रेजुएट पैकेज आपके ज्ञान के आधार पर मिलता हैं। और इसमें कम से कम 100,000 वार्षिक पैकेज तो होता हैं.');  
  });
   controller.hears(['क्या आपके महाविद्यालय में प्रयोगशालाएं हैं','लैब','प्रयोगशाला'],'message_received', function(bot, message) {
	bot.reply(message,'पाठ्यक्रम से संबंधित सभी प्रकार की प्रयोगशालाएं यहां उपलब्ध हैं.');  
  });
 controller.hears(['आपके महाविद्यालय की मान्यता क्या है','मान्यता'],'message_received', function(bot, message) {
	bot.reply(message,'गुजरात विद्यापीठ की स्थापना 18 अक्टूबर, 1920 को महात्मा गांधी द्वारा की गई थी। यूजीसी अधिनियम, 1956 की धारा 3 के तहत इसे 1963 से भारत सरकार से मान्यता प्राप्त हैं।');  
  });
   controller.hears(['आपके महाविद्यालय में कितने प्रतिशत प्लेसमेंट हैं','प्लेसमेंट'],'message_received', function(bot, message) {
	bot.reply(message,'80% से 90% तक प्लेसमेंट हर साल मिलता हैं');  
  });
  controller.hears('गूजरात विद्यापीठ','message_received', function(bot, message) {
    bot.reply(message,'[यहाँ पर क्लिक करे.](http://www.gujaratvidyapith.org/)');
  });
}
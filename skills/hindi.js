module.exports = function(controller) {
controller.hears('नमस्कार ','message_received', function(bot, message) {
	bot.reply(message,{
        text:'नमस्कार',
        quick_replies: [
            {
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट '
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                  title: 'विभाग',
                payload: 'विभाग'
            },
		]
      },function() {}); 
  });
  controller.hears(['आपके महाविद्यालय का क्या नाम हैं ','महाविद्यालय का नाम '],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'महादेव देसाई समाजसेवा संकुल महाविद्यालय गूजरात विद्यापीठ अहमदाबाद',
        quick_replies: [
            {
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट '
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                  title: 'लोकेशन',
                payload: 'लोकेशन'
            },
		]
      },function() {});
	 });
  controller.hears(['प्रवेश फॉर्म की क्या दिनांक हैं ','फॉर्म दिनांक'],'message_received', function(bot, message) {
 	bot.reply(message,{
        text:'15 May',
        quick_replies: [
            {
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट '
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                  title: 'प्रवेश परीक्षा',
                payload: 'प्रवेश परीक्षा'
            },
		]
      },function() {});
  });
   controller.hears(['प्रवेश की क्या प्रक्रिया हैं','प्रवेश प्रक्रिया','प्रवेश','प्रवेस'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'सबसे पहले ऑनलाइन फॉर्म भरना हैं और उसके बाद प्रवेश की पुष्ठी करने व फीस जमा करवाने के लिये महाविद्यालय में आइये |\n\n[फॉर्म भरने के लिये यहाँ क्लिक करे],(http://www.gujaratvidyapith.org/admm/index.htm)',
        quick_replies: [
            {
                title: 'पाठ्यक्रम',
                payload: 'पाठ्यक्रम'
            },
			{
                title: 'विभाग',
                payload: 'विभाग'
            },
			{
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट'
            },
		]
      },function() {}); 
	});
   controller.hears(['महाविद्यालय द्वारा छात्रालय में क्या क्या सुविधा मिलती हैं ','छात्रालय सुविधा'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'- यहाँ आपको अच्छे किस्म की खटिया,पढ़ने की मेज,लाइट ,पंखा मिलता हैं |\n\n- सामान्य कमरा, कंप्यूटर व  मनोरंजन तथा पढ़ने के लिए कमरे,विश्राम और अतिथि कक्ष भी।\n\n-24X7 पानी और बिजली की आपूर्ति \n\n- किचन / स्टोर के साथ डाइनिंग हॉल\n\n- सोलर वाटर हीटर\n\n-स्टीम कुकिंग सिस्टम जो खाना पकाने के समय को बचाता है और मेस के बिल को कम करता है.\n\n- गर्ल्स हॉस्टल के लिये पर्याप्त सुरक्षा व्यवस्था',
        quick_replies: [
            {
                title: 'कन्या छात्रालय फीस',
                payload: 'कन्या छात्रालय फीस'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'बॉय हॉस्टल फीस',
                payload: 'बॉय हॉस्टल फीस'
            },
		]
      },function() {});  
 });
  controller.hears(['अध्ययन में कितनी भाषा का उपयोग होता हैं','अध्ययन में उपयोग में आने वाली भाषा '],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'गुजराती,हिंदी,अंग्रेजी',
        quick_replies: [
            {
                title: 'ऋण',
                payload: 'ऋण'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'प्रवास',
                payload: 'प्रवास'
            },
		]
      },function() {});
  });
    controller.hears(['प्रवेश परीक्षा की तारीख क्या है','प्रवेश परीक्षा की तारीख'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'20 june',
        quick_replies: [
            {
                title: 'प्रवेश परीक्षा',
                payload: 'प्रवेश परीक्षा'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
  controller.hears(['आपके महाविद्यालयमें प्रवेश के लिए कोई भी प्रवेश परीक्षा ली जाती है','प्रवेश परीक्षा'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'लेटरल प्रवेश में प्रवेश के लिये परीक्षा ली जाती हैं |',
        quick_replies: [
            {
                title: 'पाठयक्रम',
                payload: 'पाठयक्रम'
            },
			{
                title: 'प्रवेश परीक्षा की तारीख',
                payload: 'प्रवेश परीक्षा की तारीख'
            },
			{
                title: 'प्रवेश परीक्षा की योग्यता',
                payload: 'प्रवेश परीक्षा की योग्यता'
            },
		]
      },function() {});
  });
  controller.hears(['प्रवेश परीक्षा की योग्यता क्या है','प्रवेश परीक्षा की योग्यता'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'60%',
        quick_replies: [
            {
                title: 'पाठयक्रम',
                payload: 'पाठयक्रम'
            },
			{
                title: 'प्रवेश परीक्षा की तारीख',
                payload: 'प्रवेश परीक्षा की तारीख'
            },
			{
                title: 'क्लास समय',
                payload: 'क्लास समय'
            },
		]
      },function() {});
  });
  controller.hears(['आपके छात्रावास में भोजन की गुणवत्ता क्या है','भोजन'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'यहाँ हम छात्रावास में सर्वोत्तम गुणवत्ता का भोजन प्रदान करते हैं',
        quick_replies: [
            {
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'छात्रालय सुविधा',
                payload: 'छात्रालय सुविधा'
            },
			{
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट'
            },
		]
      },function() {});
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
  bot.reply(message,{
        text:'हमारे महाविद्यालय सभी राजकीय छात्रवृत्ति प्रदान करते हैं',
        quick_replies: [
            {
                title: 'लोकेशन',
                payload: 'लोकेशन'
            },
			{
                title: 'प्रवेश हेतु आवश्यक प्रतिशत',
                payload: 'प्रतिशत'
            },
			{
                title: 'क्लास में कुल शीट की संख्या',
                payload: 'शीट'
            },
		]
      },function() {});
  });  
  controller.hears(['क्लास का समय क्या है','क्लास समय '],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'8.00AM to 6.00PM',
        quick_replies: [
            {
                title: 'प्रवेश परीक्षा',
                payload: 'प्रवेश परीक्षा'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
   controller.hears(['आपके महाविद्यालय की रैंकिंग क्या है','रैंकिंग'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'यह UGC द्वारा अनुमोदित A + प्रमाणित महाविद्यालय है और यह एक डीम्ड महाविद्यालय है। इसकी रैंकिंग 5 में से 4.5 है',
        quick_replies: [
            {
                title: 'वाई-फाई',
                payload: 'वाई-फाई'
            },
			{
                title: 'पुस्तकालय',
                payload: 'पुस्तकालय'
            },
			{
                title: 'अध्यापक',
                payload: 'अध्यापक'
            },
		]
      },function() {});
  });
  controller.hears(['क्या महाविद्यालय कोई ऋण सुविधा प्रदान करता है','ऋण'],'message_received', function(bot, message) { 
  bot.reply(message,{
        text:'हाँ हमारे महाविद्यालय गरीब छात्रों के लिए ऋण सुविधा प्रदान करते हैं और उन छात्रों के लिए भी ऋण प्रदान करते हैं जो स्वयं का स्टार्टअप व्यवसाय शुरू करना चाहते हैं',
        quick_replies: [
            {
                title: 'प्रवास',
                payload: 'प्रवास'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'जरुरी परीक्षा',
                payload: 'जरुरी परीक्षा'
            },
		]
      },function() {});
  });
  controller.hears(['महाविद्यालय में प्रवेश के लिए कितने प्रतिशत की आवश्यकता है','प्रतिशत'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'सभी विषयों में 50% से अधिक अंक अनिवार्य हैं',
        quick_replies: [
            {
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'क्लास में कुल शीट की संख्या',
                payload: 'शीट'
            },
			{
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट'
            },
		]
      },function() {});
  });
  controller.hears(['आपके महाविद्यालय में एक कक्षा में कितनी शीट हैं','शीट'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'सभी कक्षा में 45 से 60 शीट उपलब्ध हैं',
        quick_replies: [
            {
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पोशाक',
                payload: 'पोशाक'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
  controller.hears(['क्या आपके परिसर के अंदर वाई-फाई की सुविधा उपलब्ध है','वाई-फाई'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'हाँ आप हमारे परिसर में 24 घंटे वाई-फाई का उपयोग कर सकते हैं',
        quick_replies: [
            {
                title: 'लोकेशन',
                payload: 'लोकेशन'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'कौशल विकास',
                payload: 'कौशल विकास'
            },
		]
      },function() {});
	});
  controller.hears(['अपने महाविद्यालय के अध्यापक की जानकारी बताएं','अध्यापक'],'message_received', function(bot, message) {
bot.reply(message,{
        text:'[अध्यापक की जानकारी के लिय यहाँ क्लिक करे],(http://www.gujaratvidyapith.org/faculty.htm)',
        quick_replies: [
            {
                title: 'विभाग',
                payload: 'विभाग'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {}); 
 }); 
  controller.hears(['क्या आपके पास अपने महाविद्यालय में औद्योगिक प्रशिक्षण की सुविधा है','औद्योगिक प्रशिक्षण'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'हाँ, हम छात्रों के विकास के लिए सभी प्रकार के औद्योगिक प्रशिक्षण और कार्यशाला की सुविधा प्रदान करते हैं',
        quick_replies: [
            {
                title: 'सालाना पैकेज',
                payload: 'सालाना पैकेज'
            },
			{
                title: 'कौशल विकास',
                payload: 'कौशल विकास'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  }); 
    controller.hears(['आपके महाविद्यालय में कितने विभाग हैं','विभाग'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'1.गुजराती  2.हिंदी 3.ग्रामीण अर्थशास्त्र  4.इतिहास और संस्कृति 5.अभिलेखीय विज्ञान 6.सामाजिक मानविकी 7.सामाजिक पुनर्निर्माण 8.जैनिसम 9.सामाजिक कार्य 10.पत्रकारिता और जनसंचार 11.कंप्यूटर विज्ञान विभाग 12.पुस्तकालय विज्ञान और सूचना विज्ञान 13.गांधीवादी दर्शन 14.शांति अनुसंधान 15.बुद्धिज़्म',
        quick_replies: [
            {
                title: 'संपर्क',
                payload: 'संपर्क'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
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
	bot.reply(message,{
        text:'क्षेत्रकार्य में होने वाला खर्च विधार्थी खुद करता हैं',
        quick_replies: [
            {
                title: 'एम.एस,डब्लू.',
                payload: 'एम.एस,डब्लू.'
            },
			{
                title: 'क्षेत्रकार्य',
                payload: 'क्षेत्रकार्य'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  }); 
 controller.hears(['यहाँ  एम.एस.डब्लू. पाठ्यक्रम में  क्षेत्रकार्य होता है','क्षेत्रकार्य'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'हाँ  एम.एस.डब्लू. कोर्स में हम क्षेत्रकार्य प्रदान करते हैं',
        quick_replies: [
            {
                title: 'एम.एस,डब्लू.',
                payload: 'एम.एस,डब्लू.'
            },
			{
                title: 'क्षेत्रकार्य में होने वाला खर्च',
                payload: 'क्षेत्रकार्य में खर्च'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
  controller.hears('पाठ्यक्रम','message_received', function(bot, message) {
  bot.reply(message,{
        text:'[पाठ्यक्रम के लिये यहाँ क्लिक करे](http://www.gujaratvidyapith.org/syllabus.htm)',
        quick_replies: [
            {
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पोशाक',
                payload: 'पोशाक'
            },
		]
      },function() {});
  });
  controller.hears(['आपके महाविद्यालय के नियम क्या हैं','नियम'],'message_received', function(bot, message) {
bot.reply(message,{
        text:'1.इस परिसर में केवल खादी पोशाक की अनुमति है.\n\n2.किसी भी पाठ्यक्रम में 80% उपस्थिति अनिवार्य है.\n\n3.आप नियमित रूप से प्रार्थना में आएंगे और रेटिया चलाएंगे.',
        quick_replies: [
            {
                title: 'संपर्क',
                payload: 'संपर्क'
            },
			{
                title: 'लोकेशन',
                payload: 'लोकेशन'
            },
			{
                title: 'जरुरी परीक्षा',
                payload: 'जरुरी परीक्षा'
            },
		]
      },function() {}); 
 });
  controller.hears(['महाविद्यालय के कौन कौन से परीक्षा देना होता हैं','जरुरी परीक्षा'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'1.समूह जीवन  \n\n2.रेटीया (चरखा)\n\n 3.उपासना \n\n4.छात्रालय परीक्षा',
        quick_replies: [
            {
                title: 'प्रवेश परीक्षा',
                payload: 'प्रवेश परीक्षा'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  }); 
  controller.hears(['क्या आपके महाविद्यालय में पुस्तकालय है','पुस्तकालय'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'हाँ, हमारे परिसर में एक बहुत बड़ी लाइब्रेरी है। इसमें 7 लाख किताबें और पत्रिकाएँ हैं',
        quick_replies: [
            {
                title: 'एन.एस.एस.',
                payload: 'एन.एस.एस.'
            },
			{
                title: 'वाई-फाई',
                payload: 'वाई-फाई'
            },
			{
                title: 'लोकेशन',
                payload: 'लोकेशन'
            },
		]
      },function() {});
  });
  controller.hears(['आपका महाविद्यालय किस स्थान पर है','स्थान','लोकेशन'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'आयकर कार्यालय के पास, आश्रम रोड, अहमदाबाद, गुजरात  380014\n\n[मेप के लियेयहाँ क्लिक करे ](https://www.google.com/maps/place/Gujarat+Vidyapith/@23.0446798,72.5664692,)',
        quick_replies: [
            {
                title: 'संपर्क',
                payload: 'संपर्क'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
   controller.hears(['क्या आपके महाविद्यालय में कौशल विकास के कोर्स  हैं','कौशल विकास'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'हाँ हमारे महाविद्यालय संगीत, भाषा सीखने, उधोग, तैराकी,हस्तकला  की शिक्षा  प्रदान करता हैं',
        quick_replies: [
            {
                title: 'एन.एस.एस.',
                payload: 'एन.एस.एस.'
            },
			{
                title: 'प्रवास',
                payload: 'प्रवास'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
  controller.hears(['क्या आपके पास अपने महाविद्यालय में एन.एस.एस. और एन.सी.सी. की व्यवस्था है','एन.सी.सी.','एन.एस.एस.'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'हाँ हमारे महाविद्यालय में एन.एस.एस. सुविधा है।',
        quick_replies: [
            {
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
  controller.hears(['क्या आपके महाविद्यालय में भ्रमण की सुविधा है','भ्रमण','प्रवास'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'हाँ हमारे महाविद्यालय हर साल में भ्रमण और पदयात्रा का आयोजन करते हैं।',
        quick_replies: [
            {
                title: 'रिपोर्ट',
                payload: 'रिपोर्ट'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'ऋण सुविधा',
                payload: 'ऋण'
            },
		]
      },function() {});
  });
 controller.hears(['मैं किसी भी विभाग से कैसे संपर्क कर सकता हूं','संपर्क'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'संपर्क: 079-27541148, 079-27540746, 079-40016200\n\nemail: info@gujaratvidyapith.org',
        quick_replies: [
            {
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'अतिरिक्त कोर्स',
                payload: 'अतिरिक्त कोर्स'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
 controller.hears(['क्या आपके महाविद्यालय में अतिरिक्त क्रेडिट कोर्स हैं','अतिरिक्त कोर्स','क्रेडिट कोर्स'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'हाँ, एआईसीटीई के दिशानिर्देश के अनुसार छात्र अपने कोर्स के साथ एक अतिरिक्त विषय चुन सकता है.',
        quick_replies: [
            {
                title: 'रिपोर्ट',
                payload: 'रिपोर्ट'
            },
			{
                title: 'दुसरे राज्य का विधार्थी',
                payload: 'दुसरे राज्य'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
 controller.hears(['आपके महाविद्यालय के विकास की रिपोर्ट क्या है','रिपोर्ट'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'[रिपोर्ट के लिये यहाँ क्लिक करे],(http://gujaratvidyapith.org/newsandevents/Gujarat%20Vidyapith%20Report-MHRD.pdf)',
        quick_replies: [
            {
                title: 'अध्यापक',
                payload: 'अध्यापक'
            },
			{
                title: 'आरक्षण',
                payload: 'आरक्षण'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
  controller.hears(['क्या दूसरे राज्य का छात्र आपके महाविद्यालय में आवेदन कर सकता है','दुसरे राज्य'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'किसी भी राज्य का छात्र हमारे महाविद्यालय में आवेदन कर सकता है.',
        quick_replies: [
            {
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
  controller.hears(['क्या आपके महाविद्यालय में आरक्षण के लिए सुविधाएं हैं','आरक्षण'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'आरक्षण प्रणाली की सुविधा उपलब्ध है',
        quick_replies: [
            {
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट'
            },
			{
                title: 'विभाग',
                payload: 'विभाग'
            },
			{
                title: 'सालाना पैकेज',
                payload: 'सालाना पैकेज'
            },
		]
      },function() {});
  });
 controller.hears(['पोस्ट ग्रेजुएशन के बाद सालाना पैकेज कितना मिलता है','सालाना पैकेज'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'पोस्ट-ग्रेजुएट के बाद पैकेज आपके ज्ञान के आधार पर मिलता हैं। और इसमें न्यूनतम 100,000 वार्षिक पैकेज होता हैं.',
        quick_replies: [
            {
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
			{
                title: 'प्रयोगशाला',
                payload: 'प्रयोगशाला'
            },
			{
                title: 'मान्यता',
                payload: 'मान्यता'
            },
		]
      },function() {});
  });
   controller.hears(['क्या आपके महाविद्यालय में प्रयोगशालाएं हैं','लैब','प्रयोगशाला'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'पाठ्यक्रम से संबंधित सभी प्रकार की प्रयोगशालाएं यहां उपलब्ध हैं.',
        quick_replies: [
            {
                title: 'प्लेसमेंट',
                payload: 'प्लेसमेंट'
            },
			{
                title: 'मान्यता',
                payload: 'मान्यता'
            },
			{
                title: 'गूजरात विद्यापीठ',
                payload: 'गूजरात विद्यापीठ'
            },
		]
      },function() {});
  });
 controller.hears(['आपके महाविद्यालय की मान्यता क्या है','मान्यता'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'गुजरात विद्यापीठ की स्थापना 18 अक्टूबर, 1920 को महात्मा गांधी द्वारा की गई थी। यूजीसी अधिनियम, 1956 की धारा 3 के तहत इसे 1963 से भारत सरकार से मान्यता प्राप्त हैं।',
        quick_replies: [
            {
                title: 'प्रवेश परीक्षा',
                payload: 'प्रवेश परीक्षा'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
   controller.hears(['आपके महाविद्यालय में कितने प्रतिशत प्लेसमेंट हैं','प्लेसमेंट'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'80% से 90% तक प्लेसमेंट हर साल मिलता हैं',
        quick_replies: [
            {
                title: 'प्रवेश परीक्षा',
                payload: 'प्रवेश परीक्षा'
            },
			{
                title: 'नियम',
                payload: 'नियम'
            },
			{
                title: 'पाठयक्रम',
                payload: 'पाठ्यक्रम'
            },
		]
      },function() {});
  });
  controller.hears('गूजरात विद्यापीठ','message_received', function(bot, message) {
	bot.reply(message,{
        text:'[यहाँ पर क्लिक करे.](http://www.gujaratvidyapith.org/)',
        quick_replies: [
            {
                title: 'कोर्स लिस्ट',
                payload: 'कोर्स लिस्ट'
            },
			{
                title: 'विभाग',
                payload: 'विभाग'
            },
			{
                title: 'प्रवेश',
                payload: 'प्रवेश'
            },
		]
      },function() {}); 
 });
}
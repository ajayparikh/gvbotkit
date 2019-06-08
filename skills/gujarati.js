module.exports = function(controller) {
controller.hears('નમસ્કાર ','message_received', function(bot, message) {
    bot.reply(message,'નમસ્કાર');
  });
  controller.hears(['તમારા મહાવિદ્યાલય નો સુ નામ છે. ','મહાવિદ્યાલય નો નામ '],'message_received', function(bot, message) {
    bot.reply(message,'મહાદેવ દેસાઇ સમાજસેવા સંકૂલ ગૂજરાત વિદ્યાપીઠ અહમદાબાદ');
  });
  controller.hears(['પ્રવેશ ફોર્મ ની સુ તારીખ છે ','ફોર્મ ની તારીખ'],'message_received', function(bot, message) {
    bot.reply(message,'15 May');
  });
 controller.hears(['પ્રવેશની પ્રક્રિયા શું છે ','પ્રવેશ પ્રક્રિયા','પ્રવેશ','પ્રવેસ'],'message_received', function(bot, message) {
    bot.reply(message,'સૌ પ્રથમ, ઑનલાઇન ફોર્મ ભરવાનો અને તે પછી પ્રવેશ મેળવવા અને ફી જમા કરવા માટે મહાવિદ્યાલય માં આવવાનું.|');
    bot.reply(message,'[ફોર્મ ભરવા માટે આહિયા ક્લિક કરો](http://www.gujaratvidyapith.org/admm/index.htm)');
  });
    controller.hears(['છાત્રાલયમાં કઈ કઈ સુવિધા મેલે છે ','છાત્રાલય સુવિધા'],'message_received', function(bot, message) {
    bot.reply(message,'- અહીં તમને સારો પ્રકારની પથારી,વાંચવા માટે નું ટેબલ, લાઇટ, પંખો મળે છે ');
    bot.reply(message,'- જનરલ રૂમ, કમ્પ્યુટર , મનોરંજન અને વાંચન માટે રૂમ,ગેસ્ટ રૂમ ની વ્યવસ્થા');
    bot.reply(message,'-24X7 પાણી અને પાવર સપ્લાય ');
    bot.reply(message,'- રસોડું  અને ડાઇનિંગ હોલ');
    bot.reply(message,'- સૌર વોટર હીટર');
    bot.reply(message,'-વરાળ રસોઈ વ્યવસ્થા જે રસોઈ સમય બચાવે છે અને મેસ બિલ ઘટાડે છે.');
    bot.reply(message,'- અમદાવાદ કેમ્પસમાં રસોઈ માટે પી.એન.જી. લાઇન.');
    bot.reply(message,'- પૂરતી સ્વચ્છતા સુવિધાઓ');
	bot.reply(message,'- કન્યાઓ છાત્રાલય માટે પૂરતી સુરક્ષા વ્યવસ્થા');
  });
  controller.hears(['અભ્યાસમાં કેટલી ભાષાઓ વપરાય છે','અભ્યાસમાં વપરાતી ભાષા '],'message_received', function(bot, message) {
    bot.reply(message,'ગુજરાતી, હિન્દી, અંગ્રેજી');
  });
    controller.hears(['પ્રવેશ પરીક્ષા માટે ની તારીખ શું છે','પ્રવેશ પરીક્ષા તારીખ'],'message_received', function(bot, message) {
    bot.reply(message,'20 june');
  });
  controller.hears(['પ્રવેશ માટે તમારી મહાવિદ્યાલય માં પ્રવેશ પરીક્ષા લેવામાં આવે છે','પ્રવેશ પરીક્ષા'],'message_received', function(bot, message) {
    bot.reply(message,'લેટરલ માં પ્રવેશ માટે પરીક્ષા લેવામાં આવે છે.');
  });
  controller.hears(['પ્રવેશ પરીક્ષા માં પાસ થવા ની યોગ્યતા શું છે','પ્રવેશ પરીક્ષા માં પાસ થવાની ની યોગ્યતા'],'message_received', function(bot, message) {
	bot.reply(message,'60%');
  });
  controller.hears(['તમારા હોસ્ટેલમાં ખોરાકની ગુણવત્તા શું છે','ખોરાક','ભોજન','જમવાનું'],'message_received', function(bot, message) {
	bot.reply(message,'અહીં છાત્રાલયમાં અમે શ્રેષ્ઠ ભોજન પૂરું પાડીએ છીએ');
  });
  controller.hears(['મહાવિદ્યાલય અને છાત્રાલયમાં કયા પ્રકારની પોશાક છે ','પોશાક'],'message_received', function(bot, message) {
   
	  bot.reply(message,{
  text: 'મહાવિદ્યાલય અને છાત્રાલયમાં માત્ર ખાદીના કપડાં જ માન્ય છે અને આ અમારા મહાવિદ્યાલયનો પોશાક છે',
  files: [
      {
        url: 'https://i.ytimg.com/vi/EN6__NkRJgo/0.jpg',
        image: true
      }
	] 
  });
  });
 controller.hears(['મહાવિદ્યાલય કોઈ શિષ્યવૃતિની સુવિધા આપે છે','શિષ્યવૃતિ'],'message_received', function(bot, message) {
   
	bot.reply(message,'અમારી મહાવિદ્યાલય માં રાજ્ય સરકાર થી જાહેર તમામ શિષ્યવૃત્તિ આપવામાં આવે છે');
  });  
  controller.hears(['વર્ગ સમય શું છે','વર્ગ સમય '],'message_received', function(bot, message) {
	bot.reply(message,'8.00AM to 6.00PM');
  });
   controller.hears(['તમારી મહાવિદ્યાલય રેન્કિંગ શું છે','રેન્કિંગ'],'message_received', function(bot, message) {
	bot.reply(message,'આ યુ.જી.સી. માન્ય  A+ સર્ટિફાઇડ મહાવિદ્યાલય અને તે ડીમ્ડ મહાવિદ્યાલય છે. તેની રેન્કિંગ 5 માંથી 4.5 છે');
  });
  controller.hears(['શું મહાવિદ્યાલય કોઈ લોન સુવિધા પૂરી પાડે છે','લોન'],'message_received', function(bot, message) { 
	bot.reply(message,'હા અમારી મહાવિદ્યાલય ગરીબ વિદ્યાર્થીઓને લોન આપે છે અને તે પોતાનો સ્ટાર્ટઅપ વ્યવસાય શરૂ કરવા માંગતા વિદ્યાર્થીઓને લોન પણ પૂરી પાડે છે');
  });
  controller.hears(['મહાવિદ્યાલયમાં એડમિશન માટે કેટલી ટકાવારીની આવશ્યકતા હોય છે','ટકાવારી'],'message_received', function(bot, message) {
	bot.reply(message,'તમામ વિષયોમાં 50% થી વધુ ગુણ ફરજિયાત છે');
  });
  controller.hears(['તમારા મહાવિદ્યાલયમાં વર્ગમાં કેટલી શીટ્સ છે','શીટ'],'message_received', function(bot, message) {
	bot.reply(message,'45 થી 60 શીટ્સ બધા વર્ગખંડમાં ઉપલબ્ધ છે');
  });
  controller.hears(['તમારા મહાવિદ્યાલય માં  Wi-Fi ની સુવિધા ઉપલબ્ધ છે','Wi-Fi','વાઇ-ફાઈ'],'message_received', function(bot, message) {
	bot.reply(message,'હા તમે અમારા મહાવિદ્યાલયમાં 24-કલાક Wi-Fi નો ઉપયોગ કરી શકો છો');
  });
  controller.hears(['તમારી મહાવિદ્યાલય શિક્ષકની માહિતી આપો','શિક્ષક'],'message_received', function(bot, message) {
	bot.reply(message,'[શિક્ષક ની માહિતી માટે આહિયા ક્લિક કરો],(http://www.gujaratvidyapith.org/faculty.htm)');
  }); 
  controller.hears(['શું તમારી મહાવિદ્યાલયમાં ઔદ્યોગિક તાલીમની સુવિધા છે','ઔદ્યોગિક તાલીમ'],'message_received', function(bot, message) {
	bot.reply(message,'હા, અમે વિદ્યાર્થીના વિકાસ માટે તમામ પ્રકારના ઔદ્યોગિક તાલીમ અને વર્કશોપ પ્રદાન કરીએ છીએ');
  }); 
    controller.hears(['તમારા મહાવિદ્યાલયમાં કેટલા વિભાગો છે','વિભાગ'],'message_received', function(bot, message) {
	bot.reply(message,'1.ગુજરાતી   2.હિન્દી 3.ગ્રામીણ અર્થશાસ્ત્ર  4.ઇતિહાસ અને સંસ્કૃતિ 5.અભિલેખીય વિજ્ઞાન 6.સામાજિક માનવિકી 7.સામાજિક પુનર્નિર્માણ 8.જેનીસમ  9.સામાજિક કાર્ય 10.પત્રકારત્વ અને જનસંચાર 11.કમ્પ્યુટર વિજ્ઞાન વિભાગ  12.લાઇબ્રેરી વિજ્ઞાન અને માહિતીપ્રદ 13.ગાંધીજી ફિલસોફી 14.શાંતિ સંશોધન 15.બુદ્ધિઝમ');
  });   
  controller.hears(['તમારા મહાવિદ્યાલયમાં કેટલા કોર્સ છે',],'message_received', function(bot, message) {
    bot.reply(message,{
        text:'કોર્સ ની યાદી',
        quick_replies: [
            {
                title: 'કોર્સ લિસ્ટ',
                payload: 'કોર્સ લિસ્ટ'
            },
		]
      },function() {});
  });
  controller.hears(['શું મહાવિદ્યાલય દ્વારા ક્ષેત્રકાર્ય પર ખર્ચ આપવામાં આવે છે','ક્ષેત્રકાર્યમાં ખર્ચ'],'message_received', function(bot, message) {
	bot.reply(message,'વિદ્યાર્થી પોતાની જાતે ક્ષેત્રકાર્ય પ્રવૃત્તિઓમાં ખર્ચ કરે છે');
  }); 
 controller.hears(['અહીં એમ.એસ.ડબલ્યુ. કોર્સમાં ક્ષેત્રકાર્ય કરવામાં આવે છે','ક્ષેત્રકાર્ય'],'message_received', function(bot, message) {
	bot.reply(message,'હા એમ.એસ.ડબલ્યુ. માં અમે ક્ષેત્રકાર્ય પ્રદાન કરીએ છીએ');
  });
  controller.hears(['અભ્યાસક્રમ','સિલેબસ'],'message_received', function(bot, message) {
	 bot.reply(message,'[અભ્યાસક્રમ માટે આહિયા ક્લિક કરો](http://www.gujaratvidyapith.org/syllabus.htm)');
  });
  controller.hears(['તમારા મહાવિદ્યાલય નિયમો શું છે','નિયમ'],'message_received', function(bot, message) {
	 bot.reply(message,'1.આ જગ્યામાં ફક્ત ખાદીની પોશાક છૂટ છે.\n\n2.કોઈપણ કોર્સમાં 80% હાજરી ફરજિયાત છે.\n\n3.તમને નિયમિતપણે પ્રાર્થનામાં આવવાનો અને રેટિયો કાતવાનો રહેસે .');
  });
  controller.hears(['મહાવિદ્યાલય ની ફરજિયાત પરીક્ષાઓ કઈ  છે?','ફરજિયાત પરીક્ષા'],'message_received', function(bot, message) {
	 bot.reply(message,'1.સમૂહ જીવન \n\n2.રેટિયો \n\n3. ઉપાસના\n\n4. છાત્રાલય પરીક્ષા');
  }); 
  controller.hears(['શું તમારા મહાવિદ્યાલયમાં લાઇબ્રેરી છે','લાઇબ્રેરી'],'message_received', function(bot, message) {
	 bot.reply(message,'હા, અમારા મહાવિદ્યાલય વિશાળ પુસ્તકાલય છે. તેની પાસે 7 લાખ પુસ્તકો અને સામયિકો છે');
  });
  controller.hears(['તમારો મહાવિદ્યાલય ક્યાં છે','સ્થળ','લોકેશન'],'message_received', function(bot, message) {
	bot.reply(message,'આયકર વિભાગ ની નજીક, આશ્રમ રોડ, અમદાવાદ, ગુજરાત 380014');  
	bot.reply(message,'[મેપ માટે આહિયા ક્લિક કરો ](https://www.google.com/maps/place/Gujarat+Vidyapith/@23.0446798,72.5664692,)');
  });
   controller.hears(['શું તમારી પાસે તમારા મહાવિદ્યાલયમાં કૌશલ્ય વિકાસના અભ્યાસક્રમો છે','કૌશલ્ય વિકાસ'],'message_received', function(bot, message) {
	bot.reply(message,'હા, અમારો મહાવિદ્યાલય સંગીત, ભાષા શીખવાની, ઉદ્યોગ, સ્વિમિંગ, હસ્તકલા ની શિક્ષા આપે છ');  
  });
  controller.hears(['શું તમારી મહાવિદ્યાલય એનએસએસ  અને એન.સી.સી. ની ગોઠવણ છે','એન.સી.સી.','એન.એસ.એસ.'],'message_received', function(bot, message) {
	bot.reply(message,'હા, અમારા મહાવિદ્યાલય એન.એસ. ની ગોઠવણ છે.');  
  });
  controller.hears(['શું તમારી પાસે તમારા મહાવિદ્યાલયમાં ટૂર ની સુવિધા છે','ટુર'],'message_received', function(bot, message) {
	bot.reply(message,'હા, અમારા મહાવિદ્યાલય દર વર્ષે પ્રવાસ અને પદયાત્રા ગોઠવે છે.');  
  });
 controller.hears(['હું કોઈ વિભાગનો સંપર્ક કેવી રીતે કરી શકું છું','સંપર્ક'],'message_received', function(bot, message) {
	bot.reply(message,'સંપર્ક: 079-27541148, 079-27540746, 079-40016200');  
	bot.reply(message,'email: info@gujaratvidyapith.org');  
  });
 controller.hears(['શું તમારી પાસે તમારા કૉલેજમાં  ક્રેડિટ કોર્સ થાય છે','ક્રેડિટ કોર્સ'],'message_received', function(bot, message) {
	bot.reply(message,'હા, એઆઈસીટીઈ માર્ગદર્શિકા મુજબ, વિદ્યાર્થીઓ તેમના અભ્યાસક્રમ સાથે એક અતિરિક્ત વિષયની પસંદગી કરી શકે છે.');  
  });
 controller.hears(['તમારી કૉલેજ ડેવલપમેન્ટ રિપોર્ટ શું છે','રિપોર્ટ'],'message_received', function(bot, message) {
	bot.reply(message,'[રિપોર્ટ માટે આહિયા ક્લિક કરો],(http://gujaratvidyapith.org/newsandevents/Gujarat%20Vidyapith%20Report-MHRD.pdf)');  
  });
  controller.hears(['શું બીજા રાજ્યનો વિદ્યાર્થી તમારા કૉલેજમાં પ્રવેશ મેળવી સકે છે ','બીજા રાજ્ય'],'message_received', function(bot, message) {
	bot.reply(message,'કોઈપણ રાજ્યનો વિદ્યાર્થી અમારા કૉલેજમાં પ્રવેશ માટે અરજી કરી શકે છે.');  
  });
  controller.hears(['તમારા કૉલેજમાં આરક્ષણ ની સુવિધાઓ છે','આરક્ષણ'],'message_received', function(bot, message) {
	bot.reply(message,'આહિયા આરક્ષણ ની વ્યવસ્થા ઉપલબ્ધ છે');  
  });
 controller.hears(['પોસ્ટ ગ્રેજ્યુએશન પછી વાર્ષિક પેકેજ કેટલું છે','વાર્ષિક પેકેજ'],'message_received', function(bot, message) {
	bot.reply(message,'અનુસ્નાતક પેકેજો તમારા જ્ઞાનના આધારે મળે છે. અને તેમાં ઓછામાં ઓછા 100,000 નો વાર્ષિક પેકેજ મળે છે.');  
  });
   controller.hears(['શું તમારી પાસે તમારા કૉલેજમાં લૅબ છે','લેબ','પ્રયોગશાળા'],'message_received', function(bot, message) {
	bot.reply(message,'કોર્સ સાથે સંબંધિત તમામ પ્રકારના પ્રયોગશાળાઓ અહીં ઉપલબ્ધ છે.');  
  });
 controller.hears(['તમારા કોલેજની માન્યતા શું છે','માન્યતા'],'message_received', function(bot, message) {
	bot.reply(message,'ગુજરાત વિદ્યાપીઠની સ્થાપના મહાત્મા ગાંધી દ્વારા 18 ઓક્ટોબર, 1920 ના રોજ કરવામાં આવી હતી. યુજીસી એક્ટ, 1956 ની કલમ 3 હેઠળ, તે 1963 થી ભારત સરકાર પાસેથી માન્ય કરવામાં આવી છે.');  
  });
   controller.hears(['તમારા કૉલેજમાં પ્લેસમેંટ ની કેટલી ટકાવારી છે','પ્લેસમેંટ'],'message_received', function(bot, message) {
	bot.reply(message,'દર વર્ષે 80% થી 90% પ્લેસમેન્ટ્સ મહાવિદ્યાલયમાં થી મળે છે');  
  });
  controller.hears('ગૂજરાત વિદ્યાપીઠ','message_received', function(bot, message) {
    bot.reply(message,'[આહિયા ક્લિક કરો](http://www.gujaratvidyapith.org/)');
  });
}
module.exports = function(controller) {
controller.hears('નમસ્કાર ','message_received', function(bot, message) {
	bot.reply(message,{
        text:'નમસ્કાર ',
        quick_replies: [
            {
                title: 'કોર્સ ની યાદી',
                payload: 'કોર્સ ની યાદી'
            },
			{
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'છાત્રાલય સુવિધા',
                payload: 'છાત્રાલય સુવિધા'
            },
		]
      },function() {});
  });
  controller.hears(['તમારા મહાવિદ્યાલય નો સુ નામ છે. ','મહાવિદ્યાલય નો નામ '],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'મહાદેવ દેસાઇ સમાજસેવા સંકૂલ ગૂજરાત વિદ્યાપીઠ અહમદાબાદ',
        quick_replies: [
            {
                title: 'કોર્સ ની યાદી',
                payload: 'કોર્સ ની યાદી'
            },
			{
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'વિભાગ',
                payload: 'વિભાગ'
            },
		]
      },function() {});
	});
  controller.hears(['પ્રવેશ ફોર્મ ની સુ તારીખ છે ','ફોર્મ ની તારીખ'],'message_received', function(bot, message) {
  	bot.reply(message,{
        text:'15 May',
        quick_replies: [
            {
                title: 'નિયમ',
                payload: 'નિયમ'
            },
			{
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'છાત્રાલય સુવિધા',
                payload: 'છાત્રાલય સુવિધા'
            },
		]
      },function() {});
  });
 controller.hears(['પ્રવેશની પ્રક્રિયા શું છે ','પ્રવેશ પ્રક્રિયા','પ્રવેશ','પ્રવેસ'],'message_received', function(bot, message) {
  	bot.reply(message,{
        text:'સૌ પ્રથમ, ઑનલાઇન ફોર્મ ભરવાનો અને તે પછી પ્રવેશ મેળવવા અને ફી જમા કરવા માટે મહાવિદ્યાલય માં આવવાનું.\n\n[ફોર્મ ભરવા માટે આહિયા ક્લિક કરો](http://www.gujaratvidyapith.org/admm/index.htm) ',
        quick_replies: [
            {
                title: 'કોર્સ ની યાદી',
                payload: 'કોર્સ ની યાદી'
            },
			{
                title: 'વિભાગ',
                payload: 'વિભાગ'
            },
			{
                title: 'છાત્રાલય સુવિધા',
                payload: 'છાત્રાલય સુવિધા'
            },
		]
      },function() {});
  });
    controller.hears(['છાત્રાલયમાં કઈ કઈ સુવિધા મેલે છે ','છાત્રાલય સુવિધા'],'message_received', function(bot, message) {
 	bot.reply(message,{
        text:'- અહીં તમને સારો પ્રકારની પથારી,વાંચવા માટે નું ટેબલ, લાઇટ, પંખો મળે છે \n\n- જનરલ રૂમ, કમ્પ્યુટર , મનોરંજન અને વાંચન માટે રૂમ,ગેસ્ટ રૂમ ની વ્યવસ્થા\n\n-24X7 પાણી અને પાવર સપ્લાય \n\n- રસોડું  અને ડાઇનિંગ હોલ\n\n- સૌર વોટર હીટર\n\n-વરાળ રસોઈ વ્યવસ્થા જે રસોઈ સમય બચાવે છે અને મેસ બિલ ઘટાડે છે.\n\n- અમદાવાદ કેમ્પસમાં રસોઈ માટે પી.એન.જી. લાઇન.\n\n- પૂરતી સ્વચ્છતા સુવિધાઓ\n\n- કન્યાઓ છાત્રાલય માટે પૂરતી સુરક્ષા વ્યવસ્થા ',
        quick_replies: [
            {
                title: 'કન્યા છાત્રાલય ફીસ',
                payload: 'કન્યા છાત્રાલય ફીસ'
            },
			{
                title: 'નિયમ',
                payload: 'નિયમ'
            },
			{
                title: 'બોય હોસ્ટેલ ફીસ',
                payload: 'બોય હોસ્ટેલ ફીસ'
            },
		]
      },function() {}); 
  });
  controller.hears(['અભ્યાસમાં કેટલી ભાષાઓ વપરાય છે','અભ્યાસમાં વપરાતી ભાષા '],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'ગુજરાતી, હિન્દી, અંગ્રેજી',
        quick_replies: [
            {
                title: 'નિયમ',
                payload: 'નિયમ'
            },
			{
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'છાત્રાલય સુવિધા',
                payload: 'છાત્રાલય સુવિધા'
            },
		]
      },function() {});
  });
    controller.hears(['પ્રવેશ પરીક્ષા માટે ની તારીખ શું છે','પ્રવેશ પરીક્ષા તારીખ'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'20 june',
        quick_replies: [
            {
                title: 'નિયમ',
                payload: 'નિયમ'
            },
			{
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'પાઠયક્રમ',
                payload: 'પાઠયક્રમ'
            },
		]
      },function() {});
	});
  controller.hears(['પ્રવેશ માટે તમારી મહાવિદ્યાલય માં પ્રવેશ પરીક્ષા લેવામાં આવે છે','પ્રવેશ પરીક્ષા'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'લેટરલ માં પ્રવેશ માટે પરીક્ષા લેવામાં આવે છે.',
        quick_replies: [
            {
                title: 'પ્રવેશ પરીક્ષા માં પાસ થવાની ની યોગ્યતા',
                payload: 'પ્રવેશ પરીક્ષા માં પાસ થવાની ની યોગ્યતા'
            },
			{
                title: 'પ્રવેશ પરીક્ષા તારીખ',
                payload: 'પ્રવેશ પરીક્ષા તારીખ'
            },
			{
                title: 'પાઠયક્રમ',
                payload: 'પાઠયક્રમ'
            },
		]
      },function() {});
  });
  controller.hears(['પ્રવેશ પરીક્ષા માં પાસ થવા ની યોગ્યતા શું છે','પ્રવેશ પરીક્ષા માં પાસ થવાની ની યોગ્યતા'],'message_received', function(bot, message) {
	  bot.reply(message,{
        text:'60%',
        quick_replies: [
            {
                title: 'નિયમ',
                payload: 'નિયમ'
            },
			{
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'પાઠયક્રમ',
                payload: 'પાઠયક્રમ'
            },
		]
      },function() {});
  });
  controller.hears(['તમારા હોસ્ટેલમાં ખોરાકની ગુણવત્તા શું છે','ખોરાક','ભોજન','જમવાનું'],'message_received', function(bot, message) {
	 bot.reply(message,{
        text:'અહીં છાત્રાલયમાં અમે શ્રેષ્ઠ ભોજન પૂરું પાડીએ છીએ',
        quick_replies: [
            {
                title: 'છાત્રાલય સુવિધા',
                payload: 'છાત્રાલય સુવિધા'
            },
			{
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'શિષ્યવૃતિ',
                payload: 'શિષ્યવૃતિ'
            },
		]
      },function() {});
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
	bot.reply(message,{
        text:'અમારી મહાવિદ્યાલય માં રાજ્ય સરકાર થી જાહેર તમામ શિષ્યવૃત્તિ આપવામાં આવે છે',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'રેન્કિંગ',
                payload: 'રેન્કિંગ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });  
  controller.hears(['વર્ગ સમય શું છે','વર્ગ સમય '],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'8.00AM to 6.00PM',
        quick_replies: [
            {
                title: 'કોર્સ ની યાદી',
                payload: 'કોર્સ ની યાદી'
            },
			{
                title: 'ટકાવારી',
                payload: 'ટકાવારી'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
   controller.hears(['તમારી મહાવિદ્યાલય રેન્કિંગ શું છે','રેન્કિંગ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'આ યુ.જી.સી. માન્ય  A+ સર્ટિફાઇડ મહાવિદ્યાલય અને તે ડીમ્ડ મહાવિદ્યાલય છે. તેની રેન્કિંગ 5 માંથી 4.5 છે',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'પ્રવેશ લેવા માટે જરૂરી ટકાવારી ',
                payload: 'ટકાવારી'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
  controller.hears(['શું મહાવિદ્યાલય કોઈ લોન સુવિધા પૂરી પાડે છે','લોન'],'message_received', function(bot, message) { 
   bot.reply(message,{
        text:'હા અમારી મહાવિદ્યાલય ગરીબ વિદ્યાર્થીઓને લોન આપે છે અને તે પોતાનો સ્ટાર્ટઅપ વ્યવસાય શરૂ કરવા માંગતા વિદ્યાર્થીઓને લોન પણ પૂરી પાડે છે',
        quick_replies: [
            {
                title: 'વાઇ-ફાઈ',
                payload: 'વાઇ-ફાઈ'
            },
			{
                title: 'શિક્ષક',
                payload: 'શિક્ષક'
            },
			{
                title: 'શિષ્યવૃતિ',
                payload: 'શિષ્યવૃતિ'
            },
		]
      },function() {});
  });
  controller.hears(['મહાવિદ્યાલયમાં એડમિશન માટે કેટલી ટકાવારીની આવશ્યકતા હોય છે','ટકાવારી'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'તમામ વિષયોમાં 50% થી વધુ ગુણ ફરજિયાત છે',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'રેન્કિંગ',
                payload: 'રેન્કિંગ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
  controller.hears(['તમારા મહાવિદ્યાલયમાં વર્ગમાં કેટલી શીટ્સ છે','શીટ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'45 થી 60 શીટ્સ બધા વર્ગખંડમાં ઉપલબ્ધ છે',
        quick_replies: [
            {
                title: 'સિલેબસ',
                payload: 'સિલેબસ'
            },
			{
                title: 'ઔદ્યોગિક તાલીમ',
                payload: 'ઔદ્યોગિક તાલીમ'
            },
			{
                title: 'માન્યતા',
                payload: 'માન્યતા'
            },
		]
      },function() {});
  });
  controller.hears(['તમારા મહાવિદ્યાલય માં  Wi-Fi(વાઇ-ફાઈ) ની સુવિધા ઉપલબ્ધ છે','વાઇ-ફાઈ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'હા તમે અમારા મહાવિદ્યાલયમાં 24-કલાક Wi-Fi નો ઉપયોગ કરી શકો છો',
        quick_replies: [
            {
                title: 'લોકેશન',
                payload: 'લોકેશન'
            },
			{
                title: 'વિભાગ',
                payload: 'વિભાગ'
            },
			{
                title: 'ક્ષેત્રકાર્ય',
                payload: 'ક્ષેત્રકાર્ય'
            },
		]
      },function() {});
  });
  controller.hears(['તમારી મહાવિદ્યાલય શિક્ષકની માહિતી આપો','શિક્ષક'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'[શિક્ષક ની માહિતી માટે આહિયા ક્લિક કરો],(http://www.gujaratvidyapith.org/faculty.htm)',
        quick_replies: [
            {
                title: 'ઔદ્યોગિક તાલીમ',
                payload: 'ઔદ્યોગિક તાલીમ'
            },
			{
                title: 'પ્લેસમેંટ',
                payload: 'પ્લેસમેંટ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  }); 
  controller.hears(['શું તમારી મહાવિદ્યાલયમાં ઔદ્યોગિક તાલીમની સુવિધા છે','ઔદ્યોગિક તાલીમ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'હા, અમે વિદ્યાર્થીના વિકાસ માટે તમામ પ્રકારના ઔદ્યોગિક તાલીમ અને વર્કશોપ પ્રદાન કરીએ છીએ',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'લાઇબ્રેરી',
                payload: 'લાઇબ્રેરી'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  }); 
    controller.hears(['તમારા મહાવિદ્યાલયમાં કેટલા વિભાગો છે','વિભાગ'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'1.ગુજરાતી   2.હિન્દી 3.ગ્રામીણ અર્થશાસ્ત્ર  4.ઇતિહાસ અને સંસ્કૃતિ 5.અભિલેખીય વિજ્ઞાન 6.સામાજિક માનવિકી 7.સામાજિક પુનર્નિર્માણ 8.જેનીસમ  9.સામાજિક કાર્ય 10.પત્રકારત્વ અને જનસંચાર 11.કમ્પ્યુટર વિજ્ઞાન વિભાગ  12.લાઇબ્રેરી વિજ્ઞાન અને માહિતીપ્રદ 13.ગાંધીજી ફિલસોફી 14.શાંતિ સંશોધન 15.બુદ્ધિઝમ',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'કોર્સ ની યાદી',
                payload: 'કોર્સ ની યાદી'
            },
			{
                title: 'લાઇબ્રેરી',
                payload: 'લાઇબ્રેરી'
            },
		]
      },function() {}); 
 });   
  controller.hears(['તમારા મહાવિદ્યાલયમાં કેટલા કોર્સ છે','કોર્સ'],'message_received', function(bot, message) {
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
   bot.reply(message,{
        text:'વિદ્યાર્થી પોતાની જાતે ક્ષેત્રકાર્ય પ્રવૃત્તિઓમાં ખર્ચ કરે છે',
        quick_replies: [
            {
                title: 'ક્ષેત્રકાર્ય',
                payload: 'ક્ષેત્રકાર્ય'
            },
			{
                title: 'એમ.એસ.ડબલું.',
                payload: 'એમ.એસ.ડબલું.'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  }); 
 controller.hears(['અહીં એમ.એસ.ડબલ્યુ. કોર્સમાં ક્ષેત્રકાર્ય કરવામાં આવે છે','ક્ષેત્રકાર્ય'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'હા એમ.એસ.ડબલ્યુ. માં અમે ક્ષેત્રકાર્ય પ્રદાન કરીએ છીએ',
        quick_replies: [
            {
                title: 'ક્ષેત્રકાર્યમાં ખર્ચ',
                payload: 'ક્ષેત્રકાર્યમાં ખર્ચ'
            },
			{
                title: 'સિલેબસ',
                payload: 'સિલેબસ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
  controller.hears(['અભ્યાસક્રમ','સિલેબસ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'[અભ્યાસક્રમ માટે આહિયા ક્લિક કરો](http://www.gujaratvidyapith.org/syllabus.htm)',
        quick_replies: [
            {
                title: 'કોર્સ ની યાદી',
                payload: 'કોર્સ ની યાદી'
            },
			{
                title: 'વિભાગ',
                payload: 'વિભાગ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
  controller.hears(['તમારા મહાવિદ્યાલય નિયમો શું છે','નિયમ'],'message_received', function(bot, message) {
 bot.reply(message,{
        text:'1.આ જગ્યામાં ફક્ત ખાદીની પોશાક છૂટ છે.\n\n2.કોઈપણ કોર્સમાં 80% હાજરી ફરજિયાત છે.\n\n3.તમને નિયમિતપણે પ્રાર્થનામાં આવવાનો અને રેટિયો કાતવાનો રહેસે .',
        quick_replies: [
            {
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'ફરજિયાત પરીક્ષા',
                payload: 'ફરજિયાત પરીક્ષા'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {}); 
 });
  controller.hears(['મહાવિદ્યાલય ની ફરજિયાત પરીક્ષાઓ કઈ  છે?','ફરજિયાત પરીક્ષા'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'1.સમૂહ જીવન \n\n2.રેટિયો \n\n3. ઉપાસના\n\n4. છાત્રાલય પરીક્ષા',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'નિયમ',
                payload: 'નિયમ'
            },
			{
                title: 'ક્રેડિટ કોર્સ',
                payload: 'ક્રેડિટ કોર્સ'
            },
		]
      },function() {});
  }); 
  controller.hears(['શું તમારા મહાવિદ્યાલયમાં લાઇબ્રેરી છે','લાઇબ્રેરી'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'હા, અમારા મહાવિદ્યાલય વિશાળ પુસ્તકાલય છે. તેની પાસે 7 લાખ પુસ્તકો અને સામયિકો છે',
        quick_replies: [
            {
                title: 'વાઇ-ફાઈ',
                payload: 'વાઇ-ફાઈ'
            },
			{
                title: 'લોકેશન',
                payload: 'લોકેશન'
            },
			{
                title: 'છાત્રાલય સુવિધા',
                payload: 'છાત્રાલય સુવિધા'
            },
		]
      },function() {});
  });
  controller.hears(['તમારો મહાવિદ્યાલય ક્યાં છે','સ્થળ','લોકેશન'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'આયકર વિભાગ ની નજીક, આશ્રમ રોડ, અમદાવાદ, ગુજરાત 380014\n\n[મેપ માટે આહિયા ક્લિક કરો ](https://www.google.com/maps/place/Gujarat+Vidyapith/@23.0446798,72.5664692,)',
        quick_replies: [
            {
                title: 'લાઇબ્રેરી',
                payload: 'લાઇબ્રેરી'
            },
			{
                title: 'કૌશલ્ય વિકાસ',
                payload: 'કૌશલ્ય વિકાસ'
            },
			{
                title: 'પ્રયોગશાળા',
                payload: 'પ્રયોગશાળા'
            },
		]
      },function() {});
  });
   controller.hears(['શું તમારી પાસે તમારા મહાવિદ્યાલયમાં કૌશલ્ય વિકાસના અભ્યાસક્રમો છે','કૌશલ્ય વિકાસ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'હા, અમારો મહાવિદ્યાલય સંગીત, ભાષા શીખવાની, ઉદ્યોગ, સ્વિમિંગ, હસ્તકલા ની શિક્ષા આપે છ',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'આરક્ષણ',
                payload: 'આરક્ષણ'
            },
			{
                title: 'એન.એસ.એસ.',
                payload: 'એન.એસ.એસ.'
            },
		]
      },function() {});
  });
  controller.hears(['શું તમારી મહાવિદ્યાલય એનએસએસ  અને એન.સી.સી. ની ગોઠવણ છે','એન.સી.સી.','એન.એસ.એસ.'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'હા, અમારા મહાવિદ્યાલય એન.એસ. ની ગોઠવણ છે.',
        quick_replies: [
            {
                title: 'ટુર',
                payload: 'ટુર'
            },
			{
                title: 'સંપર્ક',
                payload: 'સંપર્ક'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
  controller.hears(['શું તમારી પાસે તમારા મહાવિદ્યાલયમાં ટૂર ની સુવિધા છે','ટુર'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'હા, અમારા મહાવિદ્યાલય દર વર્ષે પ્રવાસ અને પદયાત્રા ગોઠવે છે.',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'રેન્કિંગ',
                payload: 'રેન્કિંગ'
            },
			{
                title: 'ક્રેડિટ કોર્સ',
                payload: 'ક્રેડિટ કોર્સ'
            },
		]
      },function() {});
  });
 controller.hears(['હું કોઈ વિભાગનો સંપર્ક કેવી રીતે કરી શકું છું','સંપર્ક'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'સંપર્ક: 079-27541148, 079-27540746, 079-40016200\n\nemail: info@gujaratvidyapith.org',
        quick_replies: [
            {
                title: 'ગૂજરાત વિદ્યાપીઠ',
                payload: 'ગૂજરાત વિદ્યાપીઠ'
            },
			{
                title: 'આરક્ષણ',
                payload: 'આરક્ષણ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
 controller.hears(['શું તમારી પાસે તમારા કૉલેજમાં  ક્રેડિટ કોર્સ થાય છે','ક્રેડિટ કોર્સ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'હા, એઆઈસીટીઈ માર્ગદર્શિકા મુજબ, વિદ્યાર્થીઓ તેમના અભ્યાસક્રમ સાથે એક અતિરિક્ત વિષયની પસંદગી કરી શકે છે.',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'રેન્કિંગ',
                payload: 'રેન્કિંગ'
            },
			{
                title: 'માન્યતા',
                payload: 'માન્યતા'
            },
		]
      },function() {});
  });
 controller.hears(['તમારી કૉલેજ ડેવલપમેન્ટ રિપોર્ટ શું છે','રિપોર્ટ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'[રિપોર્ટ માટે આહિયા ક્લિક કરો],(http://gujaratvidyapith.org/newsandevents/Gujarat%20Vidyapith%20Report-MHRD.pdf)',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'રેન્કિંગ',
                payload: 'રેન્કિંગ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
  controller.hears(['શું બીજા રાજ્યનો વિદ્યાર્થી તમારા કૉલેજમાં પ્રવેશ મેળવી સકે છે ','બીજા રાજ્ય'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'કોઈપણ રાજ્યનો વિદ્યાર્થી અમારા કૉલેજમાં પ્રવેશ માટે અરજી કરી શકે છે.',
        quick_replies: [
            {
                title: 'લોન',
                payload: 'લોન'
            },
			{
                title: 'આરક્ષણ',
                payload: 'આરક્ષણ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
  controller.hears(['તમારા કૉલેજમાં આરક્ષણ ની સુવિધાઓ છે','આરક્ષણ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'આહિયા આરક્ષણ ની વ્યવસ્થા ઉપલબ્ધ છે',
        quick_replies: [
            {
                title: 'લાઇબ્રેરી ',
                payload: 'લાઇબ્રેરી'
            },
			{
                title: 'રેન્કિંગ',
                payload: 'રેન્કિંગ'
            },
			{
                title: 'માન્યતા',
                payload: 'માન્યતા'
            },
		]
      },function() {});
  });
 controller.hears(['પોસ્ટ ગ્રેજ્યુએશન પછી વાર્ષિક પેકેજ કેટલું છે','વાર્ષિક પેકેજ'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'અનુસ્નાતક પેકેજો તમારા જ્ઞાનના આધારે મળે છે. અને તેમાં ઓછામાં ઓછા 100,000 નો વાર્ષિક પેકેજ મળે છે.',
        quick_replies: [
            {
                title: 'પ્લેસમેંટ',
                payload: 'પ્લેસમેંટ'
            },
			{
                title: 'રેન્કિંગ',
                payload: 'રેન્કિંગ'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
   controller.hears(['શું તમારી પાસે તમારા કૉલેજમાં લૅબ છે','લેબ','પ્રયોગશાળા'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'કોર્સ સાથે સંબંધિત તમામ પ્રકારના પ્રયોગશાળાઓ અહીં ઉપલબ્ધ છે.',
        quick_replies: [
            {
                title: 'વાઇ-ફાઈ',
                payload: 'વાઇ-ફાઈ'
            },
			{
                title: 'છાત્રાલય સુવિધા',
                payload: 'છાત્રાલય સુવિધા'
            },
			{
                title: 'માન્યતા',
                payload: 'માન્યતા'
            },
		]
      },function() {});
  });
 controller.hears(['તમારા કોલેજની માન્યતા શું છે','માન્યતા'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'ગુજરાત વિદ્યાપીઠની સ્થાપના મહાત્મા ગાંધી દ્વારા 18 ઓક્ટોબર, 1920 ના રોજ કરવામાં આવી હતી. યુજીસી એક્ટ, 1956 ની કલમ 3 હેઠળ, તે 1963 થી ભારત સરકાર પાસેથી માન્ય કરવામાં આવી છે.',
        quick_replies: [
            {
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'લાઇબ્રેરી',
                payload: 'લાઇબ્રેરી'
            },
			{
                title: 'પોશાક',
                payload: 'પોશાક'
            },
		]
      },function() {});
  });
   controller.hears(['તમારા કૉલેજમાં પ્લેસમેંટ ની કેટલી ટકાવારી છે','પ્લેસમેંટ'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'દર વર્ષે 80% થી 90% પ્લેસમેન્ટ્સ મહાવિદ્યાલયમાં થી મળે છે',
        quick_replies: [
            {
                title: 'વાર્ષિક પેકેજ',
                payload: 'વાર્ષિક પેકેજ'
            },
			{
                title: 'વિભાગ',
                payload: 'વિભાગ'
            },
			{
                title: 'ઔદ્યોગિક તાલીમ',
                payload: 'ઔદ્યોગિક તાલીમ'
            },
		]
      },function() {});
  });
  controller.hears('ગૂજરાત વિદ્યાપીઠ','message_received', function(bot, message) {
  bot.reply(message,{
        text:'[આહિયા ક્લિક કરો](http://www.gujaratvidyapith.org/)',
        quick_replies: [
            {
                title: 'પ્રવેશ',
                payload: 'પ્રવેશ'
            },
			{
                title: 'કોર્સ ની યાદી',
                payload: 'કોર્સ ની યાદી'
            },
			{
                title: 'છાત્રાલય સુવિધા',
                payload: 'છાત્રાલય સુવિધા'
            },
		]
      },function() {});
  });
}
module.exports = function(controller) {
 controller.hears(['કોર્સ ની યાદી ','તમારે ત્યાં ક્યાં ક્યાં કોર્સ ચાલે છે  ','કોર્સ ના નામ','કોર્સ લિસ્ટ ','કોર્સ નામ'],'message_received', function(bot, message) {

    bot.reply(message,{
        text: 'કોર્સ ની યાદી :',
        quick_replies: [
            {
                title: 'સર્ટિફિકેટ',
                payload: 'સર્ટિફિકેટ'
            },
            {
                title: 'ડિપ્લોમા',
                payload: 'ડિપ્લોમા'
            },
			{
                title: 'સ્નાતક',
                payload: 'સ્નાતક'
            },
			{
                title: 'અનુસ્નાતક',
                payload: 'અનુસ્નાતક'
            },
			{
                title: 'એમ.ફિલ. અને પી.એચડી. ',
                payload: 'એમ.ફિલ. અને પી.એચડી.'
            },
        ]
      },function() {});

  });
  controller.hears('સર્ટિફિકેટ','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'સર્ટિફિકેટ કોર્સ ની યાદી ',
        quick_replies: [
            {
                title: 'લાઇટ મ્યુજિક',
                payload: 'લાઇટ મ્યુજિક'
            },
            {
                title: 'છંદ શાસ્ત્ર',
                payload: 'છંદ શાસ્ત્ર '
            },
			{
                title: 'આર્ટ અને ક્રાફ્ટ ',
                payload: 'આર્ટ અને ક્રાફ્ટ'
            },
			{
                title: 'કમ્પ્યુટર હાર્ડવેર અને નેટવર્ક ટેક્નોલોજી',
                payload: 'કમ્પ્યુટર હાર્ડવેર અને નેટવર્ક ટેક્નોલોજી'
            },
        ]
      },function() {});

  });
  controller.hears('ડિપ્લોમા','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'ડિપ્લોમા કોર્સ ની યાદી',
        quick_replies: [
            {
                title: 'પી.જી.ડી. ઇન યોગીક આર્ટ અને સાઇન્સ',
                payload: 'પી.જી.ડી. ઇન યોગીક આર્ટ અને સાઇન્સ '
            },
            {
                title: 'પી.જી.ડી. ઇન ઓડિઓ વિઝ્યુલ પ્રોડક્શન',
                payload: 'પી.જી.ડી. ઇન ઓડિઓ વિઝ્યુલ પ્રોડક્શન'
            },
			{
                title: 'પી.જી.ડી. ઇન કમ્પ્યુટર એપ્લિકેશન',
                payload: 'પી.જી.ડી. ઇન કમ્પ્યુટર એપ્લિકેશન '
            },
			{
                title: 'પી.જી.ડી. ઇન કમ્પ્યુટર હાર્ડવેર અને નેટવર્ક ટેક્નોલોજી ',
                payload: 'પી.જી.ડી. ઇન કમ્પ્યુટર હાર્ડવેર અને નેટવર્ક ટેક્નોલોજી'
            },
			{
                title: 'પી.જી.ડી. ઇન પ્રયોજનમૂલક હિન્દી',
                payload: 'પી.જી.ડી. ઇન પ્રયોજનમૂલક હિન્દી'
            },
			{
                title: 'પી.જી.ડી. ઇન ટ્રાન્સલેસન હિન્દી',
                payload: 'પી.જી.ડી. ઇન ટ્રાન્સલેસન હિન્દી'
            },	
        ]
      },function() {});

  });
  controller.hears('અનુસ્નાતક','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'અનુસ્નાતક કોર્સ ની યાદી',
        quick_replies: [
            {
                title: 'એમ.એડ.',
                payload: 'એમ.એડ.'
            },
            {
                title: 'માસ્ટર ઓફ ફિજિકલ એડ્યુકેશન અને સ્પોર્ટ્સ',
                payload: 'માસ્ટર ઓફ ફિજિકલ એડ્યુકેશન અને સ્પોર્ટ્સ'
            },
			{
                title: 'માસ્ટર ઓફ ફિજિકલ એડ્યુકેશન',
                payload: 'માસ્ટર ઓફ ફિજિકલ એડ્યુકેશન'
            },
			{
                title: 'એમ.એ.',
                payload: 'એમ.એ.'
            },
			{
                title: 'એમ.સી.એ.',
                payload: 'એમ.સી.એ.'
            },
			{
                title: 'એમ. લિબ.',
                payload: 'એમ. લિબ.'
            },
			{
                title: 'એમ.એસ.ડબલ્યુ.',
                payload: 'એમ.એસ.ડબલ્યુ'
            },
			{		
                title: 'એમ.એસ.સી. ઇન એનવીરોમેંટલ સાઇન્સ અને ટેક્નોલોજી ',
                payload: 'એમ.એસ.સી. ઇન એનવીરોમેંટલ સાઇન્સ અને ટેક્નોલોજી'
            },
			{		
                title: 'એમ.એસ.સી. ઇન માઇક્રોબાયોલોજી',
                payload: 'એમ.એસ.સી. ઇન માઇક્રોબાયોલોજી '
            },						
			{		
                title: 'એમ.બી.એ. ઇન રૂરલ મેનેજમેંટ',
                payload: 'એમ.બી.એ. ઇન રૂરલ મેનેજમેંટ'
            },		
        ]
      },function() {});

  });
  controller.hears('સ્નાતક','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'સ્નાતક કોર્સ ની યાદી',
        quick_replies: [
            {
                title: 'બી.એડ.',
                payload: 'બી.એડ.'
            },
            {
                title: 'બી.એ.',
                payload: 'બી.એ.'
            },
			{
                title: 'બી.એસસી.',
                payload: 'બી.એસસી.'
            },
			{
                title: 'બી.વોક.(ફૂડ પ્રોસેસ ટેક્નોલોજી)',
                payload: 'બી.વોક.(ફૂડ પ્રોસેસ ટેક્નોલોજી)'
            },
			{
                title: 'બી.વોક.(ફૈસન ડીસાઇન અને અપેરલ સાઇન્સ)',
                payload: 'બી.વોક.(ફૈસન ડીસાઇન અને અપેરલ સાઇન્સ)'
            },
			{
                title: 'બેચલર ઓફ રૂરલ સ્ટડીસ ',
                payload: 'બેચલર ઓફ રૂરલ સ્ટડીસ'
            },
			{
                title: 'બેચલર ઇન ફિજિકલ એડ્યુકેશન અને સ્પોર્ટ્સ',
                payload: 'બેચલર ઇન ફિજિકલ એડ્યુકેશન અને સ્પોર્ટ્સ'
            },
			{
                title: 'બેચલર ઇન ફિજિકલ એડ્યુકેશન',
                payload: 'બેચલર ઇન ફિજિકલ એડ્યુકેશન'
            },
			{
                title: 'બી.લિબ.આઇ.એસસી.',
                payload: 'બી.લિબ.આઇ.એસસી.'
            },	
			
        ]
      },function() {});

  });
	controller.hears(['એમ.એ. ફીસ','એમ એ ફીસ'],'message_received', function(bot, message) {
    bot.reply(message,'એમ.એ. કોર્સ ની ફીસ 4455rs છે. ');
  });
  	controller.hears(['એમ.એસ.ડબલ્યુ. ફીસ','એમએસડબલ્યુ  ફીસ'],'message_received', function(bot, message) {
    bot.reply(message,'એમ.એસ.ડબલ્યુ. કોર્સ ની ફીસ 4455rs છે.');
  });
   controller.hears(['બી.લિબ. ફીસ','બી.લિબ ફીસ'],'message_received', function(bot, message) {
   bot.reply(message,'બી.લિબ. કોર્સ ની ફીસ 4455rs છે.');
  });
  controller.hears(['એમ.લિબ. ફીસ','એમ.લિબ ફીસ'],'message_received', function(bot, message) {
   bot.reply(message,'એમ.લિબ. કૌર્સે ની ફીસ 4455rs છે.');
  });
  controller.hears(['એમ.સી.એ. ફીસ','એમસીએ ફીસ'],'message_received', function(bot, message) {
    bot.reply(message,'એમ.સી.એ. કોર્સ ની ફીસ 9905rs છે.');
  });
  controller.hears(['પી.જી.ડી.સી.એચ.એન. ફીસ','પીજીડીસીએચએન ફીસ'],'message_received', function(bot, message) {
     bot.reply(message,'પી.જી.ડી.સી.એચ.એન. કોર્સ ની ફીસ 8105rs છે.');
  });
    controller.hears(['પી.જી.ડી.સી.એ. ફીસ','પીજીડીસીએ ફીસ'],'message_received', function(bot, message) {
     bot.reply(message,'પી.જી.ડી.સી.એ. કોર્સ ની ફીસ 9905rs છે.');
  });
  controller.hears(['એમ.એ.યોગા ફીસ','એમ.એ. યોગા કોર્સ  ફીસ'],'message_received', function(bot, message) {
      bot.reply(message,'એમ.એ. યોગા કોર્સ ની ફીસ 13125rs છે');
  });
   controller.hears(['યોગા સર્ટિફિકેટ ફીસ','યોગા સર્ટિફિકેટ કોર્સ ફીસ'],'message_received', function(bot, message) {
    bot.reply(message,'યોગા સર્ટિફિકેટ કોર્સ ની ફીસ 6000rs છે.');
  });
 controller.hears(['ડિપ્લોમા ઇન યોગા ફીસ','ડિપ્લોમા ઇન યોગા કોર્સ ફીસ'],'message_received', function(bot, message) {
     bot.reply(message,'ડિપ્લોમા ઇન યોગા કોર્સ ફીસ 12725rs છે');
  });
 controller.hears(['ઓડિઓ વિઝ્યુલ ફીસ','ઓડિઓ વિઝ્યુલ કોર્સ ફીસ'],'message_received', function(bot, message) {
  bot.reply(message,'ઓડિઓ વિઝ્યુલ કોર્સ ની ફીસ 16605rs છે');
  });
  controller.hears(['કન્યા છાત્રાલય ફીસ'],'message_received', function(bot, message) {
     bot.reply(message,'કન્યા છાત્રાલય ની 6 મહિના ની  ફીસ 7750rs છે');
  });
  controller.hears(['હોસ્ટેલ ફીસ','બોય હોસ્ટેલ ફીસ'],'message_received', function(bot, message) {
	bot.reply(message,'બોય હોસ્ટેલ ની 6 મહિના ની ફીસ 10000rs છે');
  });
	controller.hears('લાઇટ મ્યુજિક','message_received', function(bot, message) {
    bot.reply(message,'લાઇટ મ્યુજિક કોર્સ 6 મહિના નો હોય છે \n\n 12th થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
	controller.hears('છંદ શાસ્ત્ર','message_received', function(bot, message) {
    bot.reply(message,'છંદ શાસ્ત્ર કોર્સ 6 મહિના નો હોય છે \n\n 12th થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('આર્ટ અને ક્રાફ્ટ ','message_received', function(bot, message) {
    bot.reply(message,'આર્ટ અને ક્રાફ્ટ કોર્સ 1 વર્ષ નો હોય છે \n\n 12th થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('કમ્પ્યુટર હાર્ડવેર અને નેટવર્ક ટેક્નોલોજી','message_received', function(bot, message) {
  	bot.reply(message,'કમ્પ્યુટર હાર્ડવેર અને નેટવર્ક ટેક્નોલોજી 6 મહિના નો હોય છે \n\n 12th થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('પી.જી.ડી. ઇન યોગીક આર્ટ અને સાઇન્સ','message_received', function(bot, message) {
  	bot.reply(message,'પી.જી.ડી. ઇન યોગીક આર્ટ અને સાઇન્સ 1 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('પી.જી.ડી. ઇન ઓડિઓ વિઝ્યુલ પ્રોડક્શન','message_received', function(bot, message) {
 	bot.reply(message,'પી.જી.ડી. ઇન ઓડિઓ વિઝ્યુલ પ્રોડક્શન 1 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
   controller.hears('પી.જી.ડી. ઇન કમ્પ્યુટર એપ્લિકેશન','message_received', function(bot, message) {
 	bot.reply(message,'પી.જી.ડી. ઇન કમ્પ્યુટર એપ્લિકેશન 1 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('પી.જી.ડી. ઇન કમ્પ્યુટર હાર્ડવેર અને નેટવર્ક ટેક્નોલોજી','message_received', function(bot, message) {
 	bot.reply(message,'પી.જી.ડી. ઇન કમ્પ્યુટર હાર્ડવેર અને નેટવર્ક ટેક્નોલોજી 1 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('પી.જી.ડી. ઇન પ્રયોજનમૂલક હિન્દી','message_received', function(bot, message) {
 	bot.reply(message,'પી.જી.ડી. ઇન પ્રયોજનમૂલક હિન્દી 1 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('પી.જી.ડી. ઇન ટ્રાન્સલેસન હિન્દી','message_received', function(bot, message) {
 	bot.reply(message,'પી.જી.ડી. ઇન ટ્રાન્સલેસન હિન્દી 1 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('બી.એડ.','message_received', function(bot, message) {
 	bot.reply(message,'બી.એડ. 2 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો.\n\nઅહિયાં તમે   Maths, Science, English, Sanskrit, Gujarati, Social Science, Primary Education and Hindi આ બધા વિષય મે બ.એડ. કરી સકો છો.');
  });
  controller.hears('બી.એ.','message_received', function(bot, message) {
 	bot.reply(message,'બી.એ. 3 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો.\n\nઅહિયાં તમે  English ,Gujarati ,Hindi ,History ,Economics ,Sociology આ બધા વિષય બી.એ. કરી સકે છો.');
  });
  controller.hears('બી.એસસી.','message_received', function(bot, message) {
 	bot.reply(message,'બી.એસસી. 3 વર્ષ નો હોય છે \n\n12th સાઇન્સ માં  A/AB ગ્રુપ માં  થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('બી.વોક.(ફૂડ પ્રોસેસ ટેક્નોલોજી)','message_received', function(bot, message) {
 	bot.reply(message,'બી.વોક.(ફૂડ પ્રોસેસ ટેક્નોલોજી)  3 વર્ષ નો હોય છે \n\n12th સાઇન્સ માં  A/AB ગ્રુપ માં  થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('બી.વોક.(ફૈસન ડીસાઇન અને અપેરલ સાઇન્સ)','message_received', function(bot, message) {
	bot.reply(message,'બી.વોક.(ફૈસન ડીસાઇન અને અપેરલ સાઇન્સ)  3 વર્ષ નો હોય છે \n\n 12th થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('બેચલર ઓફ રૂરલ સ્ટડીસ','message_received', function(bot, message) {
 	bot.reply(message,'બેચલર ઓફ રૂરલ સ્ટડીસ 3 વર્ષ નો હોય છે \n\n 12th થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('બેચલર ઇન ફિજિકલ એડ્યુકેશન અને સ્પોર્ટ્સ','message_received', function(bot, message) {
 	bot.reply(message,'બેચલર ઇન ફિજિકલ એડ્યુકેશન અને સ્પોર્ટ્સ 3 વર્ષ નો હોય છે \n\n 12th થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });    
  controller.hears('બેચલર ઇન ફિજિકલ એડ્યુકેશન','message_received', function(bot, message) {
   bot.reply(message,'બેચલર ઇન ફિજિકલ એડ્યુકેશન 1 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('બી.લિબ.આઇ.એસસી.','message_received', function(bot, message) {
	bot.reply(message,'બી.લિબ.આઇ.એસસી. 1 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('એમ.એડ.','message_received', function(bot, message) {
	bot.reply(message,'એમ.એડ. 2 વર્ષ નો હોય છે \n\n બી.એડ. થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('માસ્ટર ઓફ ફિજિકલ એડ્યુકેશન અને સ્પોર્ટ્સ','message_received', function(bot, message) {
     	bot.reply(message,'માસ્ટર ઓફ ફિજિકલ એડ્યુકેશન અને સ્પોર્ટ્સ 2 વર્ષ નો હોય છે \n\n બી.પી.એસ.સી. થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('માસ્ટર ઓફ ફિજિકલ એડ્યુકેશન','message_received', function(bot, message) {
       bot.reply(message,'માસ્ટર ઓફ ફિજિકલ એડ્યુકેશન  2 વર્ષ નો હોય છે \n\n બી.પી.એડ. થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
    controller.hears('એમ.એ.','message_received', function(bot, message) {
        bot.reply(message,'એમ.એ. 2 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો \n\nઅહિયાં તમે  Gujarati, Hindi, English, Economics, History, Sociology, Gandhian Thoughts, Journalism and Mass Communication, Jain Study, Human Resource Development,Yoga આ બધા વિષય માં એમ.એ. કરી સકો છો.');
  }); 
  controller.hears('એમ.સી.એ.','message_received', function(bot, message) {
    bot.reply(message,'એમ.સી.એ. 3 વર્ષ નો કોર્સ હોય છે \n\nસ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો\n\nઅહિયાં એમ.સી.એ. 2 રીતે થાય છે \n\n1.Regular  2.Lateral\n\n1.આ 3 વર્ષ નો કોર્સ હોય છે .અને આમાં 45 શીટ હોય છે\n\n2.આ કોર્સ 2 વર્ષ નો થાય છે અને આમાં પ્રવેશ માટે પરીક્ષા લેવા માં આવે છે ');
  });
  controller.hears('એમ.લિબ.','message_received', function(bot, message) {
     bot.reply(message,'એમ.લિબ.  2 વર્ષ નો હોય છે \n\n બી.લિબ. થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  }); 
  controller.hears('એમ.એસ.ડબલ્યુ.','message_received', function(bot, message) {
      bot.reply(message,'એમ.એસ.ડબલ્યુ.  2 વર્ષ નો હોય છે \n\n સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો\n\nઆ કોર્સ માં ફીલ્ડવર્ક પણ હોય છે. ');
  }); 
  controller.hears('એમ.એસ.સી. ઇન માઇક્રોબાયોલોજી','message_received', function(bot, message) {
    bot.reply(message,'  એમ.એસ.સી. ઇન માઇક્રોબાયોલોજી  2 વર્ષ નો હોય છે \n\n માઇક્રોબાયોલોજી માં સ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  }); 

  controller.hears('એમ.એસ.સી. ઇન એનવીરોમેંટલ સાઇન્સ અને ટેક્નોલોજી ','message_received', function(bot, message) {
     bot.reply(message,' એમ.એસ.સી. ઇન એનવીરોમેંટલ સાઇન્સ અને ટેક્નોલોજી  2 વર્ષ નો હોય છે \n\nસ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('એમ.બી.એ. ઇન રૂરલ મેનેજમેંટ','message_received', function(bot, message) {
    bot.reply(message,'  એમ.બી.એ. ઇન રૂરલ મેનેજમેંટ  2 વર્ષ નો હોય છે \n\nસ્નાતક થયા પછી તમે આ કોર્સ માટે એપ્લાઈ કરી સકો છો ');
  });
  controller.hears('એમ.ફિલ. અને પી.એચડી.','message_received', function(bot, message) {
    bot.reply(message,'અનુસ્નાતક થયા પછી તમે આ કોર્સ માં એપ્લાઈ કરી સકો છો.\n\nઆહિયા તમે  Education ,Gujarati ,Hindi ,Economics ,History ,Sociology ,Social Work ,Gandhian Thoughts ,Science and Non-violence ,Journalism and Mass Communication ,Library and Information Science ,Computer Science ,Microbiology ,Physical Education ,Rural Management ,Population Education ,Peace Studies & Conflict Resolution ,Adult Education આ બધા વિષય માં એમ.ફિલ. અને પી.એચડી. કરી સકો છો.');
  });  
}

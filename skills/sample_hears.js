module.exports = function(controller) {

  controller.hears('test','message_received', function(bot, message) {

    bot.reply(message,'I heard a test');
  });

  controller.hears('gujarat vidyapith','message_received', function(bot, message) {
	bot.reply(message,{
        text:'[Click Here To Gujarat vidyapith Website](http://www.gujaratvidyapith.org/)',
        quick_replies: [
            {
                title: 'admission process',
                payload: 'admission process'
            },
			{
                title: 'hostel facility',
                payload: 'hostel facility'
            },
			{
                title: 'uniform',
                payload: 'uniform'
            },
			
		]
      },function() {});
  });
  controller.hears(['what is your university name','university name'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'Mahadev Desai Samajseva Saknul Mahavidyalaya Gujarat Vidyapith Ahamedabad',
        quick_replies: [
            {
                title: 'admission process',
                payload: 'admission process'
            },
			{
                title: 'hostel facility',
                payload: 'hostel facility'
            },
			{
                title: 'approve status',
                payload: 'approve status'
            },
			
		]
      },function() {});
  });
  controller.hears(['What is the date of admission form','form date','admission form'],'message_received', function(bot, message) {
    bot.reply(message,'15 May');
	bot.reply(message,{
        text:'[check here](http://www.gujaratvidyapith.org/admm/index.htm)',
        quick_replies: [
            {
                title: 'admission process',
                payload: 'admission process'
            },
			{
                title: 'courses',
                payload: 'courses'
            },
			{
                title: 'department list',
                payload: 'department list'
            },
			
		]
      },function() {});
	});
  controller.hears(['What is the process of admission','admission process'],'message_received', function(bot, message) {
    bot.reply(message,'fisrt you fill our online form on our site then you will come into university for confirm your addmission'); 
	bot.reply(message,{
        text:'[click here for fill the addmission form](http://www.gujaratvidyapith.org/admm/index.htm)',
        quick_replies: [
            {
                title: 'sheets',
                payload: 'sheets'
            },
			{
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'course list',
                payload: 'course list'
            },
			
		]
      },function() {});
	});
  controller.hears(['What are the arrangements given by your university to the hostel','hostel facility'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'- Accommodation with necessary furniture like bed, reading desk, cup board, lighting and fan. \n\n - Common room, Rooms for Computer, Recreation, Reading. Also rest and Guest room. \n\n- 24X7 water and electricity supply. \n\n - Dining hall with kitchen / store. \n\n - Solar Water Heaters. \n\n - Steam cooking system that saves the cooking time and reduces mess bills. \n\n - PNG line for cooking in Ahmedabad campus. \n\n- security arrangement for girls hostel',
		quick_replies: [
            {
                title: 'boys hostel fee',
                payload: 'boys hostel fee'
            },
			{
                title: 'rules and regulation',
                payload: 'rules and regulation'
            },
			{
                title: 'girls hostel fee',
                payload: 'girls hostel fee'
            },
			{
                title: 'food',
                payload: 'food'
            },
			
		]
      },function() {});
  });
  
  controller.hears(['how many language use in study','language used in study'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'gujarati,english,hindi',
		quick_replies: [
            {
                title: 'scholarship',
                payload: 'scholarship'
            },
			{
                title: 'rules and regulation',
                payload: 'rules and regulation'
            },
			{
                title: 'lab facility',
                payload: 'lab facility'
            },
			
		]
      },function() {});
  });
    controller.hears(['what is date of entrance exam','entrance exam date'],'message_received', function(bot, message) {
    
	bot.reply(message,{
		text:'20 june',
		quick_replies: [
            {
                title: 'merit of entrance exam',
                payload: 'merit of entrance exam'
            },
			{
                title: 'course list',
                payload: 'course list'
            },
			{
                title: 'ranking',
                payload: 'ranking'
            },
			
		]
      },function() {});
  });
  controller.hears(['Any entrance exam is taken for admission to your university','entrance exam'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'yes only for lateral entry course',
		quick_replies: [
            {
                title: 'scholarship',
                payload: 'scholarship'
            },
			{
                title: 'annual package',
                payload: 'annual package'
            },
			{
                title: 'lab facility',
                payload: 'lab facility'
            },
			
		]
      },function() {});
  });
  controller.hears(['What are the merit of entrance exam','merit of entrance exam'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'60%',
		quick_replies: [
            {
                title: 'placement',
                payload: 'placement'
            },
			{
                title: 'courses',
                payload: 'courses'
            },
			{
                title: 'lab facility',
                payload: 'lab facility'
            },
			
		]
      },function() {});
  });
  controller.hears(['What are the quality of food in your hostel','food'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'here we provide best quality food in hostel',
		quick_replies: [
            {
                title: 'hostel facilitiy',
                payload: 'hostel facility'
            },
			{
                title: 'wi-fi',
                payload: 'wi-fi'
            },
			{
                title: 'lab facility',
                payload: 'lab facility'
            },
			
		]
      },function() {});
  });
  controller.hears(['which type of uniform in university or hostel','uniform','dress'],'message_received', function(bot, message) {
   
	  bot.reply(message,{
  text: 'only khadi uniform allowed in university and hostel and here is our university uniform',
  files: [
      {
        url: 'https://i.ytimg.com/vi/EN6__NkRJgo/0.jpg',
        image: true
      }
	] 
  });
  });
 controller.hears(['the university provide any scholarship facility','scholarship'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'yes our university provide all government scholarships',
		quick_replies: [
            {
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'loan',
                payload: 'loan'
            },
			{
                title: 'library',
                payload: 'library'
            },
			
		]
      },function() {});
  });  
  controller.hears(['what is lecture timing','lecture timing'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'8.00AM to 6.00PM',
		quick_replies: [
            {
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'loan',
                payload: 'loan'
            },
			{
                title: 'sheets',
                payload: 'sheets'
            },
			
		]
      },function() {});
  });
   controller.hears(['what is ranking of your university','ranking'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'this is A+ certified university approved by UGC and it is a Deemed university.It.s ranking is 4.5 above 5',
		quick_replies: [
            {
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'loan',
                payload: 'loan'
            },
			{
                title: 'wi-fi',
                payload: 'wi-fi'
            },
			
		]
      },function() {});
  });
  controller.hears(['does university provide any loan facility','loan'],'message_received', function(bot, message) { 
	bot.reply(message,{
		text:'yes our university provide loan facility for poor students and also provide loan for those students who want to start own startup business',
		quick_replies: [
            {
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'percentages require',
                payload: 'percentages require'
            },
			{
                title: 'wi-fi',
                payload: 'wi-fi'
            },
			
		]
      },function() {});
 });
  controller.hears(['how many percentages require for admission','percentages requiress','percentages'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'above 50% marks in all subjects',
		quick_replies: [
            {
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			
		]
      },function() {});
  });
  controller.hears(['How many sheets are in a class in your university','sheets'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'45 to 60 sheets are available',
		quick_replies: [
            {
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'percentages require',
                payload: 'percentages require'
            },
			{
                title: 'course list',
                payload: 'course list'
            },
			
		]
      },function() {});
  });
  controller.hears(['Are the wi-fi facility available inside your campus','wi-fi'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'yes here you can access 24 hours wi-fi in our campus.',
		quick_replies: [
            {
                title: 'location',
                payload: 'location'
            },
			{
                title: 'hostel facility',
                payload: 'hostel facility'
            },
			{
                title: 'library',
                payload: 'library'
            },
			
		]
      },function() {});
  });
  controller.hears(['Tell your university faculty information','faculty information'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'[click here for faculty information](http://www.gujaratvidyapith.org/faculty.htm)',
		quick_replies: [
            {
                title: 'location',
                payload: 'location'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'library',
                payload: 'library'
            },
			
		]
      },function() {});
	}); 
  controller.hears(['do you have the facility of industrial training in your university','industrial training'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'yes we provide all type of industrial training and workshop facility for students developments',
		quick_replies: [
            {
                title: 'location',
                payload: 'location'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'library',
                payload: 'library'
            },
			
		]
      },function() {});
  }); 
    controller.hears(['How many departments are there in your university','department list'],'message_received', function(bot, message) {
   bot.reply(message,{
		text:'1.Gujarati  2.Hindi 3.Rural Economics 4.History and Culture 5.Archival Science 6.Social Anthropology 7.Social Reconstruction 8.Jainism 9.Social Work 10.Journalism and Mass Communication 11.Department of Computer Science 12.Library Science and Informatics 13.Gandhian Philosophy 14.Peace Research 15.Buddhism',
		quick_replies: [
            {
                title: 'course list',
                payload: 'course list'
            },
			{
                title: 'hostel facility',
                payload: 'hostel facility'
            },
			{
                title: 'library',
                payload: 'library'
            },
			
		]
      },function() {});
  });   
  controller.hears(['How many courses are there in your university','courses'],'message_received', function(bot, message) {
    bot.reply(message,{
        text:'we provide many course you can get details from here',
        quick_replies: [
            {
                title: 'course list',
                payload: 'course list'
            },
		]
      },function() {});
  });
   controller.hears(['is there a field work in the msw course','field work'],'message_received', function(bot, message) {
   bot.reply(message,{
		text:'yes in msw course we provide field work',
		quick_replies: [
            {
                title: 'expenses in feild work',
                payload: 'expenses in feild work'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'course list',
                payload: 'course list'
            },
			
		]
      },function() {});
  });
  controller.hears(['Are expenses in field work given by the university','expenses in feild work'],'message_received', function(bot, message) {
	bot.reply(message,{
		text:'no the cost of field work is to fund the student himself',
		quick_replies: [
            {
                title: 'm.s.w. fee',
                payload: 'm.s.w. fee'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'M.S.W',
                payload: 'M.S.W'
            },
			
		]
      },function() {});
  });
  controller.hears('syllabus','message_received', function(bot, message) {
	bot.reply(message,{
		text:'[click here to download syllabus](http://www.gujaratvidyapith.org/syllabus.htm)',
		quick_replies: [
            {
                title: 'course list',
                payload: 'course list'
            },
			{
                title: 'library',
                payload: 'library'
            },
			{
                title: 'faculty information',
                payload: 'faculty information'
            },
			
		]
      },function() {});
  });
  controller.hears(['what are the rules and regulation of your university','rules and regulation'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'1.in this campus only khadi uniform is allowed.\n\n2.80% attendance is compulsory in any course.\n\n3.you will regular come in the prayer and spanning the spanning box.',
		quick_replies: [
            {
                title: 'course list',
                payload: 'course list'
            },
			{
                title: 'hostel facilitiy',
                payload: 'hostel facility'
            },
			{
                title: 'different examinations',
                payload: 'different examinations'
            },
			
		]
      },function() {});
  });
  controller.hears(['what different examinations are required in the university','different examinations'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'1. group living \n\n2. spanning box\n\n3. prayer\n\n4. hostel life',
		quick_replies: [
            {
                title: 'skill development',
                payload: 'skill development'
            },
			{
                title: 'nss',
                payload: 'nss'
            },
			{
                title: 'faculty information',
                payload: 'faculty information'
            },
			
		]
      },function() {});
  }); 
  controller.hears(['Do you have a library in your university','library'],'message_received', function(bot, message) {
   bot.reply(message,{
		text:'yes we have a very big library in our campus.It contain 7 lakh books and magazine',
		quick_replies: [
            {
                title: 'loan',
                payload: 'loan'
            },
			{
                title: 'credit course',
                payload: 'credit course'
            },
			{
                title: 'contact',
                payload: 'contact'
            },
			
		]
      },function() {});
  });
  controller.hears(['What is your university location','location'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'Near Income Tax Office, Ashram Road, Ahmedabad, Gujarat 380014\n\n[here is the direction](https://www.google.com/maps/place/Gujarat+Vidyapith/@23.0460394,72.5572715,16z/data=!4m8!1m2!2m1!1sGujarat+Vidyapith!3m4!1s0x395dd2a4d23a6ed5:0x5508df4fe375c19b!8m2!3d23.0445501!4d72.5673742)',
		quick_replies: [
            {
                title: 'loan',
                payload: 'loan'
            },
			{
                title: 'credit course',
                payload: 'credit course'
            },
			{
                title: 'contact',
                payload: 'contact'
            },
			
		]
      },function() {});
  });
   controller.hears(['Do you have skill development courses in your university','skill development'],'message_received', function(bot, message) {  
    bot.reply(message,{
		text:'yes our university provide music,language learning, udhyog, swimming, Handicraft etc.',
		quick_replies: [
            {
                title: 'contact',
                payload: 'contact'
            },
			{
                title: 'credit course',
                payload: 'credit course'
            },
			{
                title: 'growth report',
                payload: 'growth report'
            },
			
		]
      },function() {});
  });
  controller.hears(['Do you have nss and ncc arrangements in your university','ncc','nss'],'message_received', function(bot, message) {
   bot.reply(message,{
		text:'yes our university have nss facility.',
		quick_replies: [
            {
                title: 'contact',
                payload: 'contact'
            },
			{
                title: 'placement',
                payload: 'placement'
            },
			{
                title: 'reservation',
                payload: 'reservation'
            },
		]
      },function() {});
  });
  controller.hears(['Do you have a touring facility in your university','tour'],'message_received', function(bot, message) {
   bot.reply(message,{
		text:'yes our university provide tour in every year and we also organise padyatra.',
		quick_replies: [
            {
                title: 'anathor state student',
                payload: 'anathor state student'
            },
			{
                title: 'uniform',
                payload: 'uniform'
            },
			{
                title: 'lacture timing',
                payload: 'lacture timing'
            },
		]
      },function() {});
  });
 controller.hears(['How can I contact to any department','contact'],'message_received', function(bot, message) {
   bot.reply(message,{
		text:'conact: 079-27541148, 079-27540746, 079-40016200\n\nemail: info@gujaratvidyapith.org',
		quick_replies: [
            {
                title: 'admission process',
                payload: 'admission process'
            },
			{
                title: 'uniform',
                payload: 'uniform'
            },
			{
                title: 'course list',
                payload: 'course list'
            },
		]
      },function() {});
	});
 controller.hears(['Do you have extra credit courses in your university','extra course','credit course'],'message_received', function(bot, message) {
   bot.reply(message,{
		text:'yes as per AICTE guideline student can choice one extra subject with his course.',
		quick_replies: [
            {
                title: 'admission process',
                payload: 'admission process'
            },
			{
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'annual package',
                payload: 'annual package'
            },
		]
      },function() {});
  });
 controller.hears(['What is your university growth report','report','growth report'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'[click here for report],(http://gujaratvidyapith.org/newsandevents/Gujarat%20Vidyapith%20Report-MHRD.pdf)',
		quick_replies: [
            {
                title: 'university name',
                payload: 'university name'
            },
			{
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'location',
                payload: 'location'
            },
		]
      },function() {});
  });
  controller.hears(['Can a student of another state apply to your university','anathor state','anathor state student'],'message_received', function(bot, message) { 
	bot.reply(message,{
		text:'Student of any state can apply in our university',
		quick_replies: [
            {
                title: 'loan',
                payload: 'loan'
            },
			{
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'location',
                payload: 'location'
            },
		]
      },function() {}); 
 });
  controller.hears(['Are there facilities for reservation in your university','reservation'],'message_received', function(bot, message) {
  	bot.reply(message,{
		text:'reservation system is available for some special cast',
		quick_replies: [
            {
                title: 'gujarat vidyapith',
                payload: 'gujarat vidyapith'
            },
			{
                title: 'department list',
                payload: 'department list'
            },
			{
                title: 'location',
                payload: 'location'
            },
		]
      },function() {});
  });
 controller.hears(['How much an annual package is after post graduation','annual package'],'message_received', function(bot, message) {
    bot.reply(message,{
		text:'Post-graduate packages are available on your knowledge basis. And there are at least 100,000 annual packages in it.',
		quick_replies: [
            {
                title: 'loan',
                payload: 'loan'
            },
			{
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'location',
                payload: 'location'
            },
		]
      },function() {});
  });
   controller.hears(['Do you have labs in your university','lab facility','lab'],'message_received', function(bot, message) { 
  bot.reply(message,{
		text:'All types of labs related to the course are available here.',
		quick_replies: [
            {
                title: 'course list',
                payload: 'course list'
            },
			{
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'location',
                payload: 'location'
            },
		]
      },function() {});
  });
 controller.hears(['What are the status of your university approve','approve status','approve'],'message_received', function(bot, message) {
  bot.reply(message,{
		text:'Gujarat Vidyapith was founded by Mahatma Gandhi on 18th October, 1920.It has been deemed university since 1963 .University established under Section 3 of the UGC Act, 1956; vide Notification No. F.10-20/62-U2 of the Govt. of India.',
		quick_replies: [
            {
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'loan',
                payload: 'loan'
            },
			{
                title: 'location',
                payload: 'location'
            },
			
		]
      },function() {});
  });
   controller.hears(['how many percentage of placements in your university','placement'],'message_received', function(bot, message) {
	bot.reply(message,'');  
bot.reply(message,{
		text:'according to records 80% to 90% placement provided by university',
		quick_replies: [
            {
                title: 'course list',
                payload: 'course list'
            },
			{
                title: 'approve status',
                payload: 'approve status'
            },
			{
                title: 'location',
                payload: 'location'
            },
		]
      },function() {});
	});
  controller.hears('gandhi','message_received', function(bot, message) {
    bot.reply(message,{
  text: 'Look, an image!',
  files: [
      {
        url: 'http://www.gujaratvidyapith.org/index_files/GVP-Home_02.jpg',
        image: true
      }
  ]
	});
 });
 controller.hears(['hello','hi'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'hello',
        quick_replies: [
            {
                title: 'admission process',
                payload: 'admission process'
            },
			{
                title: 'hostel facility',
                payload: 'hostel facility'
            },
			{
                title: 'uniform',
                payload: 'uniform'
            },
		]
      },function() {});
  });
  controller.hears('typing','message_received', function(bot, message) {
    bot.reply(message,{
      text: 'This message used the automatic typing delay',
      typing: true,
    }, function() {
      bot.reply(message,{
        text: 'This message specified a 5000ms typing delay',
        typingDelay: 5000,
      });
    });
  });
}
 
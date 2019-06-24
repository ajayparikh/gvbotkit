 module.exports = function(controller) {
 controller.hears(['course list','how many course provide by your ','provide your course list'],'message_received', function(bot, message) {

    bot.reply(message,{
        text: 'here we provide this type of course',
        quick_replies: [
            {
                title: 'Certificate',
                payload: 'Certificate'
            },
            {
                title: 'Diploma',
                payload: 'Diploma'
            },
			{
                title: 'Graduation',
                payload: 'Graduation'
            },
			{
                title: 'Post_Graduation',
                payload: 'Post_Graduation'
            },
			{
                title: 'M.Phil and PHD',
                payload: 'M.phil and PHD'
            },
        ]
      },function() {});

  });
  controller.hears('Certificate','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'this are the Certificate course',
        quick_replies: [
            {
                title: 'Light Music',
                payload: 'Light Music'
            },
            {
                title: 'Chhanda Shashtra',
                payload: 'Chhanda Shashtra'
            },
			{
                title: 'Art and Craft',
                payload: 'Art and Craft'
            },
			{
                title: 'Computer Hardware & Network Technology',
                payload: 'Computer Hardware & Network Technology'
            },
        ]
      },function() {});

  });
  controller.hears('Diploma','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'this are the Diploma course',
        quick_replies: [
            {
                title: 'P.G.D. in Yogik Art and Science',
                payload: 'P.G.D. in Yogik Art and Science'
            },
            {
                title: 'P.G.D. in Audio Visual Production (TV)',
                payload: 'P.G.D. in Audio Visual Production (TV)'
            },
			{
                title: 'P.G.D. in Computer Applications',
                payload: 'P.G.D. in Computer Applications'
            },
			{
                title: 'P.G.D. in Computer Hardware & Network Technology',
                payload: 'P.G.D. in Computer Hardware & Network Technology'
            },
			{
                title: 'P.G.D. in Prayojanmulak Hindi',
                payload: 'P.G.D. in Prayojanmulak Hindi'
            },
			{
                title: 'P.G.D. in Translation Hindi',
                payload: 'P.G.D. in Translation Hindi'
            },	
        ]
      },function() {});

  });
  controller.hears('Post_Graduation','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'this are the Post Graduation course',
        quick_replies: [
            {
                title: 'M.Ed',
                payload: 'M.Ed'
            },
            {
                title: 'Master of Physical Education and Sports',
                payload: 'Master of Physical Education and Sports'
            },
			{
                title: 'Master of Physical Education',
                payload: 'Master of Physical Education'
            },
			{
                title: 'M.A.',
                payload: 'M.A.'
            },
			{
                title: 'M.C.A.',
                payload: 'M.C.A.'
            },
			{
                title: 'M.Lib',
                payload: 'M.Lib'
            },
			{
                title: 'M.S.W',
                payload: 'M.S.W'
            },
			{		
                title: 'M.Sc. in Environmental Sciences and Technology',
                payload: 'M.Sc. in Environmental Sciences and Technology'
            },
			{		
                title: 'M.Sc. in Microbiology',
                payload: 'M.Sc. in Microbiology'
            },
			{		
                title: 'M.Sc. in Environmental Sciences and Technology',
                payload: 'M.Sc. in Environmental Sciences and Technology'
            },							
			{		
                title: 'MBA in Rural Management',
                payload: 'MBA in Rural Management'
            },		
        ]
      },function() {});

  });
  controller.hears('Graduation','message_received', function(bot, message) {

    bot.reply(message,{
        text: 'this are the Graduation course',
        quick_replies: [
            {
                title: 'B.Ed',
                payload: 'B.Ed'
            },
            {
                title: 'B.A.',
                payload: 'B.A.'
            },
			{
                title: 'B.Sc.(Microbiology)',
                payload: 'B.Sc.'
            },
			{
                title: 'B.Voc.(Food Process Technology)',
                payload: 'B.Voc.(Food Process Technology)'
            },
			{
                title: 'B.Voc.(Fashion Designing and Apparel Science)',
                payload: 'B.Voc.(Fashion Designing and Apparel Science)'
            },
			{
                title: 'Bachelor of Rural Studies',
                payload: 'Bachelor of Rural Studies'
            },
			{
                title: 'Bachelor in Physical Education and Sports',
                payload: 'Bachelor in Physical Education and Sports'
            },
			{
                title: 'Bachelor in Physical Education',
                payload: 'Bachelor in Physical Education'
            },
			{
                title: 'B.Lib.I.Sc.',
                payload: 'B.Lib.I.Sc.'
            },	
			
        ]
      },function() {});

  });


  controller.hears(['m.a. fee','ma fee'],'message_received', function(bot, message) {
   bot.reply(message,{
        text:'fee of M.A. course is 4455rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  	controller.hears(['m.s.w. fee','msw fee'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'fee of M.S.W. course is 4455rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
   controller.hears(['B.Lib.I.Sc. fee','b.Lib. fees'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'fee of B.Lib.I.Sc. course is 4455rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears(['m.lib. fee','m.Lib. fees'],'message_received', function(bot, message) {
  	bot.reply(message,{
        text:'fee of M.LIB. course is 4455rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears(['mca fee','m.c.a fee'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'fee of M.C.A. course is 9905rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears(['pfdchn fee','p.g.d.c.h.n. fee'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'fee of P.G.D.C.H.N. course is 8105rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
    controller.hears(['pfdca fee','p.g.d.c.a. fee'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'fee of P.G.D.C.A. course is 9905rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears(['ma yoga fee','m.a. yoga fee'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'fee of M.A. YOGA course is 13125rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
   controller.hears(['yoga certificate fee','yoga certificate fee'],'message_received', function(bot, message) {
	bot.reply(message,{
        text:'fee of yoga certificate course is 6000rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
 controller.hears(['yoga fee','yoga fee'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'fee of YOGA course is 12725rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
 controller.hears(['audiovisual fee','audiovisual fees'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'fee of Audio Visual course is 16605rs only',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears(['girls hostel fee','girl hostel fees'],'message_received', function(bot, message) {
  bot.reply(message,{
        text:'fee of Girls hostel is 7750rs only for Six month',
        quick_replies: [
			{
                title: 'hostel facility',
                payload: 'hostel facility'
            },
		]
      },function() {});
  });
  controller.hears(['boys hostel fee','boy hostel fees'],'message_received', function(bot, message) {
 
  bot.reply(message,{
        text:'fee of boys hostel is 10000rs only for Six month',
        quick_replies: [
			{
                title: 'hostel facility',
                payload: 'hostel facility'
            },
		]
      },function() {});
  });


  controller.hears('Light Music','message_received', function(bot, message) {
   bot.reply(message,{
        text:'this course is only six month.\nafter 12th you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
	controller.hears('Chhanda Shashtra','message_received', function(bot, message) {
	 bot.reply(message,{
        text:'this course is only six month.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('Art and Craft','message_received', function(bot, message) {
	bot.reply(message,{
        text:'this is one year course.\nafter 12th you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('Computer Hardware & Network Technology','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is only six month.\nafter 12th you are eligible for this course.\nthe fees of this course 5000rs only.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('P.G.D. in Yogik Art and Science','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is one year.\nafter graduation you are eligible for this course.',
        quick_replies: [
            {
                title: 'yoga certificate fee',
                payload: 'yoga certificate fee'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('P.G.D. in Audio Visual Production (TV)','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is one year.\n\nafter graduation you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
	});
   controller.hears('P.G.D. in Computer Applications','message_received', function(bot, message) {
     bot.reply(message,{
   text:'this course is one year.\n\nafter graduation you are eligible for this course.',
        quick_replies: [
            {
                title: 'pfdca fee',
                payload: 'pfdca fee'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  
  controller.hears('P.G.D. in Computer Hardware & Network Technology','message_received', function(bot, message) {
    bot.reply(message,{
        text:'this course is one year.\n\nafter graduation you are eligible for this course.',
        quick_replies: [
            {
                title: 'pfdchn fee',
                payload: 'pfdchn fee'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  
  controller.hears('B.Ed','message_received', function(bot, message) {
   bot.reply(message,{
        text:'this course is two year.\n\nafter graduation you are eligible for this course.\Here you can do B.Ed in Maths, Science, English, Sanskrit, Gujarati, Social Science, Primary Education and Hindi.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('B.A.','message_received', function(bot, message) {
   bot.reply(message,{
        text:'this course is three year.\n\nafter 12th you are eligible for this course.\Here you can do B.A. in English ,Gujarati ,Hindi ,History ,Economics ,Sociology Subjects.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('B.Sc.','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is three year.\n\nafter 12th in Science with B/AB Group you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('B.Voc.(Food Process Technology)','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is three year.\n\nafter 12th in Science with B/AB Group you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('B.Voc.(Fashion Designing and Apparel Science)','message_received', function(bot, message) {
 bot.reply(message,{
        text:'this course is three year.\n\nafter 12th you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {}); 
 });
  controller.hears('Bachelor of Rural Studies','message_received', function(bot, message) {
	bot.reply(message,{
        text:'this course is three year.\n\nafter 12th you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {}); 
 });
  controller.hears('Bachelor in Physical Education and Sports','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is three year.\n\nafter 12th you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {}); 
  });    
  controller.hears('Bachelor in Physical Education','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is one year.\n\nafter graduation you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {}); 
  });
  controller.hears('B.Lib.I.Sc.','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is one year.\n\nafter graduation you are eligible for this course.',
        quick_replies: [
            {
                title: 'B.Lib.I.Sc. fee',
                payload: 'B.Lib.I.Sc. fee'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('M.Ed','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is two year.\n\nafter B.Ed you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
	});
  controller.hears('Master of Physical Education and Sports','message_received', function(bot, message) {
    bot.reply(message,{
        text:'this course is two year.\n\nafter B.P.E.S. you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('Master of Physical Education','message_received', function(bot, message) {
      bot.reply(message,{
        text:'this course is two year.\n\nafter B.P.Ed you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
    controller.hears('M.A.','message_received', function(bot, message) {
	 bot.reply(message,{
        text:'this course is two year.\n\nafter Graduation you are eligible for this course.\n\nHere you can do M.A. in Gujarati, Hindi, English, Economics, History, Sociology, Gandhian Thoughts, Journalism and Mass Communication, Jain Study, Human Resource Development,Yoga Subjects.',
        quick_replies: [
            {
                title: 'm.a. fee',
                payload: 'm.a. fee'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  }); 
  controller.hears('M.C.A.','message_received', function(bot, message) {
   	 bot.reply(message,{
        text:'this course is three year.\n\nafter Graduation you are eligible for this course.\n\nHere you can do MCA in two types.\n\n1.Regular  2.Lateral\n\n1.this is three year course and it based on first come first serve addmission.\n\n2.this is two year course and it is based on entrance exam.',
        quick_replies: [
            {
                title: 'mca fee',
                payload: 'mca fee'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
	});
 
  controller.hears('M.Lib','message_received', function(bot, message) {
	bot.reply(message,{
        text:'this course is one year.\n\nafter B.Lib.I.Sc. you are eligible for this course.',
        quick_replies: [
            {
                title: 'm.lib. fee',
                payload: 'm.lib. fee'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {}); 
 }); 
  controller.hears('M.S.W','message_received', function(bot, message) {
	bot.reply(message,{
        text:'this course is two year.\n\nafter Graduation you are eligible for this course.\n\nthis course is also contain feild work.',
        quick_replies: [
            {
                title: 'm.s.w. fee',
                payload: 'm.s.w. fee'
            },
			{
                title: 'feild work',
                payload: 'feild work'
            },
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});

 }); 
  controller.hears('M.Sc. in Microbiology','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is two year.\n\nafter Graduation in Microbiology you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  }); 
  controller.hears('M.Sc. in Environmental Sciences and Technology','message_received', function(bot, message) {
  bot.reply(message,{
        text:'this course is two year.\n\nafter Graduation you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('MBA in Rural Management','message_received', function(bot, message) {
   bot.reply(message,{
        text:'this course is two year.\n\nafter Graduation you are eligible for this course.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
  });
  controller.hears('M.Phil and PHD','message_received', function(bot, message) {
   bot.reply(message,{
        text:'after Post Graduation you are eligible for this course.\n\nHere you can do M.Phil and PHD in Education ,Gujarati ,Hindi ,Economics ,History ,Sociology ,Social Work ,Gandhian Thoughts ,Science and Non-violence ,Journalism and Mass Communication ,Library and Information Science ,Computer Science ,Microbiology ,Physical Education ,Rural Management ,Population Education ,Peace Studies & Conflict Resolution ,Adult Education Subjects.',
        quick_replies: [
			{
                title: 'syllabus',
                payload: 'syllabus'
            },
			{
                title: 'admission process',
                payload: 'admission process'
            },
		]
      },function() {});
	});  
}

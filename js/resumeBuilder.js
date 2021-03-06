/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Defining bio object
var bio = {
    'name': 'Aravindh Balasundaram',
    'role': 'Designer/Developer',
    'contacts': {
        'mobile': '8148373332',
        'email': 'aravindhb4@gmail.com',
        'twitter': 'http://twitter.com/aravib4',
        'github': 'http://github.com/aravindhb4',
        'location': 'Chennai, India'

    },
    'welcomeMessage': 'Hey, I am an UI/UX designer who is learning to code to get my designs to life. Also developing my skills in Motion graphics and Interaction Design.',
    'skills': ['UI/UX design', 'Interaction Design', 'Motion Design', 'Javascript', 'HTML/CSS'],
    'biopic': 'http://placekitten.com/200/200',
    'display': function() {

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        // Add them to DOM
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#topContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
        // Footer Content
        $('#footerContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
        $('#header').append(formattedPic);
        $('#header').append(formattedWelcomeMsg);


        // Add skills
        var x = bio.skills.length;

        if (x > 0) {
            $('#header').append(HTMLskillsStart);
            for (var i = 0; i < x; i++) {
                var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
                $('#skills').append(formattedSkills);
            }
        }

    }
};

// Defining education object
var education = {
    'schools': [{
        'name': 'Sri Vijay Vidyala Boys',
        'location': 'Dharmapuri, Tamilnadu, India',
        'degree': 'School',
        'majors': ['Biology'],
        'dates': '2008 - 2010',
        'url': 'http://www.google.com'
    }, {
        'name': 'Anna University',
        'location': 'Chennai, India',
        'degree': 'BE',
        'majors': ['Computer Science'],
        'dates': '2010-2014',
        'url': 'http://annauniversity.edu'
    }],

    'onlineCourses': [{
        'title': 'Front-End Web Developer',
        'school': 'Udacity',
        'dates': 'September 2016 - Present',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }],

    'display': function() {
        if (education.schools.length > 0) {
            education.schools.forEach(function(school) {

                $('#education').append(HTMLschoolStart);

                var formattedName = HTMLschoolName.replace('%data%', school.name);
                formattedName = formattedName.replace('#', school.url);

                var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);

                var formattedNameDegree = formattedName + formattedDegree;

                $('.education-entry:last').append(formattedNameDegree);

                var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
                $('.education-entry:last').append(formattedDates);

                var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);
                $('.education-entry:last').append(formattedMajor);

                var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
                $('.education-entry:last').append(formattedLocation);

            });

        }

        if (education.onlineCourses.length > 0) {

            $('#education').append(HTMLonlineClasses);

            education.onlineCourses.forEach(function(course) {
                $('#education').append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
                formattedTitle = formattedTitle.replace('#', course.url);

                var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);

                formattedSchoolTitle = formattedTitle + formattedSchool;
                $('.education-entry:last').append(formattedSchoolTitle);

                var formattedCourseDates = HTMLonlineDates.replace('%data%', course.dates);
                $('.education-entry:last').append(formattedCourseDates);

                var formattedURL = HTMLonlineURL.replace('%data%', course.url);
                formattedURL = formattedURL.replace('#', course.url);
                $('.education-entry:last').append(formattedURL);
            });

        }
    }
};

// Defining work object
var work = {
    'jobs': [{
            'employer': 'TCS',
            'employerURL': 'http://www.tcs.com/Pages/default.aspx',
            'title': 'Assistant Systems Engineer',
            'dates': 'December 2014 - August 2016',
            'location': 'Chennai, India',
            'description': 'My first job and it was in banking sector. Worked on various technologies including Mainframe, simple front-end technologies. Got to know how office works, was not enjoying my work a lot tbh. My role was support executive who will solve any production issues that people experience. Handling set of tickets/requests on a daily basis.'
        },

        {
            'employer': 'Arivu Ventures',
            'employerURL': 'http://arivuventures.com',
            'title': 'UI/UX Designer',
            'dates': 'August 2016 - Present',
            'location': 'Chennai, India',
            'description': "After realising service sector was not my thing, took up design in which i was interested a lot. Currently working on user experience design, prototyping, visual design and learning motion/nteraction design. Since joining, i'm learning new things everyday and i mostly try to implement it or just fiddle with the application atleast. It's great to do something that you really enjoy."
        }
    ],

    'display': function() {
        if (work.jobs.length > 0) {

            work.jobs.forEach(function(job) {
                $('#workExperience').append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
                formattedEmployer = formattedEmployer.replace('#', job.employerURL);
                var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;

                $('.work-entry:last').append(formattedEmployerTitle);

                var formattedDates = HTMLworkDates.replace('%data%', job.dates);
                $('.work-entry:last').append(formattedDates);

                var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
                $('.work-entry:last').append(formattedLocation);

                var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
                $('.work-entry:last').append(formattedDescription);
            });
        }
    }
};

// Defining project object
var projects = {
    'projects': [{
        'title': 'Portfolio Website',
        'dates': 'September, 2016',
        'description': "This project was done as a part of Front-end Web Development course in Udacity. Technologies used were HTML, CSS and Bootstrap. It was really fun. It was hard initially as I was unable to start writing code on my own. I was like 'Where do i start with?' but slowly it was all falling in place. Made a lot of mistakes, Googled a lot and rectified those mistakes. Finally i was able to get a good output and it was worth the time spent.",
        'images': ['http://placekitten.com/400/400', 'http://placekitten.com/400/400', 'http://placekitten.com/400/400'],
        'url': 'http://aravindhb4.github.io'
    }],

    'display': function() {
        projects.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
            formattedTitle = formattedTitle.replace('#', project.url);
            $('.project-entry:last').append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
            $('.project-entry:last').append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedDescription);

            if (project.images.length > 0) {
                for (var i = 0; i < project.images.length; i++) {
                    var formattedImage = HTMLprojectImage.replace('%data%', project.images[i]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        });
    }
};

// Commented out the internationalizeButton
// $('#main').append(internationalizeButton);

// function inName(name) {
//     name = name.trim().split(' ');
//     console.log(name);
//     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//     name[1] = name[1].toUpperCase();
//     return name[0] + ' ' + name[1];
// }

// Add Google Maps
$('#mapDiv').append(googleMap);

// Display the functions
bio.display();
education.display();
work.display();
projects.display();
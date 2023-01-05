
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
//import resume_link from './resume.pdf'

export const navigation = {
	name: "So",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm So",
	description: "A curious software engineer with interests in web design, and machine learning",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
			//link: resume_link.src,
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a 4th year Computer Engineering student at UBC. I have been involved in Sport programming club as a founder, and a back-end lead for the SmartCity Design team in my time at the University",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
		"When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I have been involved in creating a React iOS app using Python flask, Node.js, MongoDB, and JavaScript at SmartCity Design Team",
			icons: null,
		},
		{
			title: "Web Development",
			description: "Learning different portfolio web designs that shines and grabs attention of the reader",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "StarBook",
			description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
			]
		},
		{
			title: "QuranTalk",
			description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/sonozaki7/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at sou.nozaki@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:sou.nozaki@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "https://calendly.com/sou-nozaki/15min",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "So Nozaki | Computer Engineering | Flutter| Nodejs Developer| Reactjs developer",
	description: "I am a 4th year Computer Engineering student at UBC. I have been involved in Sport programming club as a founder, and a back-end lead for the SmartCity Design team in my time at the University",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@sonozaki",
	description: "Computer Engineer | Python | Nodejs Developer",
	cards: [
		{
			title: "My website",
			link: "https://sonozaki7.github.io/portfolio/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/sonozaki7/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/sonozaki/",
		},
	]
}
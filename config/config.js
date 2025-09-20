
import getConfig from 'next/config';
import { faAppStore, faGithub, faGooglePlay, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
//import cv_link from './2025_MyCV.pdf'

// Utility function to create asset paths that work both locally and on GitHub Pages
const getAssetPath = (path) => {
	if (typeof window !== 'undefined') {
		// Client-side: use runtime config
		const { publicRuntimeConfig } = getConfig() || {};
		const basePath = publicRuntimeConfig?.basePath || '';
		return `${basePath}${path}`;
	} else {
		// Server-side: use environment variable
		const basePath = process.env.NODE_ENV === 'production' && process.env.BASE_PATH ? process.env.BASE_PATH : '';
		return `${basePath}${path}`;
	}
};

const profile = { src: getAssetPath('/images/profile.jpg') };

export const navigation = {
	name: "So",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Experience",
			link: "#experience",
		},
		{
			title: "University",
			link: "#university",
		},
		{
			title: "Skills",
			link: "#skills",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Leadership",
			link: "#leadership",
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
	title: "Hey, I'm So Nozaki",
	description: "Founder & Consultant at Zoltraak LLC | Computer Engineering Graduate from UBC | AI Trainer & Full-Stack Developer",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: getAssetPath("/2025_MyCV.pdf"),
			isPrimary: false,
		},
		{
			title: "Build in Public",
			link: "https://x.com/ghtght_",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About Me",
	description: [
		"I'm a tech entrepreneur who believes in using artificial intelligence to solve real-world problems. Born in Japan, educated in Canada, and currently building across Asia - I thrive in the intersection of cultures and innovation.",
		"My journey spans from competitive programming victories to AI consulting for major banks, but what drives me most is creating technology that makes a meaningful difference. Whether it's building safety apps for students or teaching English to children in orphanages, I'm passionate about tech for social good.",
		"I'm currently living between Japan and Thailand, working on cutting-edge AI projects while maintaining my philosophy of 'building in public' - sharing knowledge, failures, and successes to help others in the tech community grow.",
		"When I'm not coding or consulting, you'll find me exploring new cultures, mentoring aspiring developers, or documenting my entrepreneurial journey. I believe the best solutions come from diverse perspectives and genuine human connection.",
	],
}

export const work = {
	title: "Technical Skills",
	cards: [
		{
			title: "Programming Languages",
			description: "Python, C/C++, Java, TypeScript, HTML/CSS, Swift, Kotlin, Dart, Verilog",
			icons: null,
		},
		{
			title: "Frameworks & Tools",
			description: "React, Express, Expo, Flutter, React Native, PyTorch, Git, SQLite, GDB",
			icons: null,
		},
		{
			title: "Databases & Cloud",
			description: "PostgreSQL, MySQL, NoSQL (MongoDB), AWS, Azure",
			icons: null,
		},
		{
			title: "Methodologies",
			description: "Agile, Kanban, Systems Integration, RLHF, Machine Learning",
			icons: null,
		}
	],
}

export const experience = {
	title: "Work Experience",
	cards: [
		{
			title: "Founder & Consultant",
			company: "Zoltraak LLC",
			period: "Feb 2024 - Present",
			location: "Asia",
			description: "Contracted for $14,000 USD providing AI and data science consulting to a large European bank in Japan. Worked with UK-based startup Recursive Safeguarding Ltd on £59m Safeguarded AI program under ARIA grant funding. Building fashion photography and marketing AI services through Qolso.com.",
			logo: null,
		},
		{
			title: "AI Trainer",
			company: "Outlier AI & Invisible AI",
			period: "Aug 2023 - Jan 2025",
			location: "Oakland, CA",
			description: "Worked on xAI's AI training project and major LLM RLHF initiatives. Utilized Japanese, English, and Thai language skills to refine model outputs for diverse languages and cultures.",
			logo: null,
		},
		{
			title: "Game Testing Intern",
			company: "BlueStack",
			period: "Mar 2020 - Jan 2021",
			location: "San Francisco, CA",
			description: "Tested and evaluated newly integrated games on BlueStack emulation platform. Identified critical bugs resulting in 30% increase in post-launch stability and 25% improvement in overall platform reliability.",
			logo: getAssetPath("/images/BSicon.png"),
		},
	],
}

export const projects = {
	title: "Featured Projects",
	cards: [
		{
			title: "Leap AI - Concis",
			description: "CTO for a chatbot service that provides academic advisory to universities in Canada. Built comprehensive AI-powered student support system.",
			icons: [
				{
					icon: faExternalLinkAlt,
					link: "https://www.leap-ai.ca/concise",
				},
			]
		},
		{
			title: "Traffic Management System - P2JS",
			description: "Created for Rogers' 5G Hackathon using 3D LiDAR data to enable smart traffic lights and reduce congestion through real-time analysis.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/sonozaki7/p2.js",
				},
				{
					icon: faExternalLinkAlt,
					link: "https://www.youtube.com/watch?v=7kamqXBmMlE",
				},
			]
		},
	],
}

export const university = {
	title: "University of British Columbia - Computer Engineering",
	cards: [
		{
			title: "Academic Achievement",
			description: "Computer Engineering graduate from UBC with strong focus on software development, systems integration, and AI/ML applications. Maintained excellent academic standing while leading multiple technical projects and extracurricular initiatives.",
			icons: null,
		},
		{
			title: "SmartCity Design Team - Backend Lead",
			description: "Led backend development for the SmartCity design team at UBC. Coordinated with frontend developers and managed database architecture for campus-wide smart solutions including the UBC Safewalk App.",
			icons: null,
		},
		{
			title: "Sports Programming Club Co-Founder",
			description: "Co-founded the Sports Programming Club at UBC. Led team to 10th place in ICPC Northwestern Regionals (above Stanford and UC Berkeley). Taught Java and C++ to 20+ students weekly, organizing weekly practice sessions and competitions.",
			icons: null,
		},
		{
			title: "UBC Safewalk App",
			description: "Built full-scale iOS and Android app for UBC AMS using React and Python Flask, deployed on Azure. Enhances campus safety for students with real-time tracking and emergency features.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/UBCSmartCity/UBC-Safewalk-App",
				},
				{
					icon: faExternalLinkAlt,
					link: "https://ubcsmartcity.com/2024/02/05/ubc-safewalk/",
				},
			],
		},
		{
			title: "Smart Parking App",
			description: "Developed Flutter app with camera and hardware integration to measure real-time parking space usage citywide using computer vision. Created for CPEN 391 course project with focus on IoT and computer vision technologies.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/CPEN391G17/parking_app",
				},
			],
		},
		{
			title: "Bird's Eye App - UBC NWHacks",
			description: "Created gamified app for visiting First Nations lands, acknowledging their history and promoting cultural awareness through interactive experiences. Developed during UBC NWHacks hackathon with focus on Indigenous reconciliation.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/UBC-NW-Hacks-Wild-Cards/FNMap",
				},
			],
		},
	],
}

export const extraCurricular = {
	title: "Extra-Curricular & Leadership",
	cards: [
		{
			title: "Teachers Without Borders Co-Founder",
			description: "Co-founded initiative teaching English to children in orphanages in northern Thailand. Organized donation drives providing over 60kg of supplies to 500+ children across various orphanages.",
			icons: null,
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Based primarily in Japan and Thailand. Coffee chat welcome! Feel free to reach out directly by email or schedule a meeting. Always open to discussing new opportunities and collaborations.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:sou.nozaki@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "https://calendly.com/sonozaki/30m",
			isPrimary: false,
		},
		{
			title: "Build in Public",
			link: "https://x.com/ghtght_",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "So Nozaki | Founder & AI Consultant | Full-Stack Developer",
	description: "Founder & Consultant at Zoltraak LLC. Computer Engineering graduate from UBC. AI Trainer, Full-Stack Developer specializing in React, Python, and machine learning solutions.",
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
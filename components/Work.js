import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Experience = ({ title, cards }) => {
	return (
		<div id="experience" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<ExperienceCard
							key={index}
							title={value.title}
							company={value.company}
							period={value.period}
							location={value.location}
							description={value.description}
							logo={value.logo} />
					))}
				</div>
			</div>
		</div>
	);
}

export const University = ({ title, cards }) => {
	return (
		<div id="university" className="bg-primary py-5 px-5">
			<div className="container">
				<div className="d-flex justify-content-center mb-4">
					<img src="/images/ubc-logo-2021-ece-as-narrow-white-rgb300.png" alt="UBC Logo" style={{ width: "300px", height: "auto", maxWidth: "100%" }} />
				</div>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
			</div>
		</div>
	);
}

export const ExtraActivities = ({ title, cards }) => {
	return (
		<div id="leadership" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
			</div>
		</div>
	);
}

export const ExperienceCard = ({ title, company, period, location, description, logo }) => {
	// Split description into sentences and format as bullet points
	const formatDescription = (desc) => {
		if (!desc) return [];

		// Split by periods, but be careful with abbreviations
		const sentences = desc.split(/\.(?!\s*[a-z]|com|org|net|edu|gov|mil|Ltd|LLC|Inc|Corp|AI|UK|US|USD|CA|etc)/);

		return sentences
			.map(sentence => sentence.trim())
			.filter(sentence => sentence.length > 0)
			.map(sentence => sentence.endsWith('.') ? sentence : sentence + '.');
	};

	const formattedPoints = formatDescription(description);

	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "22rem" }}>
			<div className="d-flex align-items-center mb-2">
				{logo && (
					<img src={logo} alt={`${company} logo`} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
				)}
				<div>
					<h5 className="text-primary mb-1">{title}</h5>
					<h6 className="text-secondary mb-0">{company}</h6>
				</div>
			</div>
			<p className="text-muted small mb-2">{period} • {location}</p>
			<div className="text-dark">
				{formattedPoints.length > 1 ? (
					<ul className="mb-0" style={{ paddingLeft: '1.2rem' }}>
						{formattedPoints.map((point, index) => (
							<li key={index} className="mb-1" style={{ lineHeight: '1.4' }}>
								{point}
							</li>
						))}
					</ul>
				) : (
					<p className="mb-0">{description}</p>
				)}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons, logo }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<div className="d-flex align-items-center mb-2">
				{logo && (
					<img src={logo} alt={`${title} logo`} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
				)}
				<h4 className="text-primary">{title}</h4>
			</div>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}
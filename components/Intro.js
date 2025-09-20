import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<p>{description}</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
									</Link>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image}
							alt="profile of hashirshoaeb"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-8">
						<h1 className="text-primary fw-bold mb-4">{title}</h1>
						<div className="about-content">
							{description.map((value, index) => (
								<div key={index} className="about-paragraph">
									{value}
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-4 text-center">
						<div className="about-visual">
							<div className="light-background">
								<div className="connection-circle"></div>
								<div className="connection-line line-1"></div>
								<div className="connection-line line-2"></div>
								<div className="connection-line line-3"></div>
							</div>
							<div className="floating-card card-1">
								<div className="card-icon">🚀</div>
								<h5>Building Tomorrow</h5>
								<p>AI & Innovation</p>
							</div>
							<div className="floating-card card-2">
								<div className="card-icon">🌏</div>
								<h5>Global Impact</h5>
								<p>Japan ↔ Thailand</p>
							</div>
							<div className="floating-card card-3">
								<div className="card-icon">💡</div>
								<h5>Problem Solver</h5>
								<p>Tech for Good</p>
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.about-content {
						font-size: 1.1rem;
						line-height: 1.8;
					}
					.about-paragraph {
						margin-bottom: 1.5rem;
						position: relative;
						padding-left: 2rem;
					}
					.about-paragraph::before {
						content: "→";
						position: absolute;
						left: 0.5rem;
						color: #007bff;
						font-weight: bold;
						font-size: 1.2rem;
					}
					.about-visual {
						position: relative;
						width: 400px;
						height: 400px;
						margin: 0 auto;
						padding: 2rem;
					}
					.light-background {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 300px;
						height: 300px;
						pointer-events: none;
						z-index: 1;
					}
					.connection-circle {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 300px;
						height: 300px;
						border: 2px solid rgba(0, 123, 255, 0.08);
						border-radius: 50%;
						animation: rotate 25s linear infinite;
					}
					.connection-line {
						position: absolute;
						background: linear-gradient(45deg, rgba(0, 123, 255, 0.15), rgba(0, 123, 255, 0.03));
						height: 2px;
						transform-origin: left center;
						top: 50%;
						left: 50%;
						width: 150px;
						transform: translate(-50%, -50%);
					}
					.line-1 {
						transform: translate(-50%, -50%) rotate(0deg);
						animation: pulse 4s ease-in-out infinite;
					}
					.line-2 {
						transform: translate(-50%, -50%) rotate(120deg);
						animation: pulse 4s ease-in-out infinite 1.3s;
					}
					.line-3 {
						transform: translate(-50%, -50%) rotate(240deg);
						animation: pulse 4s ease-in-out infinite 2.6s;
					}
					.floating-card {
						background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
						border-radius: 15px;
						padding: 1.5rem;
						box-shadow: 0 8px 25px rgba(0,0,0,0.1);
						text-align: center;
						transition: all 0.3s ease;
						width: 160px;
						height: 120px;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						z-index: 10;
						animation: orbital-rotation 20s linear infinite;
						--hover-lift: 0px;
						--hover-scale: 1;
					}
					.floating-card:hover {
						--hover-lift: -8px;
						--hover-scale: 1.05;
						box-shadow: 0 12px 35px rgba(0,0,0,0.15);
					}
					.floating-card.card-1 {
						animation-delay: 0s;
						--orbit-radius: 120px;
						--orbit-angle: 0deg;
					}
					.floating-card.card-2 {
						animation-delay: -6.67s;
						--orbit-radius: 120px;
						--orbit-angle: 120deg;
					}
					.floating-card.card-3 {
						animation-delay: -13.33s;
						--orbit-radius: 120px;
						--orbit-angle: 240deg;
					}
					.card-icon {
						font-size: 2.5rem;
						margin-bottom: 0.8rem;
					}
					.floating-card h5 {
						font-size: 1rem;
						margin-bottom: 0.4rem;
						color: #495057;
						font-weight: 600;
					}
					.floating-card p {
						font-size: 0.85rem;
						margin-bottom: 0;
						color: #6c757d;
					}
					@keyframes orbital-rotation {
						0% {
							transform: translate(-50%, -50%) rotate(var(--orbit-angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--orbit-angle))) translateY(var(--hover-lift)) scale(var(--hover-scale));
						}
						100% {
							transform: translate(-50%, -50%) rotate(calc(var(--orbit-angle) + 360deg)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--orbit-angle) - 360deg)) translateY(var(--hover-lift)) scale(var(--hover-scale));
						}
					}
					@keyframes float {
						0%, 100% { transform: translateY(0px); }
						50% { transform: translateY(-10px); }
					}
					@keyframes pulse {
						0%, 100% { opacity: 0.2; }
						50% { opacity: 0.6; }
					}
					@keyframes rotate {
						from { transform: translate(-50%, -50%) rotate(0deg); }
						to { transform: translate(-50%, -50%) rotate(360deg); }
					}
					@media (max-width: 768px) {
						.about-visual {
							width: 320px;
							height: 320px;
							padding: 1rem;
						}
						.light-background {
							width: 250px;
							height: 250px;
						}
						.connection-circle {
							width: 250px;
							height: 250px;
						}
						.connection-line {
							width: 125px;
						}
						.floating-card {
							width: 140px;
							height: 100px;
							padding: 1rem;
						}
						.floating-card.card-1,
						.floating-card.card-2,
						.floating-card.card-3 {
							--orbit-radius: 100px;
						}
					}
					@media (max-width: 576px) {
						.about-visual {
							width: 280px;
							height: 280px;
						}
						.light-background {
							width: 200px;
							height: 200px;
						}
						.connection-circle {
							width: 200px;
							height: 200px;
						}
						.connection-line {
							width: 100px;
						}
						.floating-card {
							width: 120px;
							height: 90px;
							padding: 1rem;
						}
						.floating-card.card-1,
						.floating-card.card-2,
						.floating-card.card-3 {
							--orbit-radius: 80px;
						}
						.card-icon {
							font-size: 2rem;
						}
						.floating-card h5 {
							font-size: 0.9rem;
						}
						.floating-card p {
							font-size: 0.8rem;
						}
					}
				`}</style>
			</div>
		</div>
	);
}
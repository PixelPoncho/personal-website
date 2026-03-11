import React from 'react';

export default function LeftPortfolioCard({
	title = 'poncho.dev',
	subtitle = 'Personal portfolio site to highlight',
	tech = ['React.js', 'SCSS', 'Firebase', 'Git', 'Figma'],
	projectLink = '#',
	githubLink = '#',
}) {
	const techItems = [];
	tech.forEach((t, i) => {
		techItems.push(
			<li key={`tech-${i}`} className="portfolio__tech-item">
				{typeof t === 'string' ? <a href="#">{t}</a> : t}
			</li>
		);
		if (i < tech.length - 1) techItems.push(<li key={`sep-${i}`} className="portfolio__tech-sep">|</li>);
	});

	const style = {
		'--left-bg': leftBg,
		'--right-bg': rightBg,
		'--left-w': `${leftWidth}px`,
		'--left-h': `${leftHeight}px`
	};

	return (
		<section className={`portfolio ${className}`} style={style}>
			<div className="portfolio__inner">
				<div className="portfolio__left">{children}</div>

				<div className="portfolio__right">
					<div className="portfolio__content">
						<h3 className="portfolio__title">{title}</h3>
						<p className="portfolio__subtitle">{subtitle}</p>

						<ul className="portfolio__tech">{techItems}</ul>
					</div>

					<div className="portfolio__icons">
						<a
							className="portfolio__icon-btn"
							href={projectLink}
							aria-label="Open project"
							target="_blank"
							rel="noreferrer"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14 3H21V10" stroke="#F0C654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M10 14L21 3" stroke="#F0C654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M21 21H3V3H10" stroke="#F0C654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</a>

						<a
							className="portfolio__icon-btn"
							href={githubLink}
							aria-label="View source on GitHub"
							target="_blank"
							rel="noreferrer"
						>
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.15 7.69 10.63.56.1.76-.24.76-.53 0-.26-.01-.95-.01-1.86-3.12.68-3.78-1.5-3.78-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.72 2.65 1.22 3.3.93.1-.72.4-1.22.72-1.5-2.49-.28-5.11-1.25-5.11-5.56 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.15a10.8 10.8 0 012.84-.38c.96 0 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.32-2.63 5.28-5.13 5.56.41.36.77 1.07.77 2.15 0 1.55-.01 2.8-.01 3.18 0 .29.2.64.77.53C19.03 20.9 22.25 16.71 22.25 11.75 22.25 5.48 17.27.5 12 .5z" fill="#F0C654"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

import React from 'react';
import classes from './SideBar.module.css';
import Container from '../UI/Container';

const SideBar = ({ isClicked, pages, SiteName }) => {
	return (
		<nav className={`${classes.navbar} ${isClicked ? classes.active : ''}`}>
			<Container className={classes.container}>
				<div className={classes.logo}>{SiteName}</div>
				<ul className={classes.menu}>
					{pages.map((page) => {
						return (
							<li className={`${classes['menu-list']}`}>
								<a href={page.link}>{page.name}</a>
							</li>
						);
					})}
				</ul>
			</Container>
		</nav>
	);
};

export default SideBar;

import React, { useState } from 'react';
import classes from './Navbar.module.css';
import Container from '../UI/Container';
import { pages, SiteName } from '../../Data';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import SideBar from '../SideBar';

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<IconContext.Provider value={{ size: '30px' }}>
			<nav className={classes.navbar}>
				<Container className={classes.container}>
					<div className={classes.logo}>{SiteName}</div>
					<div
						className={classes.toggler}
						onClick={() => {
							setIsClicked(!isClicked);
						}}
					>
						{isClicked ? <FaTimes /> : <BiMenuAltRight />}
					</div>
					<ul className={classes.menu}>
						{pages.map((page) => {
							return (
								<li className={`${classes['menu-list']}`} key={page.id}>
									<a href={page.link}>{page.name}</a>
								</li>
							);
						})}
					</ul>
				</Container>
			</nav>
			<SideBar isClicked={isClicked} pages={pages} SiteName={SiteName} />
		</IconContext.Provider>
	);
};

export default Navbar;

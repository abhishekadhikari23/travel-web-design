import Menu from '../menu';
import s from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={s.main}>
			<div className={s.normal}>
				<a href="#adsd">Home</a>
				<a href="#adsd">Tours</a>
				<a href="#adsd">Contact Us</a>
				<a href="#adsd">About Us</a>
			</div>
			<div className={s.mobile}>
				<button>
					<Menu />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

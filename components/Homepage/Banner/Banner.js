import s from './Banner.module.scss';
import Image from 'next/image';
import Chevron_left from '../../chevron_left';
import Navbar from '../../Navbar/Navbar';

const BookingBar = () => {
	return (
		<div className={s.bookingBar}>
			<div className={s.options}>
				<img src="/images/flight.png" alt="Travellers" />
				<span>1 Traveller(s)</span>
				<button>
					<Chevron_left />
				</button>
			</div>
			<div className={s.options}>
				<img src="/images/passport.png" alt="Stay Duration" />
				<span>3 Days / 2 Nights</span>
				<button>
					<Chevron_left />
				</button>
			</div>
			<button>Book Now</button>
			<div className={s.upperText}>Get Ready To Become Fakir</div>
		</div>
	);
};

const Banner = () => {
	return (
		<div className={s.main}>
			<div className={s.filter} />
			<div className={s.container}>
				<h1>VISIT ASAKUSA</h1>
				<div className={s.subHeading}>Can be very expensive...</div>
				<Navbar />
			</div>
			<BookingBar />
		</div>
	);
};

export default Banner;

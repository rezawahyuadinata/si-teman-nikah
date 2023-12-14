import Header from "../pages/header";
import Contact from "../pages/contact";
import Testimonial from "../pages/testimonial";
import Service from "../pages/service";

export default function Body() {
	return (
		<div>
			<Header />
			<Service />
			<Testimonial />
			<Contact />
		</div>
	);
}

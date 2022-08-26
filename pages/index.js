import Carousel from "../components/Carousel";
import homeStyle from "../styles/Home.module.css";

function Home() {
	const imgArray = [
		"/images/slider0.jpg",
		"/images/slider1.jpg",
		"/images/slider2.jpg",
	];
	return (
		<div>
			<div className={homeStyle.homepage}>
				<Carousel imgs={imgArray} mode="auto" />
				<p id={homeStyle.homepage__sentence}>
					Décorez votre intérieur en faisant l’acquisition d’une œuvre
					artistique originale.
				</p>
				<section className={homeStyle.homepage__partenaire}>
					<p>Où retrouver nos créations</p>
					<a href="https://www.colibri-spirit.com/" target="__blank">
						<img src="images/colibri.svg" alt="logo"></img>
					</a>
					<a href="https://popupstory.fr/" target="__blank">
						<img src="images/popup.svg" alt="logo"></img>
					</a>
				</section>
			</div>
		</div>
	);
}

export default Home;

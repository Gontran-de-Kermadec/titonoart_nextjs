import Carousel from "../components/Carousel";
import homeStyle from "../styles/Home.module.css";

function Home() {
	const imgArray = [
		"/images/slider0.jpg",
		"/images/slider1.jpg",
		"/images/slider2.jpg",
		"/images/slider3.jpg",
	];
	return (
		<div>
			<div className={homeStyle.homepage}>
				<h1>Art & déco sur tonneaux - Guadeloupe</h1>
				<Carousel imgs={imgArray} mode="auto" />
				<p id={homeStyle.homepage__sentence}>
					Décorez votre intérieur en faisant l’acquisition d’une œuvre
					artistique originale. D'ambiance ou fonctionnel, votre tonneau donne vie à votre intérieur.
					<br />Titonoart dévoile ses collections empreinte de chaleur, de couleurs intenses et surtout de vous !
					<br />Entre tradition et insolite, l'artiste Robin Lepoutre s'imprègne de son île natale.
				</p>
				<section className={homeStyle.avent_container}>
					<p>Artiste invité à Deshaies en mai 2025</p>
					<a href="https://titonoart.com/actualites/">
						<img src="images/marion_b.jpg" alt="Artiste peintre"></img>
					</a>
					{/* <p>Réalisation du Packaging du Calendrier de l'Avent des rhums 2023</p>
				<a href="https://www.laroutedesrhums.com/fr/tous-nos-rhums/1185-calendrier-de-l-avent-du-rhum-la-route-des-rhums-3770029126018.html" target="__blank">
						<img src="images/robin_peinture.jpg" alt="Tableau acrylique"></img>
					</a> */}

				</section>
				<section className={homeStyle.homepage__partenaire}>
					<p>Où retrouver nos créations</p>
					<a href="https://www.teck-it.net/" target="__blank">
						<img src="images/tek-it.png" alt="logo"></img>
					</a>
					<a href="https://www.facebook.com/PopupStoryCaraibes/?locale=fr_FR" target="__blank">
						<img src="images/popup.svg" alt="logo"></img>
					</a>
				</section>
			</div>
		</div>
	);
}

export default Home;

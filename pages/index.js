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
					<div>
						<p>Artiste invité à Deshaies en novembre 2025</p>
						<a href="https://titonoart.com/actualites/">
							<img src="images/a_sodade.jpg" alt="Artiste peintre"></img>
						</a>
					</div>
					<div className={homeStyle.avent_container_catalogue}>
						<a href="files/catalogue_arcouet_2025.pdf" download="Catalogue Résidence artistique aout 2025 Sébastien Arcouet.pdf">
							{/* <p>JE TÉLÉCHARGE LE CATALOGUE RÉSIDENCE ARTISTIQUE AOUT 2025 SÉBASTIEN ARCOUET A DESHAIES</p> */}
							<p>Je télécharge le catalogue résidence artistique août 2025 Sébastien Arcouet à Deshaies</p><br />
							<img src="images/catalogue_photo.jpg" alt="Artiste peintre"></img>
						</a>
					</div>
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

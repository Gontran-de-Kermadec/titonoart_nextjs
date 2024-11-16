//import Link from "next/link";
import actualiteStyle from "../styles/Actualites.module.css";
import CreationCard from "../components/CreationCard";
import myLoader from "../components/utils/ImgLoader";
import Image from "next/image";

function Actualites() {

	const vernissageArray = [
		"/images/vernissage/vernissage.jpg",
		"/images/vernissage/vernissage1.jpg",
		"/images/vernissage/vernissage2.jpg",
		"/images/vernissage/vernissage3.jpg",
		"/images/vernissage/vernissage4.jpg",
		"/images/vernissage/vernissage5.jpg",
	];
	return (
		<div>
			<section className={actualiteStyle.actualite}>
				{/* <p>Évènements passés</p> */}
				{/* <div className={actualiteStyle.event_one}>
					<p>Vernissage de l’œuvre originale du Calendrier de l'Avent - Novembre 2023</p>
					<a href="https://www.facebook.com/titonoart" target="__blank">Voir plus sur Facebook</a>
				</div>
				<div className={actualiteStyle.photos_expo_container}>
					<CreationCard
						img="/images/vernissage/vernissage.jpg"
						imgArr={vernissageArray}
					/>
					<CreationCard
						img="/images/vernissage/vernissage1.jpg"
						imgArr={vernissageArray}
					/>
					<CreationCard
						img="/images/vernissage/vernissage2.jpg"
						imgArr={vernissageArray}
					/>
					<CreationCard
						img="/images/vernissage/vernissage3.jpg"
						imgArr={vernissageArray}
					/>
					<CreationCard
						img="/images/vernissage/vernissage4.jpg"
						imgArr={vernissageArray}
					/>
					<CreationCard
						img="/images/vernissage/vernissage5.jpg"
						imgArr={vernissageArray}
					/>
				</div> */}
				<div className={actualiteStyle.event_one}>
					<h2>TitonoArt : Lancement d’une Résidence Artistique Unique avec Nathanaël Koffi à Deshaies</h2>
					<div className={actualiteStyle.koffi_event}>
						<p>
							Nous avons l’immense plaisir d’annoncer le lancement de notre première résidence artistique à Deshaies, en partenariat avec Air Caraïbes et la Ville de Deshaies. Ce projet marque le début d'une nouvelle dimension pour TitonoArt, avec l’ambition de faire de notre ville un lieu de rencontre artistique, vibrant et inspirant, en plein cœur de la Guadeloupe.
						</p>
						<div className={actualiteStyle.koffi_event_img}>
							<Image
								loader={myLoader}
								src="/images/affiche_koffi.png"
								width={450}
								height={600}
								className={actualiteStyle.affiche_koffi}
								alt="affiche evenement residence artistique"
							/>
						</div>
						<b><p className={actualiteStyle.koffi_event_bold}>Inspiré par Deshaies</p></b>
						<p>Pour cette première résidence, nous accueillons l’artiste parisien Nathanaël Koffi, qui séjournera à Deshaies du 16 au 28 novembre 2024. Plongé dans la beauté et l’authenticité de la ville, Nathanaël a pour mission de capter l’essence de Deshaies et de la transposer dans une œuvre unique, inspirée par ses couleurs, ses paysages, et son âme. Ce projet s’inscrit dans notre vision d’établir Deshaies comme le tout premier “port artistique” au monde, un lieu où l’art rencontre la culture locale pour rayonner bien au-delà de nos frontières.
						</p>
						<b><p className={actualiteStyle.koffi_event_bold}>Un Vernissage au Jardin Botanique</p></b>
						<p>Nous vous invitons à célébrer cette résidence avec nous lors d’un vernissage spécial le 23 novembre, de 17h à 20h, au Jardin Botanique de Deshaies. Cette soirée inédite sera l’occasion de découvrir en avant-première l'œuvre de Nathanaël Koffi et de partager un moment de convivialité avec d’autres passionnés d’art, dans une ambiance musicale et chaleureuse. En exclusivité, un mini-tonneau signé par l’artiste sera mis en jeu lors d’un tirage au sort, offrant aux invités la chance de repartir avec une pièce unique.
						</p>
						<b><p className={actualiteStyle.koffi_event_bold}>Nos Partenaires et le Soutien de la Communauté</p></b>
						<p>Ce projet est rendu possible grâce au soutien de Air Caraïbes et de la Ville de Deshaies, qui partagent notre vision de faire de Deshaies une destination artistique d’exception. Avec la participation de nombreux acteurs locaux, chaque résidence est conçue pour faire découvrir notre culture et notre patrimoine aux artistes invités.
						</p>
						<b><p className={actualiteStyle.koffi_event_bold}>L’Engagement de TitonoArt</p></b>
						<p>TitonoArt s’engage à promouvoir l’art contemporain en Guadeloupe et à offrir aux visiteurs une expérience culturelle unique. Trois résidences annuelles sont prévues, chacune accueillant un artiste talentueux qui explorera Deshaies sous un nouvel angle, avec des créations allant des toiles boisées aux tonneaux d’art.
						</p>
					</div>
				</div>
			</section>
			<section>
				{/* <p>Évènements à venir</p> */}
				<div className={actualiteStyle.medias__title}>
					<p>Medias</p>

				</div>
				<div className={actualiteStyle.medias}>
					<div>
						<a href="https://la1ere.francetvinfo.fr/guadeloupe/programme-video/la1ere_guadeloupe_i-ja-le/diffusion/5768295-ca-bouge-a-deshaies.html" target="__blank">
							<Image
								loader={myLoader}
								src="/images/guadeloupe_premiere.png"
								width={193}
								height={60}
								className={actualiteStyle.medias__guadeloupe}
								alt="logo guadeloupe premiere"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.guadeloupe.franceantilles.fr/actualite/culture/des-creations-graphiques-sur-fut-de-chene-976170.php" target="__blank">
							<Image
								loader={myLoader}
								src="/images/france_antilles.png"
								width={135}
								height={130}
								className={actualiteStyle.medias__france}
								alt="logo france antilles"
							/>
						</a>
					</div>
					<div>
						<a href="https://rci.fm/deuxiles/node/4952886" target="__blank">
							<Image
								loader={myLoader}
								src="/images/rci.png"
								width={207}
								height={102}
								// width={256}
								// height={125}
								className={actualiteStyle.medias__rci}
								alt="logo rci"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.aircaraibes.com/" target="__blank">
							<Image
								loader={myLoader}
								src="/images/air_caraibes_logo.jpg"
								width={150}
								height={150}
								// className={actualiteStyle.medias__rci}
								alt="logo air caraibes"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.villededeshaies.fr/" target="__blank">
							<Image
								loader={myLoader}
								src="/images/deshaies.png"
								width={150}
								height={150}
								// className={actualiteStyle.medias__rci}
								alt="logo ville de deshaies"
							/>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Actualites;

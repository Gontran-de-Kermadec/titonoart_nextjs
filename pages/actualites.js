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
					<h2>CONVOYEUR DE COULEURS
					</h2>
					<div className={actualiteStyle.kimg}>
						<Image
							loader={myLoader}
							src="/images/convoyeur_logo.jpg"
							width={225}
							height={300}
							className={actualiteStyle.affiche_koffi}
							alt="affiche evenement residence artistique"
						/>
					</div>
					<div className={actualiteStyle.koffi_event}>
						<b><p className={actualiteStyle.koffi_event_bold}>Résidences artistiques immersives à Deshaies</p></b>
						<p>Nous avons le grand plaisir d’annoncer la quatrième édition des résidences artistiques immersives à Deshaies, un projet qui continue de grandir et de tisser des liens entre artistes, territoire et habitants. Intitulé “Convoyeur de Couleurs”, ce programme vise à faire de Deshaies bien plus qu’un simple lieu d’accueil : un véritable port artistique ouvert sur le monde.</p>
						<br />
						<b><p className={actualiteStyle.koffi_event_bold}>Avec Convoyeur de Couleurs</p></b>
						<p>
							Notre objectif reste inchangé : <b>faire de Deshaies un lieu incontournable pour la création artistique</b>. Trois résidences chaque année, trois artistes, trois moments forts pour nous, mais aussi pour tous ceux qui croient en l’art comme moyen de rencontre, de partage et d’émotion.
						</p>
						<br />
						<div className={actualiteStyle.koffi_event_img}>
							<Image
								loader={myLoader}
								src="/images/affiche_axelle.png"
								width={450}
								height={600}
								className={actualiteStyle.affiche_koffi}
								alt="affiche evenement residence artistique"
							/>
						</div>
						<p>Pourquoi ce nom ? Parce que chaque artiste invité devient un “convoyeur” : il vient, s’imprègne, crée… et repart avec une œuvre inspirée par la lumière, les couleurs et l’âme de Deshaies. Ces œuvres, véritables ambassades, porteront l’esprit de notre ville bien au-delà de ses frontières.</p>
						<br />
						<p>Notre ambition ? Faire de Deshaies la commune préférée des artistes, un lieu de résidence et de création vibrant, authentique, où l’art dialogue avec la culture locale et la beauté du territoire Nord Basse Terre.
						</p>
						<b><p className={actualiteStyle.koffi_event_bold}>Artiste invité : Axelle Sodade</p></b>
						<p>Du 6 au 25 novembre 2025</p><br />
						<p>Pour cette nouvelle édition, nous avons le plaisir d’accueillir <b>Axelle Sodade</b>, artiste peintre originaire de Perpignan, aux racines portugaises profondes. Formée à l’ECV de Bordeaux puis à Kingston University à Londres, elle s’est forgée un univers singulier où la couleur, la lumière et l’émotion s’entrelacent pour donner vie à des compositions vibrantes et poétiques.
						</p>
						<br />
						<p>Entrer dans une œuvre de Sodade, c’est plonger dans un monde à la fois familier et fantastique, où chaque ligne, chaque teinte, chaque symbole semble murmurer une histoire. Ses créations mêlent <b>souvenirs d’enfance, visions urbaines et architectures oniriques</b>, formant des cartographies sensibles entre réel et imaginaire.</p>
						<br />
						<p>Ce qui nous a immédiatement séduits chez elle, c’est sa façon de mettre une âme dans chacune de ses compositions. On ressent sa sensibilité, sa palette vive et sa poésie graphique, mais aussi sa maîtrise des monochromes tranchants et lumineux qui révèlent toute la force de son trait. Même les noms de ses œuvres racontent déjà une histoire, comme une invitation à pénétrer dans son univers.
						</p>
						<br />
						<p>À Deshaies, Axelle viendra explorer les paysages, la lumière et les rencontres humaines pour créer une œuvre nourrie par le territoire et ses habitants dans une démarche de partage, d’écoute et d’échange fidèle à l’esprit de Convoyeur de Couleurs.
						</p>

						<b><p className={actualiteStyle.koffi_event_bold}>Vernissage au Jardin Botanique
						</p></b>
						<p>    Samedi 22 novembre 2025<br />
							🕠 De 17h30 à 21h<br />
							📍 Jardin Botanique de Deshaies
						</p><br />
						<p>Nous vous invitons à découvrir le travail d’Axelle Sodade lors d’un vernissage convivial dans un cadre d’exception. Venez rencontrer l’artiste, échanger autour de sa démarche et célébrer ensemble Convoyeur de Couleurs, où l’art, la nature et la sensibilité se rencontrent au cœur de Deshaies.</p>

						<b><p className={actualiteStyle.koffi_event_bold}>Nos partenaires
						</p></b>
						<p>Ce projet est rendu possible grâce au soutien de :
							La Région Guadeloupe, la CANBT, la Ville de Deshaies, Air Caraïbes, et le Jardin Botanique de Deshaies.
						</p><br />
						<p>Un grand merci à eux de croire en ce rêve collectif. Nous adressons également nos remerciements les plus sincères à l’ensemble des acteurs économiques de Deshaies, commerçants, restaurateurs, hébergeurs et partenaires locaux, qui soutiennent cette initiative avec enthousiasme.</p>
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

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
						<p>
							Avec Convoyeur de Couleurs, notre objectif est simple : faire de Deshaies un lieu incontournable pour la création artistique. Trois résidences chaque année, trois artistes, trois moments forts pour nous, mais aussi pour tous ceux qui croient en l’art comme moyen de rapprochement et d’échange.
						</p>
						<b><p className={actualiteStyle.koffi_event_bold}>Résidences artistiques immersives à Deshaies</p></b>
						<p>Nous avons le grand plaisir d’annoncer la seconde édition des  résidences artistiques immersives à Deshaies, un projet qui nous tient profondément à cœur. Intitulé "Convoyeur de Couleurs", ce programme vise à faire de Deshaies bien plus qu’un simple lieu d’accueil : un port artistique.
						</p>
						<div className={actualiteStyle.koffi_event_img}>
							<Image
								loader={myLoader}
								src="/images/affiche_piment.png"
								width={450}
								height={600}
								className={actualiteStyle.affiche_koffi}
								alt="affiche evenement residence artistique"
							/>
						</div>
						<p>Pourquoi ce nom ? Parce que chaque artiste invité devient un “convoyeur” : il vient, s’imprègne, crée… et repart avec une œuvre inspirée par la lumière, les couleurs et l’âme de Deshaies. Ces œuvres, véritables ambassades, porteront l’esprit de notre ville bien au-delà de ses frontières.</p>
						<p>Notre ambition ? Faire de Deshaies la commune préférée des artistes, un lieu de résidence et de création, vibrant, authentique, où l’art rencontre la culture locale.</p>

						<b><p className={actualiteStyle.koffi_event_bold}>Artiste invitée : Piment Martin</p></b>
						<p>Du 13 au 26 mai 2024</p><br />
						<p>Pour ce premier séjour artistique 2025, c’est Piment Martin qui ouvre le bal.
							Derrière ce nom, il y a Marion Bègue, une artiste réunionnaise pleine de sensibilité et de force. Elle travaille avec des lignes, des courbes, de la couleur. Beaucoup de couleur. Elle raconte les femmes, les racines, le vivant. Son style est solaire, son univers est riche, généreux et vibrant comme Deshaies.
						</p>
						<br />
						<p>Elle a accepté de venir passer deux semaines chez nous et surtout de créer une œuvre unique, ici, dans notre atelier.
						</p>
						<b><p className={actualiteStyle.koffi_event_bold}>Vernissage au Jardin Botanique
						</p></b>
						<p>🗓 Samedi 24 mai 2024<br />
							🕠 De 17h30 à 21h<br />
							📍 Jardin Botanique de Deshaies
						</p><br />
						<p>Nous vous invitons à découvrir le travail de Piment Martin lors d’un vernissage chaleureux et ouvert à tous, dans un cadre exceptionnel. Venez partager ce moment avec nous, découvrir ses œuvres, échanger avec l’artiste et profiter d’une ambiance conviviale. Un mini-tonneau signé par l’artiste sera mis en jeu lors d’un tirage au sort, exclusivement pour les invités présents.</p>

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

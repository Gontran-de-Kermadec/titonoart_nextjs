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
				<div className={actualiteStyle.event_one}>
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
				</div>
			</section>
		</div>
	);
}

export default Actualites;

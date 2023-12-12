//import Link from "next/link";
import actualiteStyle from "../styles/Actualites.module.css";
import CreationCard from "../components/CreationCard";


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
            </section>
        </div>
	);
}

export default Actualites;

import PrevNextNav from "../../components/PrevNextNav";
import Prev from "../../components/utils/Prev";
// import Next from "../../components/utils/Next";
import CreationCard from "../../components/CreationCard";

import creationStyle from "../../styles/Creation.module.css";

const Art = () => {
	const navigationInfos = {
		direction: "prev",
		route: "/creation/deco",
		// route: ["/creation/bar"/creation/deco"],
		btnName: "Déco",
		devis: true,
	};
	const sereniteArray = [
		"/images/upcycling/serenite/serenite.jpg",
		"/images/upcycling/serenite/serenite1.jpg",
		"/images/upcycling/serenite/serenite2.jpg",
		"/images/upcycling/serenite/serenite3.jpg",
		"/images/upcycling/serenite/serenite4.jpg",
	];
	const naoArray = [
		"/images/upcycling/nao/nao.jpg",
		"/images/upcycling/nao/nao1.jpg",
		"/images/upcycling/nao/nao2.jpg",
		"/images/upcycling/nao/nao3.jpg",
		"/images/upcycling/nao/nao4.jpg",
	];
	const pleinarisme1Array = [
		"/images/tableau/pleinarisme1.jpg",
	];
	const pleinarisme2Array = [
		"/images/tableau/pleinarisme2.jpg",
	];
	return (
		<div className={creationStyle.art__container}>
			{/* <div className={creationStyle.creation__subsection__intro}>
				<p>
					L'upcycling, c'est une nouvelle méthode de recyclage : on crée du neuf
					avec du vieux, sans pour autant transformer ou déconstruire la matière
					première que l'on utilise. Ici nous reprenons vos fûts usagés et nous
					lui redonnons une peau neuve.
				</p>
			</div> */}
			<div className={creationStyle.creation__subsection}>
				<Prev route="/creation/deco" btnName="Déco" />
				<div className={creationStyle.creation__subsection__allCards}>
					{/* <CreationCard
						img="/images/upcycling.jpg"
						imgArr={sereniteArray}
						futTitle={"Serenite"}
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/nao.jpg"
						imgArr={naoArray}
						futTitle="Nao"
						//futDate="Novembre 2023"
						futAvailability="Acquis"
					/> */}
					<CreationCard
						img="/images/pleinarisme1.jpg"
						imgArr={pleinarisme1Array}
						futTitle="Pleinarisme 01"
						//futDate="Novembre 2023"
						futAvailability="Disponible"
					/>
					<CreationCard
						img="/images/pleinarisme2.jpg"
						imgArr={pleinarisme2Array}
						futTitle="Pleinarisme 02"
						//futDate="Novembre 2023"
						futAvailability="Disponible"
					/>
				</div>
				<div></div>
			</div>
			<div>
				<a href="mailto:titonoart@gmail.com">
					<p className={creationStyle.creation__subsection__devis}>
						Demandez un devis
					</p>
				</a>
			</div>
			<PrevNextNav propsInfos={navigationInfos} />
		</div>
	);
};

export default Art;

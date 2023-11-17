import PrevNextNav from "../../components/PrevNextNav";
import Next from "../../components/utils/Next";
import CreationCard from "../../components/CreationCard";

import creationStyle from "../../styles/Creation.module.css";

const Art = () => {
	const navigationInfos = {
		direction: "next",
		route: "/creation/bar",
		btnName: "Bar",
		devis: true,
	};
	const voilierArray = [
		"/images/art__voilier/voilier.jpg",
		"/images/art__voilier/voilier1.jpg",
		"/images/art__voilier/voilier2.jpg",
		"/images/art__voilier/voilier3.jpg",
		"/images/art__voilier/voilier4.jpg",
	];
	const terreArray = [
		"/images/art__terre/terre.jpg",
		"/images/art__terre/terre1.jpg",
		"/images/art__terre/terre2.jpg",
		"/images/art__terre/terre3.jpg",
		"/images/art__terre/terre4.jpg",
	];
	const natureArray = [
		"/images/art__nature/nature.jpg",
		"/images/art__nature/nature1.jpg",
		"/images/art__nature/nature2.jpg",
		"/images/art__nature/nature3.jpg",
		"/images/art__nature/nature4.jpg",
	];
	const nuptialeArray = [
		"/images/art/nuptiale.jpg",
		"/images/art/nuptiale1.jpg",
		"/images/art/nuptiale2.jpg",
		"/images/art/nuptiale3.jpg",
		"/images/art/nuptiale4.jpg",
	];
	return (
		<div className={creationStyle.art__container}>
			<div className={creationStyle.creation__subsection__intro}>
				<p>
					Créations artistiques réalisées selon l'inspiration de Robin. La
					technique utilisée est la peinture acrylique. <br />
					Un certificat d'authenticité est délivré pour garantir le caractère
					unique de l’œuvre.
				</p>
			</div>
			<div className={creationStyle.creation__subsection}>
				<div></div>
				<div className={creationStyle.creation__subsection__allCards}>
					<CreationCard
						img="/images/voilier.jpg"
						imgArr={voilierArray}
						futTitle={"Nuance sur la baie"}
						futDate="Peinture acrylique - Mai 2021"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/terre.jpg"
						imgArr={terreArray}
						futTitle="Terre natale"
						futDate="Peinture acrylique - Mai 2021"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/nature.jpg"
						imgArr={natureArray}
						futTitle="Luxuriante nature"
						futDate="Peinture acrylique - Septembre 2021"
						futAvailability="Disponible"
					/>
					<CreationCard
						img="/images/nuptiale.jpg"
						imgArr={nuptialeArray}
						futTitle="Danse Nuptiale"
						futDate="Peinture acrylique - Novembre 2023"
						futAvailability="Disponible"
					/>
				</div>
				<Next route="/creation/bar" btnName="Bar" />
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

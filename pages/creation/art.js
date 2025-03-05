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
	const lettreArray = [
		"/images/art/lettre/lettre.jpg",
		"/images/art/lettre/lettre1.jpg",
		"/images/art/lettre/lettre2.jpg",
		"/images/art/lettre/lettre3.jpg",
	];
	const lamerArray = [
		"/images/art_lamer/lamer.jpg",
		"/images/art_lamer/lamer1.jpg",
		"/images/art_lamer/lamer2.jpg",
		"/images/art_lamer/lamer3.jpg",
		"/images/art_lamer/lamer4.jpg",
	];
	const guadeloupe360Array = [
		"/images/art/guadeloupe360/guadeloupe360.jpg",
		"/images/art/guadeloupe360/guadeloupe3601.jpg",
		"/images/art/guadeloupe360/guadeloupe3602.jpg",
		"/images/art/guadeloupe360/guadeloupe3603.jpg",
		"/images/art/guadeloupe360/guadeloupe3604.jpg",
		"/images/art/guadeloupe360/guadeloupe3605.jpg",
		"/images/art/guadeloupe360/guadeloupe3606.jpg",
		"/images/art/guadeloupe360/guadeloupe3607.jpg",
		"/images/art/guadeloupe360/guadeloupe3608.jpg",
		"/images/art/guadeloupe360/guadeloupe3609.jpg",
		"/images/art/guadeloupe360/guadeloupe36010.jpg",
	];
	const dbmArray = [
		"/images/art/dbm/dbm.jpg",
		"/images/art/dbm/dbm1.jpg",
		"/images/art/dbm/dbm2.jpg",
		"/images/art/dbm/dbm3.jpg",
		"/images/art/dbm/dbm4.jpg",
		"/images/art/dbm/dbm5.jpg",
		"/images/art/dbm/dbm6.jpg",
		"/images/art/dbm/dbm7.jpg",
	];
	const floraArray = [
		"/images/art/flora/flora.jpg",
		"/images/art/flora/flora1.jpg",
		"/images/art/flora/flora2.jpg",
		"/images/art/flora/flora3.jpg",
		"/images/art/flora/flora4.jpg",
		"/images/art/flora/flora5.jpg",
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
						img="/images/flora.jpg"
						imgArr={floraArray}
						futTitle={"Florabotanica"}
						futDate="Peinture acrylique - Février 2025"
						futDimension="ouverture - éclairage LED"
						futAvailability="Dispo"
					/>
					<CreationCard
						img="/images/guadeloupe360.jpg"
						imgArr={guadeloupe360Array}
						futTitle={"Guadeloupe 360°"}
						futDate="Peinture acrylique - Janvier 2025"
						futDimension="H95cm x ø72cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/dbm.jpg"
						imgArr={dbmArray}
						futTitle={"DBM"}
						futDate="Peinture acrylique - Novembre 2024"
						futDimension="H95cm x ø72cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/lettre.jpg"
						imgArr={lettreArray}
						futTitle={"Lettres capitales"}
						futDate="Peinture acrylique - Mai 2024"
						futDimension="H95cm x ø72cm"
						futAvailability="Disponible"
					/>
					<CreationCard
						img="/images/lamer.jpg"
						imgArr={lamerArray}
						futTitle={"La mer pour tous"}
						futDate="Peinture acrylique - Novembre 2023"
						futDimension="H95cm x ø72cm"
						futAvailability="Don"
					/>
					<CreationCard
						img="/images/nuptiale.jpg"
						imgArr={nuptialeArray}
						futTitle="Danse Nuptiale"
						futDate="Peinture acrylique - Novembre 2023"
						futDimension="H95cm x ø72cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/voilier.jpg"
						imgArr={voilierArray}
						futTitle={"Nuance sur la baie"}
						futDate="Peinture acrylique - Mai 2021"
						futDimension="H95cm x ø72cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/terre.jpg"
						imgArr={terreArray}
						futTitle="Terre natale"
						futDate="Peinture acrylique - Mai 2021"
						futDimension="H95cm x ø72cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/nature.jpg"
						imgArr={natureArray}
						futTitle="Luxuriante nature"
						futDate="Peinture acrylique - Septembre 2021"
						futDimension="H95cm x ø72cm"
						futAvailability="Acquis"
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

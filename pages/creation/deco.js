import PrevNextNav from "../../components/PrevNextNav";
import Prev from "../../components/utils/Prev";
import Next from "../../components/utils/Next";
import CreationCard from "../../components/CreationCard";

import creationStyle from "../../styles/Creation.module.css";

const Deco = () => {
	const navigationInfos = {
		direction: "both",
		route: ["/creation/bar", "/creation/tableau"],
		btnName: ["Bar", "Tableau"],
		devis: true,
	};
	const papillonArray = [
		"/images/deco/papillon/papillon.jpg",
		"/images/deco/papillon/papillon1.jpg",
		"/images/deco/papillon/papillon2.jpg",
		"/images/deco/papillon/papillon3.jpg",
	];
	const lotusArray = [
		"/images/deco/lotus/lotus.jpg",
		"/images/deco/lotus/lotus1.jpg",
		"/images/deco/lotus/lotus2.jpg",
		"/images/deco/lotus/lotus3.jpg",
	];
	const pirateArray = [
		"/images/deco/pirate/pirate.jpg",
		"/images/deco/pirate/pirate1.jpg",
		"/images/deco/pirate/pirate2.jpg",
		"/images/deco/pirate/pirate3.jpg",
	];
	const rocheArray = [
		"/images/deco/roche/roche.jpg",
		"/images/deco/roche/roche1.jpg",
		"/images/deco/roche/roche2.jpg",
		"/images/deco/roche/roche3.jpg",
	];
	const tortueArray = [
		"/images/deco/tortue/tortue.jpg",
		"/images/deco/tortue/tortue1.jpg",
		"/images/deco/tortue/tortue2.jpg",
		"/images/deco/tortue/tortue3.jpg",
	];
	const voyageurArray = [
		"/images/deco/voyageur/voyageur.jpg",
		"/images/deco/voyageur/voyageur1.jpg",
		"/images/deco/voyageur/voyageur2.jpg",
		"/images/deco/voyageur/voyageur3.jpg",
	];
	const caribbeanPiratArray = [
		"/images/deco/caribbean_pirat/caribbean_pirat.jpg",
		"/images/deco/caribbean_pirat/caribbean_pirat1.jpg",
		"/images/deco/caribbean_pirat/caribbean_pirat2.jpg",
		"/images/deco/caribbean_pirat/caribbean_pirat3.jpg",
		"/images/deco/caribbean_pirat/caribbean_pirat4.jpg",
	];
	const midiArray = [
		"/images/deco/midi/midi.jpg",
		"/images/deco/midi/midi1.jpg",
		"/images/deco/midi/midi2.jpg",
		"/images/deco/midi/midi3.jpg",
		"/images/deco/midi/midi4.jpg",
	];
	return (
		<div>
			<div
				className={
					creationStyle.deco__container +
					" " +
					creationStyle.creation__subsection
				}
			>
				<Prev route="/creation/bar" btnName="Bar" />
				<div className={creationStyle.creation__subsection__allCards}>
					<CreationCard
						img="/images/midi.jpg"
						imgArr={midiArray}
						futTitle="Midi Caraïbes"
						futAvailability="Acquis"
						futDate="Plateau en contreplaqué doublé"
						futDimension="sur mesure 300 mm d'épaisseur"
					/>
					<CreationCard
						img="/images/voyageur.jpg"
						imgArr={voyageurArray}
						futTitle="L'arbre du Voyageur"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/caribbean_pirat.jpg"
						imgArr={caribbeanPiratArray}
						futTitle="Caribbean Pirat 971"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/papillon1.jpg"
						imgArr={papillonArray}
						futTitle="Papillon"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/lotus.jpg"
						imgArr={lotusArray}
						futTitle="Christaline"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/pirate.jpg"
						imgArr={pirateArray}
						futTitle="Caribbean pirate"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/roche.jpg"
						imgArr={rocheArray}
						futTitle="Roche gravée"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/tortue.jpg"
						imgArr={tortueArray}
						futTitle="Gocho-Etchea"
						futAvailability="Acquis"
					/>
				</div>
				<Next route="/creation/tableau" btnName="Tableau" />
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

export default Deco;

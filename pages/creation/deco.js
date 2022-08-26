// import papillon from "../../images/papillon1.jpg";
// import lotus from "../../images/lotus.jpg";
// import pirate from "../../images/pirate.jpg";
// import roche from "../../images/roche.jpg";
// import tortue from "../../images/tortue.jpg";
// import PrevNextNav from "../Prevnextnav";
// import CreationCard from "./CreationCard";
// import Prev from "../utils/Prev";

import PrevNextNav from "../../components/PrevNextNav";
import Prev from "../../components/utils/Prev";
import CreationCard from "../../components/CreationCard";

import creationStyle from "../../styles/Creation.module.css";

const Deco = () => {
	const navigationInfos = {
		direction: "prev",
		route: "/creation/bar",
		btnName: "Bar",
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
	return (
		<div>
			{/* <div className="deco__container creation__subsection"> */}
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

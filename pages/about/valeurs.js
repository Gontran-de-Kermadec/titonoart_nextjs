// import PrevNextNav from "../Prevnextnav";
// import Next from "../utils/Next";
// import Prev from "../utils/Prev";

import PrevNextNav from "../../components/Prevnextnav";

import Next from "../../components/utils/Next";
import Prev from "../../components/utils/Prev";
import aboutStyle from "../../styles/About.module.css";

const Valeurs = () => {
	const infos = {
		direction: "both",
		route: ["/about/support", "/about/demarche"],
		btnName: ["Notre support", "Notre éthique"],
		devis: false,
	};
	return (
		<div
			className={
				aboutStyle.about__subsection__valeur +
				" " +
				aboutStyle.about__subsection
			}
		>
			<h3>Nos valeurs :</h3>
			<div className={aboutStyle.about__subsection__flex}>
				<Prev route="/about/support" btnName="Notre support" />
				<div>
					<p>
						<span>L'HUMAIN</span>
						Toujours soucieux d’un excellent relationnel, nous favorisons les
						échanges humains et de proximité.
					</p>
					<p>
						<span>LA PASSION</span>
						Au-delà de nos horizons différents, cette activité nous réunit pour
						l’amour de l’art et de l’émotion qui s’en dégage.
					</p>
					<p>
						<span>LE PARTAGE</span>
						Nous partageons un produit original fruit de l'imaginaire de
						l’artiste ou personnalisable selon vos envies.
					</p>
					<p>
						<span>L'ENVIRONNEMENT</span>« Créer » veut aussi parfois dire «
						Recycler » car la préservation de l’environnement est essentielle.
						Notre façon de consommer peut être plus qualitative et durable.
					</p>
				</div>
				<Next route="/about/demarche" btnName="Notre éthique" />
			</div>
			<PrevNextNav propsInfos={infos} />
		</div>
	);
};

export default Valeurs;

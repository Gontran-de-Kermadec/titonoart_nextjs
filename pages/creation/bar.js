import PrevNextNav from "../../components/PrevNextNav";
import Next from "../../components/utils/Next";
import Prev from "../../components/utils/Prev";
import CreationCard from "../../components/CreationCard";

import creationStyle from "../../styles/Creation.module.css";

const Bar = () => {
	const navigationInfos = {
		direction: "both",
		route: ["/creation/art", "/creation/deco"],
		btnName: ["Art", "Déco"],
		devis: true,
	};
	const minifutArray = [
		"/images/bar/mini_fut/mini_fut.jpg",
		"/images/bar/mini_fut/mini_fut1.jpg",
		"/images/bar/mini_fut/mini_fut2.jpg",
		"/images/bar/mini_fut/mini_fut3.jpg",
		"/images/bar/mini_fut/mini_fut4.jpg",
		"/images/bar/mini_fut/mini_fut5.jpg",
		"/images/bar/mini_fut/mini_fut6.jpg",
	];
	const barArray = [
		"/images/bar/bar/bar.jpg",
		"/images/bar/bar/bar1.jpg",
		"/images/bar/bar/bar2.jpg",
		"/images/bar/bar/bar3.jpg",
	];
	const carib1Array = [
		"/images/bar/carib1/carib1.jpg",
		"/images/bar/carib1/carib2.jpg",
		"/images/bar/carib1/carib3.jpg",
		"/images/bar/carib1/carib4.jpg",
	];
	const carib2Array = [
		"/images/bar/carib2/carib1.jpg",
		"/images/bar/carib2/carib2.jpg",
		"/images/bar/carib2/carib3.jpg",
		"/images/bar/carib2/carib4.jpg",
	];
	const carib3Array = [
		"/images/bar/carib3/carib1.jpg",
		"/images/bar/carib3/carib2.jpg",
		"/images/bar/carib3/carib3.jpg",
		"/images/bar/carib3/carib4.jpg",
	];
	const carib4Array = [
		"/images/bar/carib4/carib1.jpg",
		"/images/bar/carib4/carib2.jpg",
		"/images/bar/carib4/carib3.jpg",
		"/images/bar/carib4/carib4.jpg",
	];
	const rokamirArray = [
		"/images/bar/rokamir/rokamir.jpg",
		"/images/bar/rokamir/rokamir1.jpg",
		"/images/bar/rokamir/rokamir2.jpg",
		"/images/bar/rokamir/rokamir3.jpg",
	];
	const antillesArray = [
		"/images/bar/antilles/antilles.jpg",
		"/images/bar/antilles/antilles1.jpg",
		"/images/bar/antilles/antilles2.jpg",
		"/images/bar/antilles/antilles3.jpg",
	];
	const palmTreeArray = [
		"/images/bar/palm_tree/palm_tree.jpg",
		"/images/bar/palm_tree/palm_tree1.jpg",
		"/images/bar/palm_tree/palm_tree2.jpg",
		"/images/bar/palm_tree/palm_tree3.jpg",
	];
	const jasminArray = [
		"/images/bar/jasmin/jasmin.jpg",
		"/images/bar/jasmin/jasmin1.jpg",
		"/images/bar/jasmin/jasmin2.jpg",
		"/images/bar/jasmin/jasmin3.jpg",
	];
	const eiffageArray = [
		"/images/bar/eiffage/eiffage.jpg",
		"/images/bar/eiffage/eiffage1.jpg",
		"/images/bar/eiffage/eiffage2.jpg",
		"/images/bar/eiffage/eiffage3.jpg",
		"/images/bar/eiffage/eiffage4.jpg",
	];
	const pirateArray = [
		"/images/bar/pirat/pirat.jpg",
		"/images/bar/pirat/pirat1.jpg",
		"/images/bar/pirat/pirat2.jpg",
		"/images/bar/pirat/pirat3.jpg",
		"/images/bar/pirat/pirat4.jpg",
		"/images/bar/pirat/pirat5.jpg",
	];
	const racoonArray = [
		"/images/bar/racoon/racoon.jpg",
		"/images/bar/racoon/racoon1.jpg",
		"/images/bar/racoon/racoon2.jpg",
		"/images/bar/racoon/racoon3.jpg",
		"/images/bar/racoon/racoon4.jpg",
	];
	const agritourArray = [
		"/images/bar/agritour/agritour.jpg",
		"/images/bar/agritour/agritour1.jpg",
		"/images/bar/agritour/agritour2.jpg",
		"/images/bar/agritour/agritour3.jpg",
	];
	const jardinArray = [
		"/images/bar/jardin/jardin.jpg",
		"/images/bar/jardin/jardin1.jpg",
		"/images/bar/jardin/jardin2.jpg",
		"/images/bar/jardin/jardin3.jpg",
	];
	const rougeBleuArray = [
		"/images/bar/rougebleu/rougebleu.jpg",
		"/images/bar/rougebleu/rougebleu1.jpg",
		"/images/bar/rougebleu/rougebleu2.jpg",
		"/images/bar/rougebleu/rougebleu3.jpg",
		"/images/bar/rougebleu/rougebleu4.jpg",
	];
	const flibustierArray = [
		"/images/bar/flibustier/flibustier.jpg",
		"/images/bar/flibustier/flibustier1.jpg",
		"/images/bar/flibustier/flibustier2.jpg",
		"/images/bar/flibustier/flibustier3.jpg",
		"/images/bar/flibustier/flibustier4.jpg",
	];
	return (
		<div>
			<div className={creationStyle.creation__subsection__intro}>
				<p>
					Chaque pièce est réalisée à la main dans l’atelier Ti Tono Art. Chaque
					production est donc unique. Méticuleux et habile, Robin design et
					fabrique une gamme de « coffres-forts » aux finitions soignées. Le
					bois est une matière où l’imperfection naturelle est source de plaisir
					pour celui qui le travaille.
				</p>
			</div>
			<div className={creationStyle.creation__subsection}>
				<Prev route="/creation/art" btnName="Art" />
				<div className={creationStyle.creation__subsection__allCards}>
					<CreationCard
						img="/images/flibustier.jpg"
						imgArr={flibustierArray}
						futTitle="CF Flibustier"
						futDimension="H95cm x ø82cm éclairage LED"
						futAvailability="Disponible"
					/>
					<CreationCard
						img="/images/rougebleu.jpg"
						imgArr={rougeBleuArray}
						futTitle="CF Rouge et Bleu"
						futDimension="H95cm x ø82cm éclairage LED"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/jardin.jpg"
						imgArr={jardinArray}
						futTitle="CF Jardin des Mers"
						futDimension="H95cm x ø82cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/agritour.jpg"
						imgArr={agritourArray}
						futTitle="CF Agritour"
						futDimension="H95cm x ø82cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/racoon.jpg"
						imgArr={racoonArray}
						futTitle="CF Colibri Racoon"
						futDimension="H95cm x ø82cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/pirat.jpg"
						imgArr={pirateArray}
						futTitle="CF Pirat FWI 971"
						futDimension="H95cm x ø82cm éclairage LED"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/eiffage.jpg"
						imgArr={eiffageArray}
						futTitle="CF tropical foliage by Eiffage"
						futDimension="H95cm x ø82cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/jasmin.jpg"
						imgArr={jasminArray}
						futTitle="CF Jasmin"
						futDimension="H95cm x ø82cm"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/antilles.jpg"
						imgArr={antillesArray}
						futTitle="CF Petites Antilles"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/palm_tree.jpg"
						imgArr={palmTreeArray}
						futTitle="CF Palm Tree"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/rokamir.jpg"
						imgArr={rokamirArray}
						futTitle="CF Best gift for mum"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/mini_fut.jpg"
						imgArr={minifutArray}
						futTitle="Mini Tono 3/5 litres"
						futAvailability="Disponible"
					/>
					<CreationCard
						img="/images/bar.jpg"
						imgArr={barArray}
						futTitle="CF N°1"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/carib1.jpg"
						imgArr={carib1Array}
						futTitle="CF Caribbean selection 1/4"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/carib2.jpg"
						imgArr={carib2Array}
						futTitle="CF Caribbean selection 2/4"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/carib3.jpg"
						imgArr={carib3Array}
						futTitle="CF Caribbean selection 3/4"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/carib4.jpg"
						imgArr={carib4Array}
						futTitle="CF Caribbean selection 4/4"
						futAvailability="Acquis"
					/>
				</div>
				<Next route="/creation/deco" btnName="Déco" />
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

export default Bar;

import PrevNextNav from "../../components/PrevNextNav";
import Next from "../../components/utils/Next";
import Prev from "../../components/utils/Prev";
import CreationCard from "../../components/CreationCard";

import creationStyle from "../../styles/Creation.module.css";

const Bar = () => {
	const navigationInfos = {
		direction: "both",
		route: ["/creation/art", "/creation/upcycling"],
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
						futAvailability="Disponible"
					/>
					<CreationCard
						img="/images/carib4.jpg"
						imgArr={carib4Array}
						futTitle="CF Caribbean selection 4/4"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/rokamir.jpg"
						imgArr={rokamirArray}
						futTitle="CF Best gift for mum"
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
						img="/images/jasmin.jpg"
						imgArr={jasminArray}
						futTitle="CF Jasmin"
						futAvailability="Acquis"
					/>
				</div>
				<Next route="/creation/upcycling" btnName="Upcycling" />
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

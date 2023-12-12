// import PrevNextNav from "../../components/PrevNextNav";
// import Next from "../../components/utils/Next";
import CreationCard from "../components/CreationCard";
import designStyle from "../styles/Design.module.css";

const Design = () => {
	// const navigationInfos = {
	// 	direction: "next",
	// 	route: "/creation/bar",
	// 	btnName: "Bar",
	// 	devis: true,
	// };

	const aventArray = [
		// "/images/avent/avent.jpg",
		"/images/avent/avent1.jpg",
		"/images/avent/avent2.jpg",
		"/images/avent/avent3.jpg",
	];
	
	
	return (
		<div>
			<div className={designStyle.design}>

			<CreationCard
						img="/images/avent/avent.jpg"
						imgArr={aventArray}
						futTitle="Calendrier de l'avent"
						futDate="Toile acrylique - Octobre 2023"
					/>
			</div>
			
		</div>
	);
};

export default Design;

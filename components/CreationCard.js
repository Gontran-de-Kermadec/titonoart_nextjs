import Carousel from "./Carousel";
import Loupe from "./utils/Loupe";
import myLoader from "../components/utils/ImgLoader";
import Image from "next/image";
import creationStyle from "../styles/Creation.module.css";

const CreationCard = (props) => {
	const openCloseLightbox = (e, action) => {
		let path =
			e.nativeEvent.path ||
			(e.nativeEvent.composedPath && e.nativeEvent.composedPath());
		if (action === "open") {
			if (path[1].nextSibling.classList.contains(creationStyle.false)) {
				path[1].nextSibling.classList.remove(creationStyle.false);
				path[1].nextSibling.classList.add(creationStyle.true);
			}
		} else if (action === "close") {
			if (path[1].classList.contains(creationStyle.true)) {
				path[1].classList.remove(creationStyle.true);
				path[1].classList.add(creationStyle.false);
			}
		}
	};
	const dispo = (availability) => {
		if (availability !== undefined) {
			if (availability.toLowerCase() === "acquis") {
				return (
					<p className={creationStyle.creation__subsection__availability}>
						Acquis
					</p>
				);
			} else if (availability.toLowerCase() !== "acquis" && availability.toLowerCase() !== "disponible") {
				return (
					<p className={creationStyle.creation__subsection__availability}>
						Don Rotary Club Pointe-à-Pitre
					</p>
				);
			} else {
				return (
					<p className={creationStyle.creation__subsection__availability}>
						<span className={creationStyle.creation__subsection__dispo}></span>
						Disponible
					</p>
				);
			}
		} else {
			return null
		}

	};
	const dimension = (dimension) => {
		if (dimension !== undefined) {
			return (
				<p className={creationStyle.creation__subsection__dimension}>
					{dimension}
				</p>
			);
			// if (availability.toLowerCase() === "acquis") {
			// } else {
			// 	return (
			// 		<p className={creationStyle.creation__subsection__availability}>
			// 			<span className={creationStyle.creation__subsection__dispo}></span>
			// 			Disponible
			// 		</p>
			// 	);
			// }
		} else {
			return null
		}
	}
	return (
		<div className={creationStyle.creation__subsection__card}>
			<figure
				onClick={(e) => openCloseLightbox(e, "open")}
				onTouchEnd={(e) => openCloseLightbox(e, "open")}
			>
				<img src={props.img} alt="tonneau décoré" />
				{/* <Image
					loader={myLoader}
					src={props.img}
					alt="tonneau décoré"
					width={320}
					height={400}
				/> */}
				<Loupe />
			</figure>
			<div
				className={
					creationStyle.creation__subsection__lightbox +
					" " +
					creationStyle.false
				}
			>
				<button
					onClick={(e) => openCloseLightbox(e, "close")}
					className={creationStyle.subcreation__lightbox__close}
				>
					X
				</button>
				<Carousel imgs={props.imgArr} mode="manual" />
			</div>
			<div>
				<h3>{props.futTitle}</h3>
				<p>{props.futDate}</p>
				{/* <p>Haut 95cm * diam 75cm</p> */}
				{dimension ? dimension(props.futDimension) : null}
				{dispo ? dispo(props.futAvailability) : null}
			</div>
		</div>
	);
};

export default CreationCard;

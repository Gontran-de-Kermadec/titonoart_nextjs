import Link from "next/link";
import prevNextNav from "../styles/PrevNextNav.module.css";

const PrevNextNav = (props) => {
	if (props.propsInfos.direction === "prev") {
		return (
			<div className={prevNextNav.prev__next__navigation}>
				<Link href={props.propsInfos.route} passHref>
					<a href="replace" className={prevNextNav.prevbutton}>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
							></path>
						</svg>
						<p>{props.propsInfos.btnName}</p>
					</a>
				</Link>
				{props.propsInfos.devis ? (
					<a href="mailto:titonoart@gmail.com">
						<p className={prevNextNav.prev__next__navigation__devis}>
							Demandez un devis
						</p>
					</a>
				) : (
					console.log("false")
				)}
			</div>
		);
	} else if (props.propsInfos.direction === "both") {
		return (
			<div className={prevNextNav.prev__next__navigation}>
				<Link href={props.propsInfos.route[0]} passHref>
					<a href="replace" className={prevNextNav.prevbutton}>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
							></path>
						</svg>
						<p>{props.propsInfos.btnName[0]}</p>
					</a>
				</Link>
				{props.propsInfos.devis ? (
					<a href="mailto:titonoart@gmail.com">
						<p
							className={
								prevNextNav.subcreation__container__devis +
								" " +
								prevNextNav.prev__next__navigation__devis
							}
						>
							Demandez un devis
						</p>
					</a>
				) : (
					console.log("false")
				)}
				<Link href={props.propsInfos.route[1]} passHref>
					<a href="replace" className={prevNextNav.nextbutton}>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
							></path>
						</svg>
						<p>{props.propsInfos.btnName[1]}</p>
					</a>
				</Link>
			</div>
		);
	} else if (props.propsInfos.direction === "next") {
		return (
			<div
				className={
					prevNextNav.prev__next__navigation +
					" " +
					prevNextNav.navigation__next
				}
			>
				<Link href={props.propsInfos.route} passHref>
					<a href="replace" className={prevNextNav.nextbutton}>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
							></path>
						</svg>
						<p>{props.propsInfos.btnName}</p>
					</a>
				</Link>
				{props.propsInfos.devis ? (
					<a href="mailto:titonoart@gmail.com">
						<p
							className={
								prevNextNav.subcreation__container__devis +
								" " +
								prevNextNav.prev__next__navigation__devis
							}
						>
							Demandez un devis
						</p>
					</a>
				) : (
					console.log("false")
				)}
			</div>
		);
	}
};

export default PrevNextNav;

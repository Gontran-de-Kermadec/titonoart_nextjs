import Link from "next/link";
import creationStyle from "../styles/Creation.module.css";

function Creation() {
	return (
		<div className={creationStyle.creation}>
			<div className={creationStyle.creation__intro}>
				<h1>Collections</h1>
				<p>
					Toutes nos créations sont des réalisations uniques qui nécessitent de
					longues heures d’imagination & de travail. <br />
					Notre volonté est de redonner de l’importance à la fabrication
					artisanale et à la création artistique.
				</p>
			</div>
			<div className={creationStyle.creation__container}>
				<Link href="/creation/art" passHref>
					<a href="replace">
						<div className={creationStyle.creation__card}>
							<figure>
								<div className={creationStyle.creation__img__container}>
									<img
										src="/images/voilier.jpg"
										onMouseEnter={(e) =>
											(e.currentTarget.src = "/images/terre1.jpg")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.src = "/images/voilier.jpg")
										}
										alt="tonneau d'un voilier"
									></img>
								</div>
							</figure>
							<button>Art</button>
						</div>
					</a>
				</Link>
				<Link href="/creation/bar" passHref>
					<a href="replace">
						<div className={creationStyle.creation__card}>
							<figure>
								<img
									src="/images/bar.jpg"
									onMouseEnter={(e) =>
										(e.currentTarget.src = "/images/bar1.jpg")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.src = "/images/bar.jpg")
									}
									alt="tonneau bar"
								></img>
							</figure>
							<button>Bar</button>
						</div>
					</a>
				</Link>

				<Link href="/creation/deco" passHref>
					<a href="replace">
						<div className={creationStyle.creation__card}>
							<figure>
								<img
									src="/images/papillon.jpg"
									onMouseEnter={(e) =>
										(e.currentTarget.src = "/images/pirate1.jpg")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.src = "/images/papillon.jpg")
									}
									alt="tonneau papillon"
								></img>
							</figure>
							<button>Déco</button>
						</div>
					</a>
				</Link>
				<Link href="/creation/tableau" passHref>
					{/* <Link href="/creation/upcycling" passHref> */}
					<a href="replace">
						<div className={creationStyle.creation__card}>
							<figure>
								<img
									src="/images/pleinarisme1.jpg"
									onMouseEnter={(e) =>
										(e.currentTarget.src = "/images/pleinarisme1.jpg")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.src = "/images/pleinarisme2.jpg")
									}
									alt="Fut decoré"
								></img>
							</figure>
							<button>Tableau</button>
						</div>
					</a>
				</Link>
				{/* <Link href="/creation/design" passHref>
					<a href="replace">
						<div className={creationStyle.creation__card}>
							<figure>
								<img
									src="/images/upcycling.jpg"
									onMouseEnter={(e) =>
										(e.currentTarget.src = "/images/upcycling111.jpg")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.src = "/images/upcycling.jpg")
									}
									alt="tonneau upcycling"
								></img>
							</figure> 
							<button>Design</button>
						</div>
					</a>
				</Link> */}
			</div>
		</div>
	);
}

export default Creation;

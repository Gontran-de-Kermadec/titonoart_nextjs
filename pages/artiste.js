import artisteStyle from "../styles/Artiste.module.css";
import Image from "next/image";

function Artiste() {
	return (
		<div className={artisteStyle.artiste}>
			<h2>
				Artiste illustrateur :
				<br />
				Robin Lepoutre
			</h2>
			<p>
				<em>
					Son souhait : offrir une oeuvre artistique qui vous enchantera et qui
					s’harmonisera avec votre intérieur.
				</em>
			</p>
			<div className={artisteStyle.artiste__features}>
				<div className={artisteStyle.artiste__feature}>
					<div className={artisteStyle.feature__txt}>
						<p className={artisteStyle.feature__title}>Ses débuts</p>
						<p>
							Originaire de Deshaies (Guadeloupe), Robin grandit dans le monde
							de l’architecture, le design et l’art grâce à son grand-père,
							Gabriel Savoye, architecte de renom. C’est à Deshaies et
							Sainte-Rose que Robin étudie jusqu’à l’obtention de son
							baccalauréat. Il commence à pratiquer son art très tôt :
							Bodypainting et customisation pendant son temps libre...
						</p>
					</div>
					<div className={artisteStyle.feature__img__container}>
						<Image
							src="/images/artiste.jpg"
							width={400}
							height={500}
							className={artisteStyle.feature__img}
						/>
					</div>
				</div>
				<div className={artisteStyle.artiste__feature}>
					<div className={artisteStyle.feature__txt}>
						<p className={artisteStyle.feature__title}>
							Sa période d'apprentissage
						</p>
						<p>
							Il quitte la Guadeloupe pour développer son talent et intègre une
							MANAA à Bordeaux afin de renforcer ses fondamentaux en arts
							appliqués. Il entre ensuite à l’École supérieure des Arts ESA
							Saint-Luc à Bruxelles. Durant ce cursus qui favorise sa créativité
							et sa mobilité d’esprit, il développe ses compétences en Arts
							graphiques.
						</p>
					</div>
					<div className={artisteStyle.feature__img__container}>
						<Image
							src="/images/artiste1.jpg"
							width={400}
							height={500}
							className={artisteStyle.feature__img}
						/>
					</div>
				</div>
				<div className={artisteStyle.artiste__feature}>
					<div className={artisteStyle.feature__txt}>
						<p className={artisteStyle.feature__title}>Son expérience</p>
						<p>
							Robin a travaillé et collaboré avec différents artistes à Paris,
							Bruxelles, Bâle, Bordeaux et en Guadeloupe. Il a également réalisé
							des illustrations sur le Continent Nord-Américain et dans l'arc
							antillais.
						</p>
					</div>
					<div className={artisteStyle.feature__img__container}>
						<Image
							src="/images/artiste2.jpg"
							width={400}
							height={500}
							className={artisteStyle.feature__img}
						/>
					</div>
				</div>
				<div className={artisteStyle.artiste__feature}>
					<div className={artisteStyle.feature__txt}>
						<p className={artisteStyle.feature__title}>Sa personnalité</p>
						<p>
							Curieux du monde qui l’entoure, doté d'un sens aigu de la beauté,
							perfectionniste et soucieux du détail, Robin vit au travers de ses
							réalisations. Il peint avec coeur et aime aller à la rencontre des
							autres pour partager sa passion.
						</p>
					</div>
					<div className={artisteStyle.feature__img__container}>
						<Image
							src="/images/artiste3.jpg"
							width={400}
							height={500}
							className={artisteStyle.feature__img}
						/>
					</div>
				</div>
				<div className={artisteStyle.artiste__feature}>
					<div className={artisteStyle.feature__txt}>
						<p className={artisteStyle.feature__title}>Aujourd'hui</p>
						<p>
							Après plus de dix ans dans le monde du BodyArt, il se lance dans
							la création graphique sur fût de chêne. Chaque réalisation,
							illustrée selon son inspiration de manière unique, est transformée
							en véritable « œuvre d’art ». Il imagine des collections sans
							compromettre ni son éthique, ni ses valeurs et accorde de
							l’importance à l’origine des matières ainsi qu’à leur production.
							Robin propose ainsi un art conscient en donnant une seconde vie à
							cet objet utilisé comme support.
						</p>
					</div>
					<div className={artisteStyle.feature__img__container}>
						<Image
							src="/images/artiste4.jpg"
							width={400}
							height={500}
							className={artisteStyle.feature__img}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Artiste;

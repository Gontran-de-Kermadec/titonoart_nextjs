import Link from "next/link";
import aboutStyle from "../styles/About.module.css";

function About() {
	return (
		<div className={aboutStyle.about}>
			<div className={aboutStyle.about__introduction}>
				<h2>À Propos de Ti ToNo Art</h2>
				<p>
					Ti ToNo Art propose des créations exclusives de styles, de motifs et
					de couleurs variés sur une matière noble : le Bois !
				</p>
				<p>
					Ces objets destinés à la décoration d’intérieur sont réalisés selon
					l’inspiration de l'artiste ou sur votre demande. Touche exotique,
					atmosphère tropicale, tout l’art de vivre « à l’antillaise » s'exprime
					dans cet esprit Caraïbes.
				</p>
				<p>
					La décoration de votre habitation reflète votre personnalité. Ti ToNo
					Art ajoute une nouvelle touche d'émotion.
				</p>
			</div>
			<div>
				<div className={aboutStyle.about__subsections}>
					<Link href="/about/origin" passHref>
						<a href="replace" className={aboutStyle.about__menu}>
							<h3>L'origine</h3>
							<div className={aboutStyle.about__menu__img}>
								<img
									className={aboutStyle.img1}
									src="/images/about-menu.jpg"
									alt=""
								/>
							</div>
						</a>
					</Link>
					<Link href="/about/support" passHref>
						<a href="replace" className={aboutStyle.about__menu}>
							<h3>Notre support</h3>
							<div className={aboutStyle.about__menu__img}>
								<img
									className={aboutStyle.img2}
									src="/images/about-menu.jpg"
									alt=""
								/>
							</div>
						</a>
					</Link>
					<Link href="/about/valeurs" passHref>
						<a href="replace" className={aboutStyle.about__menu}>
							<h3>Nos valeurs</h3>
							<div className={aboutStyle.about__menu__img}>
								<img
									className={aboutStyle.img3}
									src="/images/about-menu.jpg"
									alt=""
								/>
							</div>
						</a>
					</Link>
					<Link href="/about/demarche" passHref>
						<a href="replace" className={aboutStyle.about__menu}>
							<h3>
								Notre démarche :<br />
								Eco - responsable
							</h3>
							<div className={aboutStyle.about__menu__img}>
								<img
									className={aboutStyle.img4}
									src="/images/about-menu.jpg"
									alt=""
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;

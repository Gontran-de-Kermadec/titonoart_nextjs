import footerStyle from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={footerStyle.footer}>
			<div className={footerStyle.footer__flex}>
				<div className={footerStyle.footer__legals}>
					<Link href="/legals" passHref>
						<a href="replace" className={footerStyle.mentions}>
							Mentions légales
							<span className={footerStyle.footer__underline}></span>
						</a>
					</Link>
				</div>
				<div className={footerStyle.footer__socials}>
					<p>
						Contactez-nous:{" "}
						<a href="mailto:titonoart@gmail.com">titonoart@gmail.com</a>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Footer;

import legalStyle from "../styles/Legals.module.css";
const Legals = () => {
	return (
		<div className={legalStyle.legal}>
			<h1>Mentions Légales</h1>
			<p>
				Robin Lepoutre s’engage à être vigilant sur la fiabilité de
				l’information mise à la disposition des internautes qui consultent ce
				site. Il ne saurait en revanche être tenu pour responsable d’erreurs,
				d’omissions ou des résultats qui pourraient être obtenus par un usage
				inapproprié de ces informations.
			</p>
			<h2>Éditeur du site</h2>
			<p>Nom : Robin Lepoutre</p>
			<p>Siège Social : Chemin de second, 97115, Sainte-Rose</p>
			<p>SIRET : 819 046 905 00025</p>
			<p>Code APE : 9609Z</p>
			<h2>Hébergement du site</h2>
			<p>Google</p>
			<p>8 Rue de Londres – 75009 Paris France</p>
			<p>Télélphone: 01 42 68 53 00</p>
			<p>
				Site web :{" "}
				<a
					href="https://console.firebase.google.com/"
					target="_blank"
					rel="noreferrer"
				>
					console.firebase.google.com
				</a>
			</p>
			<h2>Droits d'auteur - propriété intellectuelle</h2>
			<p>
				L’ensemble de ce site relève de la législation française et
				internationale sur le droit d’auteur et la propriété intellectuelle.
				Tous les droits de reproduction sont réservés, y compris pour les
				documents téléchargeables et les représentations iconographiques et
				photographiques. La reproduction de tout ou partie de ce site sur un
				support, quel qu’il soit, est formellement interdite sauf autorisation
				expresse de Robin Lepoutre
			</p>
			<h2>Confidentialité et respect des données relatives à la vie privée</h2>
			<p>
				Tout utilisateur dispose d’un droit d’accès, de rectification et
				d’opposition aux données personnelles le concernant, en effectuant sa
				demande écrite et signée, accompagnée d’une preuve d’identité. 5678 Le
				site ne recueille pas d’informations personnelles, et n’est pas
				assujetti à déclaration à la CNIL.
			</p>
			<h2>Remerciements</h2>
			<p>Gontran de Kermadec</p>
		</div>
	);
};
export default Legals;

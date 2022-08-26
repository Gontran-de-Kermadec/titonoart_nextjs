import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import logo from "../public/images/logo.svg";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/fav_png/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/fav_png/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/fav_png/favicon-16x16.png"
				/>
				<link rel="manifest" href="/fav_png/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/fav_png/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#ffffff" />
				<meta
					name="description"
					content="Découvrez nos collections d’objets artistiques de décoration d’intérieur. Pièces uniques réalisées par un artiste guadeloupéen sur fûts de chêne français. Techniques mixtes utilisées : acrylique et aérosol."
				/>
				<meta
					property="og:title"
					content="Titonoart : votre décoration d’intérieur artistique unique en
					Guadeloupe"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://titonoart.com/" />
				<meta property="og:image" content="../public/images/logo.svg" />
				<meta property="og:image" content={`${logo}`} />
				<title>
					Titonoart : votre décoration d’intérieur artistique unique en
					Guadeloupe
				</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	// i18n: {
	// 	locales: ["fr"],
	// 	defaultLocale: "fr",
	// },
	images: {
		//loader: "imgix",
		loader: "custom",
		//path: "/",
	},
};

module.exports = nextConfig;

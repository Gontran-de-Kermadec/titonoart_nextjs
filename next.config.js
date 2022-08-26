/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
	},
};

module.exports = nextConfig;

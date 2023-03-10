/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['source.unsplash.com', 'i.ytimg.com'],
	},
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: false,
  },
};

export default nextConfig;

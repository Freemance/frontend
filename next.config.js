module.exports = {
  reactStrictMode: true,
  env: {
    IMAGE_LINK: process.env.NEXT_PUBLIC_MEDIA_HOST,
    API_LINK: process.env.NEXT_PUBLIC_APP_HOST,
    NEXT_PUBLIC_GA_ID: 'G-VDTLW28DWP',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  images: {
    domains: ['api.freemance.com', 'freemance-backend.herokuapp.com'],
  },
};

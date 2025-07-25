module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 1000000,
      },
      breakpoints: true,
      path: 'public/uploads',
    },
  },
});

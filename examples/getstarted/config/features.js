module.exports = ({ env }) => ({
  future: {
    experimental_firstPublishedAt: true,
    unstableMediaLibrary: env.bool('UNSTABLE_MEDIA_LIBRARY', false),
  },
});

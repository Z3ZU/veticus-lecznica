
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['qVg3YBKLDKm1LhKTtvfKKN'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
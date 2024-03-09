const axios = require('axios');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    // lifecycles: {
    //   async afterCreate(result, data) {
    //     axios.post('https://api.netlify.com/build_hooks/65e7782c1c7a245e2b716654');
    //   }
    // }
  },
});

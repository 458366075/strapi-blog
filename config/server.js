module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: '3389',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

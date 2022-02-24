module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: '80',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

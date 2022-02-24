module.exports = ({ env }) => ({
  host: '127.0.0.1',
  port: '80',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

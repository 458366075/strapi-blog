module.exports = ({ env }) => ({
  host: '127.0.0.1',
  port: '1337',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

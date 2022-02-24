module.exports = ({ env }) => ({
  host: 'http://0.0.0.0',
  port: '1330',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

module.exports = ({ env }) => ({
  host: '106.75.136.235',
  port: '1330',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

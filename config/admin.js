module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1f96c7d16877c83e4cfba1b1b26ae38a'),
  },
});

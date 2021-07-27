module.exports = ({ env }) => ({
  url: env("URL", "http://localhost:1337"),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a1d16ff6e582aefc9c1e80963fe88954'),
    },
  },
});

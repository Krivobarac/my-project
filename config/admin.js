module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '745676c258ef80efcbce8c3e5a77a988'),
  },
});

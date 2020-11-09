module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 8889),
        database: env('DATABASE_NAME', 'strapi_blog_template'),
        username: env('DATABASE_USERNAME', 'mlmarinas'),
        password: env('DATABASE_PASSWORD', 'Bincta69'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

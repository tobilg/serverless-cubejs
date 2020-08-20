const HandlerClass = require('@cubejs-backend/serverless-aws');
const MySQLDriver = require('@cubejs-backend/mysql-driver');

module.exports = new HandlerClass({
  // See
  // * https://github.com/cube-js/cube.js/blob/master/packages/cubejs-server-core/core/index.js#L190
  // * https://github.com/cube-js/cube.js/blob/d29a483606af5fc4abfd87213b6f148db990212c/examples/web-analytics/index.js#L18
  externalDbType: 'mysql',
  externalDriverFactory: () => new MySQLDriver({
    host: process.env.CUBEJS_EXT_DB_HOST,
    database: process.env.CUBEJS_EXT_DB_NAME,
    port: process.env.CUBEJS_EXT_DB_PORT,
    user: process.env.CUBEJS_EXT_DB_USER,
    password: process.env.CUBEJS_EXT_DB_PASS,
    // See https://stackoverflow.com/a/56524162/1603357
    ssl: true,
  }),
  preAggregationsSchema: `pre_aggregations_${process.env.STAGE}`,
  // Don't send telemetry
  telemetry: false,
  // Set base path to hide it's Cube.js
  basePath: '/api',
});

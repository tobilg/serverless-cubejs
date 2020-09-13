# serverless-cubejs
Serverless Cube.js backend infrastructure on AWS.

## Architecture

This project uses

* API Gateway HTTP APIs for hosting the Cube.js backend API
* Athena for querying data in S3
* Aurora Serverless for pre-aggregations
* ElastiCache for query result caching

All of that runs in a preconfigured VPC. You can also have a look at the stack diagram in [docs/stack.drawio](docs/stack.drawio). 

AWS pricing applies, please make yourself familiar with the pricing of the deployed resources **BEFORE** you deploy the stack. This will not be covered by the AWS Free Tier!

## Usage

### Prerequisites

You'll need an AWS account (obviously), and a readily installed [Serverless framework](https://www.serverless.com), along with local AWS credentials.

### Cube configuration

You need to adapt (or add) the schemas for your cube in the [schema](schema/) folder appropriately (see [Cube.js docs](https://cube.dev/docs/cube)).

### Deployment

```bash
$ sls deploy --aurora-password YOUR_AURORA_PASSWORD --s3-data-bucket YOUR_S3_BUCKET_NAME --cube-secret YOUR_CUBE_SECRET
```

The default stage that will be used is `dev`. You can also specify if via the `--stage` commandline option.

### Removal

```bash
$ sls remove
```

It's possible that you have to manually clean some resources, e.g. the S3 bucket with the Athena query results.


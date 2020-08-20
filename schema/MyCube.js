cube(`MyCube`, {
    sql: `SELECT 'helloworld' AS test`,
    
    measures: {
      count: {
        type: `count`
      },
    },
    
    dimensions: {
      test: {
        sql: `test`,
        type: `string`
      },
    }
  });
  
const swaggerJsdoc = require('../..');

describe('Example for using anchors and aliases in YAML documents', () => {
  it('should handle references in a separate YAML file', () => {
    expect(() =>
      swaggerJsdoc({
        swaggerDefinition: {
          info: {
            title: 'Example with anchors and aliases',
            version: '0.0.1',
          },
        },
        apis: [
          './examples/yaml-anchors-aliases/x-amazon-apigateway-integrations.yaml',
          './examples/yaml-anchors-aliases/properties/*.yml',
          './examples/yaml-anchors-aliases/example.js',
        ],
      })
    ).not.toThrowError();
  });

  it('should not throw errors that have been cleaned up', () => {
    expect(() => {
      swaggerJsdoc({
        swaggerDefinition: {
          info: {
            title: 'Example with anchors and aliases',
            version: '0.0.1',
          },
        },
        failOnErrors: true,
        apis: [
          './examples/yaml-anchors-aliases/x-amazon-apigateway-integrations.yaml',
          './examples/yaml-anchors-aliases/properties/*.yml',
          './examples/yaml-anchors-aliases/example.js',
        ],
      });
    }).toThrow();
  });
});

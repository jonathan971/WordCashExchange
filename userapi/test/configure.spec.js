const configure = require('../src/configure');

describe('Configure', () => {
  it('load default json configuration file', () => {
    const config = configure();
    expect(config.redis).toEqual({"host": "127.0.0.1", "port": 6379});
  });

  it('load custom configuration', () => {
    const config_custom = {"custom": "value"};
    const config = configure(config_custom);
    expect(config).toEqual({"redis": {"host": "127.0.0.1", "port": 6379}, "custom": "value"});
  });
});

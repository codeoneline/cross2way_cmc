const wd = require('macaca-wd');
const { extendsMixIn } = require('macaca-wd/lib/helper')

var remoteConfig = {
  host: 'localhost',
  port: 3456
}
// extendsMixIn(wd)

var driver = wd.promiseChainRemote(remoteConfig);
// Extend WD chain
// wd.addPromiseChainMethod(name, method);

before(() => {
  return driver.init({
    platformName: 'desktop',  // ios, android, desktop
    browserName: 'chrome',    // chrome, electron
    app: path/to/app          // only for mobile
  });
});

after(() => {
  return driver
    .sleep(1000)
    .quit();
});

it('#1 should', function() {

});
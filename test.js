var assert = require('chai').assert,
    path = require('path'),
    slag = require('ti-slag'),
    Alloy = require('ti-slag/lib/Alloy'),
    onexit = require('signal-exit'),
    istanbul = require('istanbul'),
    collector = new istanbul.Collector(),
    reporter = new istanbul.Reporter();

onexit(function() {
  reporter.add('text');
  reporter.addAll(['lcov', 'clover']);
  reporter.write(collector, true, function() {
    console.log('All Reports Generated');
  });
}, {
  alwaysLast: true
});

describe('foo.js', function(){
  var context,
    alloy = Alloy.load({
      titanium: '5.2.0.GA',
      platform: 'ios'
    });

  it('should does not throw exception', function(){
      assert.doesNotThrow(function(){
          context = slag(path.join(__dirname, 'Resources', 'iphone', 'alloy', 'controllers', 'index.js'), {
              titanium: '5.2.0.GA',
              platform: 'ios',
              coverage: true,
              module: {
                alloy: alloy.core,
                'alloy/controllers/BaseController' : alloy.BaseController
              }
          });
      }, 'function does not throw');
  });

  // it('should tab1 click does not throw exception', function(){
  //     assert.doesNotThrow(function(){
  //         context.Controller();
  //         context.doClick();
  //         collector.add(context.__coverage__);
  //     });
  // });

  it('should have args', function() {
    context.Controller();
    assert.isNotNull(context.args, 'Args are here!');
    collector.add(context.__coverage__);
  });

  it('should have a label with text Hello, World', function() {
    context.Controller();
    assert.strictEqual(context.label.text, 'Hello, World!');
    collector.add(context.__coverage__);
  });

  it('should label color is \'#999\'', function(){
    context.Controller();
    assert.strictEqual(context.label.color, '#000');
    collector.add(context.__coverage__);
  });

  it('Should Do Not Throw Exception Controller' , function () {
      assert.doesNotThrow (function () {
          context.Controller();
      });
      collector.add(context.__coverage__);
  });

});

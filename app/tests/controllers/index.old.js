var assert = require('chai').assert,
    should = require('chai').should(),
    path = require('path'),
    appRoot = require('app-root-path'),
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

(function(){

  describe('index.js', function(){
    var context,
      alloy = Alloy.load({
        titanium: '5.2.0.GA',
        platform: 'ios'
      });

    it('should does not throw exception', function(){
        assert.doesNotThrow(function(){
            context = slag(path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy', 'controllers', 'index.js'), {
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
      console.log('args: ' +context.args);
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

    it('should have a dilbert image', function() {
      context.Controller();
      should.exist(context.imageDilbert.image);
      assert.strictEqual(context.imageDilbert.image, '/images/dilbert.jpg');
    })

    it('Should Do Not Throw Exception Controller' , function () {
        assert.doesNotThrow (function () {
            context.Controller();
        });
        collector.add(context.__coverage__);
    });

  });
})();

import test from 'ava'
import slag from 'ti-slag'
import Alloy from 'ti-slag/lib/Alloy'

var assert = require('chai').assert,
    should = require('chai').should(),
    path = require('path'),
    appRoot = require('app-root-path');

var context,
  alloy = Alloy.load({
    titanium: '5.2.0.GA',
    platform: 'ios',
    alloy: path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy.js'),
    BaseController: path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
    underscore: path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy', 'underscore.js'),
    backbone: path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy', 'backbone.js'),
    constants: path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy', 'constants.js'),
    CFG: path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy', 'CFG.js')
  });

context = slag(path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy', 'controllers', 'index.js'), {
    titanium: '5.2.0.GA',
    platform: 'ios',
    module: {
      alloy: alloy.core,
      'alloy/controllers/BaseController' : alloy.BaseController
    }
});

test('should have args', function() {
  context.Controller();
  assert.isNotNull(context.args, 'Args are here!');
});

test('should have a label with text Hello, World', function() {
  context.Controller();
  assert.strictEqual(context.label.text, 'Hello, World!');
});

test('should label color is \'#999\'', function(){
  context.Controller();
  assert.strictEqual(context.label.color, '#000');
});

test('should have a dilbert image', function() {
  context.Controller();
  should.exist(context.imageDilbert.image);
})

test('Should Do Not Throw Exception Controller' , function () {
    assert.doesNotThrow (function () {
        context.Controller();
    });
});

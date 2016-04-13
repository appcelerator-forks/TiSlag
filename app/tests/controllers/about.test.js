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

context = slag(path.join(appRoot.toString(), 'Resources', 'iphone', 'alloy', 'controllers', 'about.js'), {
    titanium: '5.2.0.GA',
    platform: 'ios',
    module: {
      alloy: alloy.core,
      'alloy/controllers/BaseController' : alloy.BaseController
    }
});

test('should does not throw exception', function(){
    assert.doesNotThrow(function(){
      context.Controller();
    }, 'function does not throw');
});

test('should have args', function() {
  context.Controller();
  assert.isNotNull(context.args, 'Args are here!');
});

test('should have a label with text About', function() {
  context.Controller();
  assert.strictEqual(context.label.text, 'About');
});

test('Should Do Not Throw Exception Controller' , function () {
    assert.doesNotThrow (function () {
        context.Controller();
    });
});

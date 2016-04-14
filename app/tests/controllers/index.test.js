import test from 'ava'
import slag from 'ti-slag'
import Alloy from 'ti-slag/lib/Alloy'

var assert = require('chai').assert,
    should = require('chai').should(),
    path = require('path'),
    appRoot = require('app-root-path');

var mobileTarget = process.env.MOBILETARGET;

var context;
var alloy;

if (mobileTarget === 'iphone') {
  alloy = Alloy.load({
    titanium: '5.2.0.GA',
    platform: 'ios',
    alloy: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy.js'),
    BaseController: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'controllers', 'BaseController.js'),
    underscore: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'underscore.js'),
    backbone: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'backbone.js'),
    constants: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'constants.js'),
    CFG: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'CFG.js')
  });

  context = slag(path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'controllers', 'index.js'), {
      titanium: '5.2.0.GA',
      platform: 'ios',
      module: {
        alloy: alloy.core,
        'alloy/controllers/BaseController' : alloy.BaseController
      }
  });
}

if (mobileTarget === 'android') {
  alloy = Alloy.load({
    titanium: '5.2.0.GA',
    platform: 'android',
    alloy: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy.js'),
    BaseController: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'controllers', 'BaseController.js'),
    underscore: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'underscore.js'),
    backbone: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'backbone.js'),
    constants: path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'constants.js'),
    CFG: path.join(appRoot.toString(), 'Resources', 'alloy', 'CFG.js')
  });

  context = slag(path.join(appRoot.toString(), 'Resources', mobileTarget, 'alloy', 'controllers', 'index.js'), {
      titanium: '5.2.0.GA',
      platform: 'android',
      module: {
        alloy: alloy.core,
        'alloy/controllers/BaseController' : alloy.BaseController
      }
  });
}

test('<Window> should have a layout of "composite"', function() {
  context.Controller();
  assert.strictEqual(context.win.layout, 'composite');
});

test('<Window> should have a background color of "white"', function() {
  context.Controller();
  assert.strictEqual(context.win.backgroundColor, 'white');
});

test('<Window> should have a wrapper view with a layout of "vertical"', function() {
  context.Controller();
  assert.strictEqual(context.wrapper.layout, 'vertical');
});

test('Controller should have args', function() {
  context.Controller();
  assert.isNotNull(context.args, 'Args are here!');
});

test('<Label id="label"> should have a text value "Hello, World"', function() {
  context.Controller();
  assert.strictEqual(context.label.text, 'Hello, World!');
});

test('<Label id="label"> should be the color \'#999\'', function(){
  context.Controller();
  assert.strictEqual(context.label.color, '#000');
});

test('<ImageView id="imageDilbert" /> should be a dilbert image', function() {
  context.Controller();
  should.exist(context.imageDilbert.image);
})

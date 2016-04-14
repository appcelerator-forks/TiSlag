# Ti-Slag Sample Project

> Just a simple test project to try and get testing and code coverage working with Appcelerator using https://www.npmjs.com/package/ti-slag

* Testing with Mocha = possible
* Code coverage when using classic = possible
* Code coverage when using Alloy = almost possible and not very useful

#### Running the app
```javascript
npm start
```

#### Running tests
```javascript
npm test
```

```javascript
npm run test:watch
```

#### Running code coverage
```javascript
npm run coverage
```

## Limitations
You cannot check for presences of a class in Alloy xml tag as the js generated file does not contain the class. Instead you must check for the presence of some of the properties within a class.

You cannot click on any elements to check actions. This will require functional / manual testing approach.

## angulartics-optimizely

Optimizely plugin for [Angulartics](https://github.com/angulartics/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/angulartics/angulartics).

### npm

```shell
npm install angulartics-optimizely
```

Then add `angulartics.optimizely` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-optimizely')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

## Documentation

Documentation is available on the [Angulartics site](http://angulartics.github.io/).


## License

[MIT](LICENSE)

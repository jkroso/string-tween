
# string-tween

  Generate strings between two endpoint strings. Mostly used for animation.

## Installation

With your favourite package manager:

- [packin](//github.com/jkroso/packin): `packin add jkroso/string-tween`
- [component](//github.com/component/component#installing-packages): `component install jkroso/string-tween`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install string-tween`

then in your app:

```js
var tween = require('string-tween')
```

## SHOWCASE

Tween.js Modified  - https://tweenjs.ga/ - We're using "String Tween", Thanks! (@dalisoft)

## API

### tween(a, b)

  Create a tween generator from `a` to `b`

```js
var frame = tween('rgb(0,0,0)', 'rgb(100,100,100)')
```

### frame(n)

  Create a value `n` percent of the distance from `a` to `b`

```js
frame(0) // => 'rgb(0,0,0)'
frame(0.2) // => 'rgb(20,20,20)'
frame(1) // => 'rgb(100,100,100)'
frame(1.2) // => 'rgb(120,120,120)'
```

## Examples

  Its pretty amazing how much this buys you when animating DOM properties:

##### transform

```js
tween(
  'rotate(0) scale(1) translateX(0)', 
  'rotate(90deg) scale(2) translateX(10px)'
)(.5) // => 'rotate(45deg) scale(1.5) translateX(5px)'
```

##### color

```js
tween('rgb(255,0,0)', 'rgb(0,255,0)')(.5) // => 'rgb(127.5,127.5,0)'
```

##### border-radius

```js
tween('0 0 0 0', '0 10px 0 3px')(.5) // => '0 5px 0 1.5px'
```

##### path data

```js
tween('M0 0 20 0', 'M0 0 20 20')(.5) // => 'M0 0 20 10'
```

Basically you just need to make sure both input strings have the same number of numbers in the same order and everything will work fine, no need to worry about whitespace or other formating differences. The generated strings will use the formating of the destination string.

This means you can cheat a bit with the first string and just provide a list of numbers. So for the color example you could get away with:

```js
tween('255 0 0', 'rgb(0,255,0)')(.5) // => 'rgb(127.5,127.5,0)'
```

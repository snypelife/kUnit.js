kUnit.js
========

Easy to use "Konami Code"-esque shortcut plugin (inspired by QUnit syntax)

```js
 kUnit.test([
  {
      code: ['up', 'down', 'up', 'down', 'left', 'right', 'left', 'right', 'a', 'b']
    , test: function (self, util) {
        //fire your function
      }
  })

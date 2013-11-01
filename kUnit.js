/*
  authour: @snypelife
  description: "KONAMI" style shortcut codes
*/
+function (root) {
  var test = function (tests) {
    var userInput = []
      , keyCodeLib = {
          'a': 97,'b': 98,'c': 99,'d': 100,'e': 101,'f': 102,'g': 103,'h': 104,'i': 105,'j': 106,'k': 107,'l': 108,'m': 109,'n': 110,'o': 111,'p': 112,'q': 113,'r': 114,'s': 115,'t': 116,'u': 117,'v': 118,'w': 119,'x': 120,'y': 121,'z': 122,'1': 49,'2': 50,'3': 51,'4': 52,'5': 53,'6': 54,'7': 55,'8': 56,'9': 57,'0': 58,'up': 38,'down': 40,'left': 37,'right': 39
      }
      , util = {
            exampleUtilityFunc: function (param) {}
        }

      , runTest = function (evt) {
          var checkTestCodes = function (testCase) {
                var cheatCode = keyCodeLookup(testCase.code)

                if (cheatCode.join('') === userInput.join('')) {
                  testCase.test(testCase, util)
                }
              }
            , keyCodeLookup = function (code) {
                var map = []
                code.forEach(function (val) {
                  map.push(keyCodeLib[val])
                })
                return map
              }
            , clearUserInput = function(){
                userInput = []
              }

          userInput.push(evt.keyCode || evt.charCode)
          tests.forEach(checkTestCodes)
          setTimeout(clearUserInput, 500) // reset test user input after .5s
        }

    document.addEventListener('keypress', runTest, false)
  }

  root.kUnit = {}
  root.kUnit.test = test
}(this)

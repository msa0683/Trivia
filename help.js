> questiob]















































> questiob















































> questionAnswers















































> questionAnswers
[ { question: 'How many eggs did Marlin and Coral have? ',
    correctAnswer: '400',
    possibleAnswers: [ '400', '10', '50', '1000' ] },
  { question: 'Dory refers to Nemo as all of the following names, except which one?',
    correctAnswer: 'Meeko',
    possibleAnswers: [ 'Chico', 'Fabio', 'Meeko', 'Elmo' ] },
  { question: 'What are Dory and Marlin instructed to do when they come  to the trench?',
    correctAnswers: 'Swim through it, not over it?',
    possibleAnswers: 
     [ 'Swim over it, not through it',
       'Swim around it, not through it?',
       'Swim through it, not over it?',
       'Don\'t go near it' ] },
  { question: 'What color is the rim of the scuba divers goggles?',
    correctAnswer: 'green',
    possibleAnswers: [ 'Yellow', 'Blue', 'Green', 'Pink' ] },
  { question: 'Where does P.Sherman live?',
    correctAnswer: '42 Wallaby Way, Sydney',
    possibleAnswers: 
     [ '23 Wallaby Way, Sydney',
       '42 Wallaby Way, Sydney',
       '32 Wallaby Way, Sydney',
       '22 Wallaby Way, Sydney' ] } ]
> questionAnswers[0]
{ question: 'How many eggs did Marlin and Coral have? ',
  correctAnswer: '400',
  possibleAnswers: [ '400', '10', '50', '1000' ] }
> questionAnswers[0].question
'How many eggs did Marlin and Coral have? '
> questionAnswers[0].correctAnswer
'400'
> questionAnswers[0].possibleAnswers
[ '400', '10', '50', '1000' ]
> questionAnswers[1]
{ question: 'Dory refers to Nemo as all of the following names, except which one?',
  correctAnswer: 'Meeko',
  possibleAnswers: [ 'Chico', 'Fabio', 'Meeko', 'Elmo' ] }
> questionAnswers[1][1]
undefined
> Object.values
[Function: values]
> Object.value(questionAnswers[0])
TypeError: Object.value is not a function
    at repl:1:8
    at ContextifyScript.Script.runInThisContext (vm.js:23:33)
    at REPLServer.defaultEval (repl.js:339:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.onLine (repl.js:536:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:191:7)
    at REPLServer.Interface._onLine (readline.js:241:10)
    at REPLServer.Interface._line (readline.js:590:8)
> Object.values(questionAnswers[0])
[ 'How many eggs did Marlin and Coral have? ',
  '400',
  [ '400', '10', '50', '1000' ] ]
> Object.keys(questionAnswers[0]
... )
[ 'question', 'correctAnswer', 'possibleAnswers' ]
> var questionIndex = 0
undefined
> question
questionAnswers  questionIndex    

> questionAnswers[questionIndex]
{ question: 'How many eggs did Marlin and Coral have? ',
  correctAnswer: '400',
  possibleAnswers: [ '400', '10', '50', '1000' ] }
> var questionObj = questionAnswers[questionIndex]
undefined
> questionObj
{ question: 'How many eggs did Marlin and Coral have? ',
  correctAnswer: '400',
  possibleAnswers: [ '400', '10', '50', '1000' ] }
> questionObj.question
'How many eggs did Marlin and Coral have? '
> questionObj.possibleAnswers
[ '400', '10', '50', '1000' ]
> questionObj.correctAnswer
'400'
> 

## NodeJS Journey....

 - V8 can be Embedded into any C++ Application.
 - Node REPL (READ,EVALUATE,PRINT,LOOP)
## globalthis
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

    - https://stackoverflow.com/questions/57157864/what-is-globalthis-in-javascript-what-will-be-the-ideal-use-case-for-this

##  
 - Modules protect their variables and functions from leaking...

##
 - IIFE - Immediately Invoked Function Expression
 - How are variables & functions private in different Module ??
     - because of IIFE and require...
 - How do you get access to module.exports
    - NodeJS provides module as a parameter to the IIFE.


## codew -> Tokens -> AST (Abstract Tree)
    why do we get the syntax Error -> because that is not going to be generated AST tree at that point of time...
    https://astexplorer.net/

- inline caches
- copy elision
- garbage collection - orrinoco,oilPan,scavanger,mcompact,mark and sweep algorithm
- Earliar compiler : crankshaft

## Event loop waits at Poll phase,if everything is done,event loop in browser and in nodejs concepts both are different.

- Tick means one full cycle.

## NodeJS Event-Loop
   https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
   
- this is much more complex as previous one...
   https://docs.libuv.org/en/v1.x/design.html

## socket
     https://www.reddit.com/r/learnprogramming/comments/12ifgcf/what_is_a_socket_what_does_it_mean_that_a/

## DNS 
    https://aws.amazon.com/route53/what-is-dns/


## is NodeJS a single threaded or multi threaded
     https://www.reddit.com/r/node/comments/16k8k70/preparing_for_an_interview_and_confused_about/
    basically it depends on code

 - we can change the size of thread pool by 
     process.UV_THREADPOOL_SIZE
 - epoll and kqueue - time complexity is O(1)
     https://long-zhou.github.io/2012/12/21/epoll-vs-kqueue.html
     https://stackoverflow.com/questions/26420947/what-are-the-underlying-differences-among-select-epoll-kqueue-and-evport
     https://en.wikipedia.org/wiki/Kqueue
     https://en.wikipedia.org/wiki/Epoll

 - FDS socket descriptor
    https://en.wikipedia.org/wiki/File_descriptor
    https://stackoverflow.com/questions/13378035/socket-and-file-descriptors

 -  what types of data structures are epoll and kqueue use??
     red-black-tree but why ??
 - timersQueues use minHeap data structure but why??

 - EventEmitter,streams and buffer??


## confusing naming convention 
    - Naming is very important
      - it is a mistake of naming....
    https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
process.nextTick() vs setImmediate()
We have two calls that are similar as far as users are concerned, but their names are confusing.

process.nextTick() fires immediately on the same phase
setImmediate() fires on the following iteration or 'tick' of the event loop
In essence, the names should be swapped. process.nextTick() fires more immediately than setImmediate(), but this is an artifact of the past which is unlikely to change. Making this switch would break a large percentage of the packages on npm. Every day more new modules are being added, which means every day we wait, more potential breakages occur. While they are confusing, the names themselves won't change.

- ec2 instance -> AWS server

## socket VS web-socket
    https://stackoverflow.com/questions/4973622/difference-between-socket-and-websocket


## mongoDB operations
    https://mongodb.github.io/node-mongodb-native/6.9/

## collection methods
    https://mongodb.github.io/node-mongodb-native/6.9/classes/Collection.html



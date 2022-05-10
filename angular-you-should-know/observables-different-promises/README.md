

# How are observables different from promises?

# Eager vs. Lazy
An observable is lazy and a promise is eager. What does this mean? Well, a promises’ execution starts immediately, without waiting for a consumer, making it eager. A consumer does not have to act. On the other hand, an observable is lazy because its producer function does not get called until you subscribe to the stream.

Observables are lazy whereas promises are not
This is pretty self-explanatory: observables are lazy, that is we have to subscribe observables to get the results. In the case of promises, they execute immediately.

Observables handle multiple values unlike promises
Promises can only provide a single value whereas observables can give you multiple values.

# Asynchronous vs. Synchronous
A promise is fully asynchronous in nature and cannot be used in any other type of observation. While an observable can take on any functionality of a promise, it can also be used synchronously. Because it can be run again and again, observables will behave both ways.

# Cancellable vs. Non-Cancellable
Due to its eager and single-use nature, a promise is not cancelable. If a caller cannot change their mind and cancel an operation once execution has started; a promise will complete itself fully. An observable does support native cancellation, with the user gaining the ability to invoke the “unsubscribe()” method on subscription. 

***`Single vs. Multiple Values`***
Promises can only be used once to emit one single value, whereas observables can emit multiple values continuously to multiple users. 

***`Ability to Handle Errors`***
Observable execution arrears are deliverable to the subscriber’s error handlers, with the subscriber automatically unsubscribing from the observable. Promises push error to child promises, as they are unable to handle them on their own. For centralized and predictable error handling, observables are the way to go.


## When to Use a Promise

Although observables can handle any function a promise can, there are still use cases for this simpler method. Here’s when you might want to utilize a promise in Javascript:

-   **When using async/await** – This syntax is specially made for working with promises, so if your code contains it, you’ll want to match it to the proper method.
-   **When Not Using Third-Party Libraries** – Promises are native to Javascript, so use them if you’re avoiding third-party libraries for any reason.
-   **When Resolving a Single Event** – Sometimes the “one and done” nature of promises prove the most useful.
-   **When Events Must be Non-cancellable** – If you don’t want to allow users to be able to change their minds once an execution has begun.

## When to Use an Observable

As the more versatile of the two, there are several use cases where you must use an observable to garner your desired output. Here are some examples:

-   **When Multiple Values Need to Emit** – Only observables are able to complete this operation repeatedly
-   **When Events Should be Cancellable** – Unsubscribing to an observable can terminate any pending asynchronous activity
-   **When Working with Continuous Streams of Data** – Observables allow for the response of events and manipulation of data as it is received over time.
-   **When Working with Operators or in Angular** – Observables work in tandem with the RxJS library and Angular, making them the right choice for this type of web development.
-   **When Code Must Behave Synchronously** – Only an observable can be asynchronous and synchronous.


## For Example


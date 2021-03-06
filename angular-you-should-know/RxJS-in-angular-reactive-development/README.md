

# What is library RxJS (Reactive Extensions for Javascript)?

RxJS is a library for ```composing(tương tác )``` ```asynchronous(không đồng bộ)```  and ```event-based(sự kiện cơ bản)``` program by using ***OBSERVABLE SEQUENCES***

RxJS is designed to work with asynchronous actions and event.
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/asynchronous1.png)

# How is RxJS (Reactive Extensions for Javascript) used in angular?

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/obserable.png)

# ```Reactive(phản ứng)```in angular?
A declarative programming paradigm concerned with data streams and the ```propagation(lan truyền)``` of change.
Code is ```reactive``` when an ```input change``` leads to an ```automactic change in output```

 - React to user actions
 - React to state changes	
 - ```Combine kết hợp``` data streams 
 - Communicate between components 
 - Handle shown failure 
 - Manage state

# RxJS Terms and Syntax

***What is an Observer?***  
Observer is an interface for a consumer of push-based notifications delivered by an Observable. It has below structure,

***What is an Observable?*** 
An Observable is a unique Object similar to a Promise that can help manage async code. Observables are not part of the JavaScript language so we need to rely on a popular Observable library called RxJS.
The observables are created using new keyword. Let see the simple example of observable
` import { Observable } from 'rxjs';

    const observable = new Observable(observer => {
      setTimeout(() => {
        observer.next('Hello from a Observable!');
      }, 2000);
    });`

***Observer ***

 - Next item, process it    | Observer use next()       
 - Error occurred, hand it | Observer use error()       
 - Complete, you're done | Observer use complete()     

Observer is a collection of callbacks that knows how listen to values ```delivered(được chuyển)``` by the Observable.
An observer is a ``consumer giao hàng`` of values delivered  by an observable.
In RxJS , an observer is also defined as an interface with next , error , complete methods.

***Observerable ***
 1. User action
 2. Application events (routing, forms)
 3. Response from an HTTP request 
 4. Internal structures

 


**If you watch and should you spend a little time studying and practicing. Lucky to you and get more understand about it. You get more interested in the angular and net 6**



|  |
|--|
|https://github.com/thanhlong2803/experience-do-work-in-projects-in-the-angular/tree/main/experience-you-should-know/change-department-of-employee  Change department of employee using (Angular Material, RxJS), NET6 Web API CRUD Operation With Entity Framework Core And SQL Server   |

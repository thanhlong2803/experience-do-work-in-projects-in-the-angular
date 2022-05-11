#  Why do we have to use @Injectable() and @Inject() in Angular?

***@Injectable is a decorator in Angular framework, it allows the service to be injected in Components or other service. Angular build on Dependency injection***

https://github.com/thanhlong2803/experience-do-work-in-projects-in-the-angular/tree/main/experience-you-should-know/the-angular-use-component-and-component-interactions

***@Inject() is a manual [thủ công] x mechanism [cơ chế] x for letting [cho phép] x Angular know that a parameter must be injected.*** 
  - Definition of MAT_DIALOG_DATA, it use in material in angular.Injection token that can be used to access the data that was passed in to a dialog.
  - Usage of @Inject(MAT_DIALOG_DATA) from the material documentation

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/Inject.png)




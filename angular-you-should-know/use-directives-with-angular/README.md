
#  How use directives and commonly built-in directives and services

 - ***Use *ngFor in angular***


For example, we are define component below:

In component have create a class for all functions, objects, and variables 

 `fruits = ['Car', 'motobike', 'Bus'];`
 `<tr *ngFor="let fruit of fruits"> <td>{{fruit}}</td> </tr>` 
 
 We see value, We have array of fruit to be iterated by *ngFor.
 
 In its most simple form, *ngFor has two parts : let >variableName of object/array.
 
 In the case of `fruits = ['Car', 'motobike', 'Bus'];`
    

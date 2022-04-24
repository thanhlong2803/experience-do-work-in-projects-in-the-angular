




#  What is component and component interactions in the angular?

***Angular is one of the most popular framework in the fornt end technologies. It's a powerful framework due to to the fact that it follows MVC parttern, the MVVM pattern  and component architecture*** 

***There are many components in the architecture, let me describe a below screenshot.**
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/COMPONENT.png)

***The component is description the  above contain of***

 - Provider : Resources that will be injected into the component constructor
 - Selectors: The query selector that will find the element in the HTML and replace by the component
 - Styles : Inline styles. NOTE: DO NOT use this parameter with require, it works on development but when you build the application in production all your styles are lost
 - Template: String that contains your HTML
 - StyleUrls: Array of path to style files
 - TemplateUrl: Path to a HTML file


***Let me describe the below screenshot and more understand about the component in the angular, So understand to work with it***
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/COMPONENTINTERACTION.png)
The component enables description the above screenshot. We have management emplyees in the department contain of :         

# We can pass data from the component of department to the component get all employee by department interaction throught using  @input() and @output().                                          
 **Component 1:**  Employee of department  =>  ***description :*** Data pass  from   ***The component of department***  to ***The component  get all employee by department***
 `<app-get-all-employee-by-department  [departmentId] = "departmentId"  [employee]="employee"></app-get-all-employee-by-department>`
 DepartmentId define in the employe-of-department.ts  and create new employee to pass the component  get all employee by department.            
 **Component 2:**  Get all employee by department are received through  ***@input() departmentId : number***  and   ***@input() employee : employee***  
*** The component get all employee by department*** pass data ***The component of department*** listens for event  with  ***@output() countEmployee = new EventEmitter<int>()***
  `<app-get-all-employee-by-department (countEmployee)="getCountEmployee($event)" [departmentId] = "departmentId"  [employee]="employee"></app-get-all-employee-by-department>`
  *** The component get all employee by department***  have a function getCountEmployee() show number employee in the department.           
 **Component 3:**  The department detail can reuse the same The component of department.

# We can pass data from the component of department to the component get all employee by department interaction throught using  @ViewChild
  ViewChild offers one way interaction from component 1 to component 2 . There is no feedback or output from child when viewchild is used.    
  Employee of department  =>  interaction the component get all employee by department using @ViewChild         
 `@ViewChild(GetAllEmployeeByDepartmentComponent) private getAllEmployee :GetAllEmployeeByDepartmentComponent`       
 and interaction call getCountEmployee() method in the component GetAllEmployeeByDepartmentComponent                      
 `let employeeList = this.getAllEmployee.getCountEmployee()`       
 In GetAllEmployeeByDepartmentComponent have a getCountEmployee() method return data is type number.         

# We can pass data from the component of department to the component get all employee by department interaction throught a service
 
 

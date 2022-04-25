
#  We use the component in the angular. Mockup help to do you more understand about it.
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/codeinteractioncomponents.png)
# Let me build in the project contain of bootstrap and localStorage. 
| My project| Description|
|--|--|
|  Bootstrap |  I can use Bootstrap design UI  |
|  localStorage |  I can use localStorage to save data in the browse  |
# The component interaction using @input and @output. 
|  Screenshot and description |
|--|
| ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/createemployee.png) | 
|I build in the project contain of bootstrap and localStorage and button Save handle save data in the localStorage |
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/foldercode.png) |
| I have tow component contain of create-employee.component(parent) and employee-share-component(chid) |
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/addcomponentchild.png) |
| Pass data from create-employee.component(parent) to employee-share-component(chid) after  create-employee.component(parent) add code ***<app-employee-share [employee]="createModel" (totalChoiceEmpolyee)="totalChoiceEmpolyee($event)">***|
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/ngOnchanges.png)|
|employee-share-component(chid) using @input to receive data from create-employee.component(parent) and employee-share-component(chid) using @output and  `this.totalChoiceEmpolyee.emit(this.employeeList.filter(c => c.choiceEmployee == true).length)` pass data again for  create-employee.component(parent) |
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/createcomponet.png)|
# The component interaction using viewchild
|  Screenshot and description |
|--|
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/viewchild.png) | 
|I handle submit total employee get nummer from viewchild through totalChoiceEmpolyee() |
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/viewchild1.png) | 
|In create-employee-viewchild.component.html define #employeeShareViewChildComponent|
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/viewchild3.png) |
|employee-share-viewchild.component.ts|
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/viewchild2.png) | 

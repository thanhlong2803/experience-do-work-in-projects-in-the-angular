
#  We use the component and many works with the component. I design mockup for component interaction using @Input, @Output and @ViewChild. Moreover, component interaction through serviecs
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
|employee-share-component(chid) using @input to receive data from create-employee.component(parent) and employee-share-component(chid) using @output pass data again for  create-employee.component(parent)|
|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/createcomponet.png)|

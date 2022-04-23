# Installing ngx-bootstrap

ngx-booktrap allows us to use both 3 & 4. We can use the ether **ng** or **npm** command to install the ngx-bookstrap as shown below.
**run cmd : ng add ngx-bootstrap**
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/installngx.png) ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/installyesno.png) 

The command installs the ngx-bootstrap & bootstrap version 4.5.3. It also updates **the package.json, angular.json & app.module.ts**. The following are a list of changes in each file.
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/package.png) 

**In the file angular.json** auto add style of bookstrap.
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/stylecss.png) 

app.module.ts. Note that **BrowserAnimationsModule module** is added & imported as it uses it extensively. Also note that no ngx-bootstrap related modules are added.

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/importlibrary.png) 

**Done apply bootstrap for project.**
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/bookstrapandlocalStorage.png) 


# How does an Angular application work?

**Create start ng new myApp then run cmd ng-serve --o**
# Step 1:  Angular looks for the entry point of the application.
To find the entry point, angular looks into the main property of the `angular.json` file

The `main.ts` property defines the entry point of the application, which in the above case, is main.ts 
`"main":"src/index.html"`
Angular has found the entry point, let's move on step two.
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/main.ts.png)

# Step 2: The main.ts file creates a browser environment and loads the module
The angular application require a browse environment to run and, to create an angular application, we require a module.
Creating a browser environment and loading the module gets done in a single step inside the `main.ts`
In browser enviroment and loading the module gets. 
`platformBrowserDynamic().bootstrapModule(AppModule)`
**platformBrowserDynamic** create a browser environment and **bootstrapModule** loads the module.

Default module will load bootstrapModule. We can change the default module to any other module.
# Step 3: The angular compiler looks inside the property of the AppModule.
AppModule, declared inside the `app.module.ts` file, consists of
all the **declarations** of **components**, **services**, and other modules that are required by the application.
The bootstrap property of the AppModule references the component used to bootstrap the application.
# Step 4: The angular compiler looks into the AppComponent and initialize it

**app.component.ts** file contains the AppComponent.
Every component **consists of** three properties:

 1. selector : used for accesing the component.
 2. template/templateUrl: contains the view (HTML) of the component.
 3. style/styleUrls: contains style for the new.

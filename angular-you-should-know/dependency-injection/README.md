#  How use to Dependency injection


In Angular, a class asks for services or objects when it is  instantiated  [khởi tạo]  x, which means if a class is  invoked  [được viện dẫn]  x, it  doesn’t  [Không]  x  create any objects, rather it  depends  [Phụ thuộc]  x  on an  external  [bên ngoài]  x  source to  instantiate  [khởi sự]  x  objects, services, or parameters. In this process, an  injectable  [có thể tiêm]  x  service is created and  registered  [đăng ký]  x.  Injectors  [Kim phun]  x  can be configured in three different ways,

-   @Injectable() decorator for the service.
-   @NgModule for NgModule=> provider [ services ] 
-   @Component for the component => Constructor(private services)

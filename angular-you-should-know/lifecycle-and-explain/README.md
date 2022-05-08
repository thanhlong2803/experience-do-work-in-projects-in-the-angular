

# What are lifecycle hooks in Angular? Explain a few lifecycle hooks?

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/liflecyle.png)


# What are lifecycle hooks in Angular? Explain a few lifecycle hooks?

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image4/liflecyle.png)
#  1.Contructor run first of a component
 

 - Được gọi tất cả lifecycle hook , thường dùng để tìm các denpendency Injection như các Service.
 - Constructor không phải là 1 hook method
#  2.ngOnlint impliment in onlInt
 - Khởi tạo directive/component sau khi hiển thị lần đầu tiên và set các thuộc tính đầu vào của directive/component
 - Dùng để khởi tạo các giá trị
# 3.ngOnDestroy impliment in onDestroy
 - Dược gọi khi component bị hủy, dùng để hủy các kết nối và giải phóng bộ nhớ. => unsubcription hủy các leak memory.
 - Component kết nối api, database , subscription and route.
# 4.ngOnChanges
 - Phương thức ngOnChanges được gọi khi component phát hiện có giá trị được binding vào component bằng phương thức @Input properties.
 - Quản lý và làm việc thông qua **SimpleChanges trước khi nó call ngOnlint**
 - SimpleChange : thuộc thư viện của `angular/core`
 - Dùng input call 2 component thông qua **directive** and **component** 
 - Structer consist of : **currentValue** (Giá trị hiện tại) , **previousValue**: (giá trị trước đó) **firstChange**(): giá trị có thay đổi lần đầu tiên nó true and false.
For example:  [https://github.com/thanhlong2803/experience-do-work-in-projects-in-the-angular/tree/main/experience-you-should-know/the-angular-use-component-and-component-interactions](https://github.com/thanhlong2803/experience-do-work-in-projects-in-the-angular/tree/main/experience-you-should-know/the-angular-use-component-and-component-interactions)
# 5.ngDoCheck
 - ngDoCheck kích hoạt với chu kỳ phát hiện thay đổi. Angular chạy phát hiện thay đổi thường xuyên
 - ngDoCheck cho phép ta kiểm tra dữ liệu theo thu công.
 - ngOnChnage => ngOnIint=> ngDoCheck
 - 
#  6.ngAfterContentInit 
 - **ngAfterContentlint** kích hoạt sau khi khởi tạo DOM nội dung của thành phần (tải lần đầu tiên). Chờ đợi trên các truy vấn @ContentChild là trường sử dụng chính của hook
 - **@ContentChild** truy vấn các tham chiếu phần tử mang lại lai cho DOM nội dung. Do đó , chúng sẽ không có sẳn cho đến sau khi DOM nôi dung tải. Do đó tại sao **ngAfterContentIint và đối tác nó ngAfterContentChecked** được sử dụng.
 - Cú pháp **ng-content**  để kiểm tra - sử dụng **ContentChild** (kiểu như ElementRef)
 - Chỉ được gọi 1 lần duy nhất
# 7.ngAfterContentChecked 
 - ngAfterConentChecked kích hoạt sau mỗi chu kỳ phát hiện đổi nhắm mục tiêu DOM nội dung. Việc này giúp nhà phát triển hỗ trợ cách DOM nội dung phản ứng vs viêc thay đổi
 - ngAfterContentChecked có thể kích hoạt thường xuyên và gây ra các vấn đề và hiệu suất nếu được triển khai kém.
 - ngAfterConentChecked cũng kích hoạt trong giai đoạn khởi tạo của một thành phần. Nó xuất hiện ngay sau ngAterContentlint
 - Được gọi nhiều lần
 - only component.
# 8.ngAfterView 
 - Được gọi sau khi Angular khởi tạo view của component và các child views.
 - Cú pháp sử dụng ViewChild
 - Hoạt động khi sau khi tải nội dung lên thì call ngAfterViewlint đợi truy vấn @ViewChild nó sẽ gen để giải quyết những gì ta định danh trên directive 
 - <app-child #ngAfterView></app-child>
 - @ViewChild("ngAfterView") ngAfterView : or ElementRef or Component vì ta dùng selector : 'define'

# 9.ngAfterViewChecked 

 - **ngAfterViewChecked** kick hoạt sau bất kỳ chu kỳ phát hiện thay đổi nào nhắm mục tiêu chế độ xem của thành phần.
 - Tại sao dùng **ngAfterViewChecked** cho phép các nhà phát triển tạo điều kiện thuận lợi cho việc phát triển tạo điều kiện phát hiện sự thay dổi ảnh hưởng đến Dom.
  

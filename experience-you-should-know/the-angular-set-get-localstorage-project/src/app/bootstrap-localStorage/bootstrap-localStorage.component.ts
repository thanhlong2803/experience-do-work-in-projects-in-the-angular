import { Component, Injectable } from '@angular/core';
import { User } from '../model/user';
import { localStorageHelper } from '../localStorage/localStorageHelper';

@Component({
  selector: 'app-bootstrap-localStorage',
  templateUrl: './bootstrap-localStorage.component.html',
  styleUrls: ['./bootstrap-localStorage.component.css']
})

export class BootrapAndLocalStorageComponent {
  title = 'Save info user in localStorage';
  public userList: Array<User> = [];
  user: User = new User;

  constructor() {

  }

  ngOnInit() {
    this.setDeault()
    this.getUserLoalStorage();
  }

  btSaveLocalstorage() {

  }

  btAddLocalstorage() {
    this.user.id = this.user.id + 1;
    this.userList.push(this.user);
    localStorageHelper.setItem('userList', this.userList);
    this.setDeault()
    this.getUserLoalStorage();
  }

  btRemoveLocalstorage() {
    localStorageHelper.removeItem('userList');
    this.setDeault();
  }

  btEditLocalstorage(user: User) {
    localStorageHelper.removeItem('userList');
    this.userList.forEach(element => {
      if (element.id == user.id) {
        element.firstname = user.firstname;
        element.lastname = user.lastname;
        element.age = user.age;
        element.address = user.address;
      }
    });
    localStorageHelper.setItem('userList', this.userList);
  }

  btDeleteLocalstorageById(user: User) {
    localStorageHelper.removeItem('userList');
    this.userList.splice(this.userList.findIndex((x: any) => x == user), 1);
    localStorageHelper.setItem('userList', this.userList);
  }

  private setDeault() {
    this.user = new User();
    this.userList = new Array<User>()
  }

  private getUserLoalStorage() {
    var getAllUser = localStorageHelper.getItem<Array<User>>('userList');
    if (getAllUser != undefined && getAllUser != null && getAllUser.length > 0) {
      this.userList = getAllUser;
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
   log:any;
  constructor(private http:HttpClient,private routes:Router) { }
  checkusernameandpassword(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "admin123") {
      localStorage.setItem('username', "admin");
      this.log=true;
      return true;
    }
    else {
      this.log=false
      return false;
    }
  }
  getUsername(){
    localStorage.getItem('username');
  }

  destroyToken(){
    localStorage.removeItem('username');
    this.routes.navigate(['login'])
    return false;
  }


  albumURL="https://jsonplaceholder.typicode.com/albums";
  photoURL="https://jsonplaceholder.typicode.com/photos";


  getUsers():Observable<Data[]> {
    return this.http.get<Data[]>(this.albumURL);
  }

  getUserId(albumId){
  return this.http.get(`${this.photoURL}/?albumId=${albumId}`) ;
  // (this.photoURL+'/?albumId=1') ;
   }

  
}

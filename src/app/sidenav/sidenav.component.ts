import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  logincheck:any;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private ser:UserserviceService) {

    this.logincheck = this.log();
    console.log(this.log());
    }
  ngOnInit() {
  }
  logout(){
    
    this.ser.destroyToken();
    window.onload;
  }
  log(){
    if(localStorage.getItem('username')!= null){
      return true;
      }
       else
       {
          return false;
       }
  }

}

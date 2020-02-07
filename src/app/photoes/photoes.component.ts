import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-photoes',
  templateUrl: './photoes.component.html',
  styleUrls: ['./photoes.component.css']
})
export class PhotoesComponent implements OnInit {
  album:any;
  constructor(private route:ActivatedRoute,private details:UserserviceService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(info => {
      // console.log(info.get('id'));
        this.details.getUserId(info.get('id')).subscribe(c =>{
          // console.log(c);
          this.album = c;
          // console.log(this.album);
          
       })   
      });
      // this.array.push(this.album);

  }

}

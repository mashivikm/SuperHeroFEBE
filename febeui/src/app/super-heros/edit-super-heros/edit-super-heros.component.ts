import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHeros } from '../super-heros';
import { SuperHerosService } from '../super-heros.service';
import { CreateOrUpdateSuperHero } from '../create-or-update-super-hero';

@Component({
  selector: 'app-edit-super-heros',
  templateUrl: './edit-super-heros.component.html',
  styleUrls: ['./edit-super-heros.component.css']
})
export class EditSuperHerosComponent implements OnInit{
  constructor(private route:ActivatedRoute,
    private superHerosService:SuperHerosService,
    private router:Router){}
  
  itemId:string ='';
  superHeros:CreateOrUpdateSuperHero={
    franchise:'',
    imageUrl:'',
    name:'',
    powers:'',
  };

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.route.paramMap.subscribe((params)=>{
      this.itemId=params.get('id') ?? '';
      this.getById();
    })
  }
  getById(){
    this.superHerosService.getById(this.itemId).subscribe((data)=>{
      this.superHeros.franchise=data.franchise;
      this.superHeros.imageUrl=data.imageUrl;
      this.superHeros.name=data.name;
      this.superHeros.powers=data.powers;
    });
  }
  update(){
    this.superHerosService.update(this.itemId,this.superHeros).subscribe(()=>{
      this.router.navigate(["/"]);
    })
  }

}

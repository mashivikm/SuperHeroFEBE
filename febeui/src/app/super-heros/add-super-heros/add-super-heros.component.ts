import { Component, OnInit } from '@angular/core';
import { CreateOrUpdateSuperHero } from '../create-or-update-super-hero';
import { SuperHerosService } from '../super-heros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-super-heros',
  templateUrl: './add-super-heros.component.html',
  styleUrls: ['./add-super-heros.component.css']
})
export class AddSuperHerosComponent implements OnInit{
  constructor(private superHerosService:SuperHerosService,
    private router:Router){}
    superHeros:CreateOrUpdateSuperHero={
      franchise:'',
      imageUrl:'',
      name:'',
      powers:'',
    };

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  create(){
    this.superHerosService.create(this.superHeros).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

}

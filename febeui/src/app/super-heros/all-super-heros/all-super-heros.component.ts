import { Component, OnInit } from '@angular/core';
import { SuperHeros } from '../super-heros';
import { SuperHerosService } from '../super-heros.service';


declare var window:any;
@Component({
  selector: 'app-all-super-heros',
  templateUrl: './all-super-heros.component.html',
  styleUrls: ['./all-super-heros.component.css']
})
export class AllSuperHerosComponent implements OnInit{
  constructor(private superHeroService:SuperHerosService){}
  superHeros: SuperHeros[] = [];
  deleteModel:any;
  itemToDelete:string='';
  ngOnInit(): void {
    // throw new Error(' \Method not implemented.');
    this.deleteModel=new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.getAll();
  }
  openDeletePopup(id:string){
    this.itemToDelete=id;
    this.deleteModel.show();
  }

  getAll(){

    this.superHeroService.get().subscribe((data)=>{
      this.superHeros=data;
    })
  }
  delete(){
    this.superHeroService.delete(this.itemToDelete).subscribe
    (()=>{
      this.superHeros=this.superHeros.filter(_ => _._id !== this.itemToDelete);
      this.deleteModel.hide();
    })
  }
}

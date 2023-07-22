import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SuperHeros } from './super-heros';
import { CreateOrUpdateSuperHero } from './create-or-update-super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHerosService {

  constructor(private http:HttpClient) {}
  get(){
    return this.http.get<SuperHeros[]>("http://localhost:3000/super-heros");
  }
  create(superHeros:CreateOrUpdateSuperHero){
    return this.http.post("http://localhost:3000/super-heros",superHeros);
  }
  getById(id:string){
    return this.http.get<SuperHeros>('http://localhost:3000/super-heros/${id}'); 
  }
  update(id:string,superHero:CreateOrUpdateSuperHero){
    return this.http.put('http://localhost:3000/super-heros/${id}',superHero);
  }
  delete(id:string){
    return this.http.delete('http://localhost:3000/super-heros/${id}');
  }
}

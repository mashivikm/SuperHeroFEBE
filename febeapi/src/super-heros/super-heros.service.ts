import { Injectable } from '@nestjs/common';
import { SuperHeroDocument, SuperHeros } from './schema/super-heros.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SuperHerosService {
    constructor(@InjectModel(SuperHeros.name) private superHeroModel:Model<SuperHeroDocument>){}

    async getAll():Promise<SuperHeros[]>{
        return this.superHeroModel.find().exec();
    }
    async create(superHeros:SuperHeros){
        const newSuperHeros=new this.superHeroModel(superHeros);
        return newSuperHeros.save();
    }
    async getById(id:string){
        return await this.superHeroModel.findById(id).exec();
    }
    async update(id:string,superHeros:SuperHeros){
        return await this.superHeroModel.findByIdAndUpdate(id,superHeros,{new:true,});
    }
    async delete(id:string){
        return await this.superHeroModel.findByIdAndRemove(id);
    }
}

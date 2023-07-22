import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { SuperHeros } from './schema/super-heros.schema';

@Controller('super-heros')
export class SuperHerosController {
    constructor(private superHerosService:SuperHerosService){}
    @Get()
    async getAll(){
        return this.superHerosService.getAll();
    }
    @Post()
    async createSuperHeros(@Body() superHeros:SuperHeros){
        return this.superHerosService.create(superHeros);
    }
    @Get("/:id")
    async getById(@Param('id') id:string){
        return this.superHerosService.getById(id);
    }
    @Put('/:id')
    async updateSuperHeros(@Param('id') id:string,@Body() superHeros:SuperHeros){
        return await this.superHerosService.update(id,superHeros);
    }
    @Delete('/:id')
    async deleteSuperHero(@Param('id') id: string) {
        await this.superHerosService.delete(id);
}

}

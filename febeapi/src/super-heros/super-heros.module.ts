import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperHerosSchema } from './schema/super-heros.schema';
import { SuperHerosService } from './super-heros.service';
import { SuperHerosController } from './super-heros.controller';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
            name:'SuperHeros',
            schema: SuperHerosSchema,
            collection:'SuperHeros'
            }
        ])
    ],
    providers:[SuperHerosService],
    controllers: [SuperHerosController]
})
export class SuperHerosModule {
}

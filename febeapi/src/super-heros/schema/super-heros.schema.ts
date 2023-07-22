import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
export type SuperHeroDocument=SuperHeros & Document;


@Schema({collection:"Super-Hero"})
export class SuperHeros{
    @Prop()
    name:string;

    @Prop()
    powers:string;

    @Prop()
    franchise:string;

    @Prop()
    imageUrl:string;
}
export const SuperHerosSchema =SchemaFactory.createForClass(SuperHeros)

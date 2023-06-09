//importacion librerias a usar, y de interfaces y clases
import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Lugares} from './interfaces/lugares.interfaces';//contiene los atributos del modelos a usar
import {CreateLugarDTO} from './dto/lugares.dto';

//clase que sera usada dentro de controlador de persona, para el uso de las peticiones.
@Injectable()
export class LugaresService {
    constructor(
        @InjectModel('Lugares') private readonly lugaresModel: Model<Lugares> ){}

    //metodo get para obtener todo los personas
    async getLugares():Promise<Lugares[]>{
        const Lugares = await this.lugaresModel.find()
        return Lugares;
    }
    //metodo get para obtener un lugar
    async getLugar(id_lugar: Number):Promise<Lugares>{
        const lugar = await this.lugaresModel.findById(id_lugar)
        return lugar;

    }
    //metodo para crear un lugar
    async createLugar(createLugarDTO: CreateLugarDTO): Promise<Lugares>{
        const lugar = new this.lugaresModel(createLugarDTO);
        await lugar.save();//guarda el lugar.
        return lugar;
    }
    //metodo delete para eliminar un lugar aparitr de un parametro
    async deleteLugar(id_lugar: Number):Promise<Lugares>{
        const deleteLugar = await  this.lugaresModel.findByIdAndDelete(id_lugar);
        return deleteLugar;
    }
    //metodo update para modificar un lugar,mediante un parametro id_lugar
    async updateLugar(id_lugar: Number, createLugarDTO: CreateLugarDTO): Promise<Lugares>{
        const UpdateLugar = await this.lugaresModel.findByIdAndUpdate(id_lugar,createLugarDTO,{new: true}); 
        return UpdateLugar;
    }

}

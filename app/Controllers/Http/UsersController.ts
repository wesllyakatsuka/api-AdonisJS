// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import User from "App/Models/User";


export default class UsersController {
    public async create({request}: HttpContext){
            const { username, name } = request.only(["username", "name"]);
        const user = await User.create({
            username,
            name,
        });
            return user;
        }
    public async index(){
        const all = await User.all();
        return all;
    }
    }


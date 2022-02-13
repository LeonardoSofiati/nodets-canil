import {Router, Request, Response, query} from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let searchAnimal: string = req.query.q as string;

    let list = Pet.getFromName(searchAnimal);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list: list,
        searchAnimal: searchAnimal
    })
}
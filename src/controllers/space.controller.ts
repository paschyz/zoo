import * as express from 'express';
import { SpaceService } from '../services';
const port = process.env.PORT;
const app = express()
import { Request, Response, Router } from 'express';

export class SpaceController {
    private spaceService: SpaceService;
    constructor() {
        this.spaceService = new SpaceService();
    }

    public routes(): Router {
        const router = Router();

        router.get('/', this.getAllSpaces.bind(this));
        // router.post('/', this.createSpace.bind(this));
   

        return router;
    }

    public async getAllSpaces(req: Request, res: Response): Promise<void> {
        try {
            const spaces = await this.spaceService.getAllSpaces();
            res.status(200).json(spaces);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch spaces' });
        }
    }


    // public async createSpace(req: Request, res: Response): Promise<void> {
    //     try {
    //         const spaceData: ISpace = req.body;

    //         const missingFields = this.validateSpace(spaceData);

    //         if (missingFields !== null) {
    //             res.status(400).json({ error: "Please provide all required fields", missingFields });
    //             return;
    //         }

    //         const newSpace = await this.spaceService.createSpace(spaceData);
    //         res.status(201).json(newSpace);
    //     } catch (error) {
    //         res.status(500).json({ error: 'Failed to create space' });
    //     }
    // }




   
}


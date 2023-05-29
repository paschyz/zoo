import { Space,ISpace } from '../models';

export class SpaceService {
    public async getAllSpaces(): Promise<ISpace[]> {
        try {
            const spaces = await Space.find();
            return spaces;
        } catch (error) {
            throw new Error('Failed to fetch spaces');
        }
    }
}
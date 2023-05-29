import { Router } from "express";
import { SpaceController} from "../../controllers";
const v1Router = Router();

const spaceController = new SpaceController();

v1Router.use("/api/v1/spaces", spaceController.routes());

export { v1Router };
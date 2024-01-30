import { Router } from "express";
import usersRoutes from "./users/users.routes.mjs"
const apiRoutes = Router();

apiRoutes.use("/users/" ,usersRoutes )


export default apiRoutes;

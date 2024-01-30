import { Router } from "express";

import UsersViews from "./users.views.mjs";

import asyncWrapper from "../../shared/async-wrapper.mjs";

const usersRoutes = Router();

usersRoutes.get("/", asyncWrapper(UsersViews.getAllUsers));
usersRoutes.post(
  "/new-user",
  asyncWrapper(UsersViews.createNewUser)
);
usersRoutes.get("/:userId", asyncWrapper(UsersViews.getUserById));
usersRoutes.put("/:userId", asyncWrapper(UsersViews.updateUser));
usersRoutes.delete("/:userId", asyncWrapper(UsersViews.deleteUser));



export default usersRoutes;

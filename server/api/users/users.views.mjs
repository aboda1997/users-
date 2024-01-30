import usersController from "./users.controller.mjs";

import { AppError } from "../../shared/app-error.mjs";

export default class usersViews {
  static async getAllUsers(req, res) {
    try {
      const usersData = await usersController.getAllUsers(
      );
      res.send({
        users: usersData,
      });
    } catch (error) {
      throw new AppError(error);
    }
  }
  static async getUserById(req, res) {
    try {
      const queryData = {
        userId: req.params.userId,
        
      };

      const userData = await usersController.getUserById(
        queryData
      );
      res.send({
        user: userData,
      });
    } catch (error) {
      throw new AppError(error);
    }
  }
  static async createNewUser(req, res) {
    try {
      const queryData = {
      ...req.body
        
      };
      const result = await usersController.createNewUser(
        queryData
      );
      res.send({
        result
      });
    } catch (error) {
      throw new AppError(error);
    }
  }
  static async updateUser(req, res) {
    try {
      const queryData = {
        userId: req.params.userId,
        ...req.body
        
      };
      const userData = await usersController.updateUser(
        queryData
      );
      res.send({
        user: userData,
      });
    } catch (error) {
      throw new AppError(error);
    }
  }
  static async deleteUser(req, res) {
    try {
      const queryData = {
        userId: req.params.userId,
        
      };
      const userData = await usersController.deleteUser(
        queryData
      );
      res.send({
        user: userData,
      });
    } catch (error) {
      throw new AppError(error);
    }
  }

}

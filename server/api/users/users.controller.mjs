import UsersModel from "./users.model.mjs";
import Validations from "../../shared/validations.mjs";
import { BadRequestError } from "../../shared/app-error.mjs";
import MESSAGES from "../../shared/messages.mjs";
import {STUDENT_NAME_ARABIC_REGEX , EMAIL_REGEX } from "../../shared/regexes.mjs"; 
export default class UsersController {
  static async getAllUsers() {

    return UsersModel.getAllUsers();
  }
  static async getUserById(queryData) {
    await UsersController.validateUserId(
      queryData.userId,
    );
    return await UsersModel.getUserById( queryData.userId);
  }
  static async createNewUser(queryData) {
   await UsersController.validateUserData(
      queryData,
    );
    
    return UsersModel.createNewUser( queryData);
  }
  static async updateUser(queryData) {
    await UsersController.validateUserId(
      queryData.userId,
    );
    await UsersController.validateUserData(
      queryData,
    );

    return await UsersModel.updateUser( queryData );
  }
  static async deleteUser(queryData) {
    await UsersController.validateUserId(
      queryData.userId,
    );
    
    return await UsersModel.deleteUser( queryData.userId);
  }

  static async validateUserId(userId){
    if (Validations.isEmpty(userId) || !Validations.isInteger(userId)  ){
      throw new BadRequestError(MESSAGES.INVALID_USER);
    }
  }

  static async validateUserData(userData){
    await  UsersController.validateEmail(userData.Email);  
    await  UsersController.validateAge(userData.Age);  
    await  UsersController.validateCountry(userData.Country);  
    await  UsersController.validateMobile(userData.Mobile);  
    await  UsersController.validateName(userData.Name);  
  
  }
  static async validateEmail(Email){
    if (Validations.isEmpty(Email)){
      throw new BadRequestError(MESSAGES.EMAIL_REQUIRED);
    }
    if (!Validations.regexTest(Email , EMAIL_REGEX )){
      throw new BadRequestError(MESSAGES.EMAIL_INVALID);
    }
  }
  static async validateCountry(country){
    if (Validations.isEmpty(country)){
      throw new BadRequestError(MESSAGES.COUNTRY_REQUIRED);
    }
  }
  static async validateAge(Age){
    if (!Validations.isInteger(Age)){
      throw new BadRequestError(MESSAGES.BAD_REQUEST_ERROR);
    }
  }
  static async validateName(name){
    if (Validations.isEmpty(name)){
      throw new BadRequestError(MESSAGES.ARABIC_NAME_REQUIRED);

    }
    if (!Validations.regexTest(name,STUDENT_NAME_ARABIC_REGEX)){
      throw new BadRequestError(MESSAGES.ARABIC_NAME_INVALID);
      
    }
    if (Validations.lengthBetween(100 , 200)){
      throw new BadRequestError(MESSAGES.ARABIC_NAME_BAD_LENGTH);
      
    }
  }
  static async validateMobile(mobile){
    if (Validations.isEmpty(mobile)){
      throw new BadRequestError(MESSAGES.MOBILE_REQUIRED);
    }
    if (!Validations.isNumbersOnly(mobile)){
      throw new BadRequestError(MESSAGES.BAD_REQUEST_ERROR);
    } 
  }
}

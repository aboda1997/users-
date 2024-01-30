
import { UnprocessableEntityError } from "./app-error.mjs";
import MESSAGES from "./messages.mjs";
import {

  EMAIL_REGEX,
  NUMBERS_ONLY_REGEX,
  
} from "./regexes.mjs";

export default class Validations {
  static run(
    isValid,
    message = MESSAGES.GENERIC_VALIDATION_ERROR,
    error = null
  ) {
    if (!isValid) {
      throw new UnprocessableEntityError(message, error);
    }
    return true;
  }


  static required(value) {
    return !Validations.isEmpty(value);
  }


  static lengthBetween(value, min, max) {
    return !Validations.isEmpty(value)
      ? String(value).trim().length >= min && String(value).trim().length <= max
      : true;
  }

  /**
   * @returns { Boolean } true if the value is falsy or the value matches
   * the given regex
   */
  static regexTest(value, regex) {
    return !Validations.isEmpty(value) ? regex.test(value) : true;
  }


  static isNumber(value) {
    return Validations.isEmpty(value) || typeof value === "number";
  }

  /**
   * @returns { Boolean } true if the value  is an integer number
   */
  static isInteger(value) {
  
    return !Number.isNaN(Number(value)) && Number.isInteger(Number(value));
  }

  /**
   * @param value the value to validate
   * @returns { Boolean } true if the value is empty or is of type string
   */
  static isString(value) {
    return Validations.isEmpty(value) || typeof value === "string";
  }

  
  static isNumbersOnly(value) {
    return Validations.regexTest(value, NUMBERS_ONLY_REGEX);
  }

  /**
   * @param domain the domain of the email (e.g., .edu.eg)
   * @returns { Boolean } true if the value is falsy or is a valid email
   */
  static isEmail(value, domain = "") {
    if (Validations.isEmpty(value)) return true;
    const isValid = Validations.regexTest(value, EMAIL_REGEX);
    if (!isValid) return false;
    return domain ? value.endsWith(domain) : true;
  }
  static isEmpty (value ){
    return (
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === "") 
    );
  }

}

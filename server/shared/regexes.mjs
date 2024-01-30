/* eslint-disable security/detect-unsafe-regex */


export const STUDENT_NAME_ARABIC_REGEX = /^[\u0621-\u064A ]+$/;

export const NUMBERS_ONLY_REGEX = /^[0-9]*$/;

export const EMAIL_REGEX =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/;

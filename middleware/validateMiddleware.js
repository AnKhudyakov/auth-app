import { body } from "express-validator";

export const validateMiddlewareReg = [
  body("user_name", "Name must be from 2 to 10 chars").isLength({
    min: 2,
    max: 10,
  }),
  body("email", "Incorrect email").isEmail(),
  body("password", "Password must be from 5 to 10 chars").isLength({
    min: 5,
    max: 10,
  }),
];

export const validateMiddlewareLogin = [
  body("email", "Incorrect email").isEmail(),
  body("password", "Password must be from 5 to 10 chars").isLength({
    min: 5,
    max: 10,
  }),
];
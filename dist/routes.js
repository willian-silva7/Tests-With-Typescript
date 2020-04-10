"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
var routes = express_1.Router();
routes.get('/', function (request, response) {
    var user = CreateUser_1.default({
        name: 'willsombra',
        email: 'will@hotmail.com',
        password: '123456',
        techs: ['node js', 'React Native', 'React JS']
    });
    console.log(user.password);
    return response.json(user);
});
exports.default = routes;

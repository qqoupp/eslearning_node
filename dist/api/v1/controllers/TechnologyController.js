"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTechnologies = void 0;
const Technology_1 = __importDefault(require("../../../db/models/Technology"));
const getTechnologies = async (req, res) => {
    const technologies = await Technology_1.default.findAll();
    res.send(technologies);
};
exports.getTechnologies = getTechnologies;
//# sourceMappingURL=TechnologyController.js.map
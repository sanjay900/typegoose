"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const mongoose = require("mongoose");
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const connect = () => new Promise((resolve, reject) => mongoose.connect(`mongodb://localhost:${MONGO_PORT}/typegoosetest`, {}, (err) => (err ? reject(err) : resolve())));
exports.initDatabase = () => connect()
    .then(() => mongoose.connection.db.dropDatabase())
    // recreate all indices
    .then(() => Promise.all(Object.keys(mongoose.models).map((modelName) => __awaiter(this, void 0, void 0, function* () {
    yield mongoose.models[modelName].createIndexes();
}))));
exports.closeDatabase = () => mongoose.connection.close();
//# sourceMappingURL=mongoConnect.js.map
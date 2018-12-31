"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const prop_1 = require("../../prop");
const typegoose_1 = require("../../typegoose");
const car_1 = require("./car");
const user_1 = require("./user");
let Rating = class Rating extends typegoose_1.Typegoose {
};
__decorate([
    typegoose_1.prop({ ref: car_1.Car }),
    __metadata("design:type", Object)
], Rating.prototype, "car", void 0);
__decorate([
    typegoose_1.prop({ ref: user_1.User }),
    __metadata("design:type", Object)
], Rating.prototype, "user", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Rating.prototype, "stars", void 0);
__decorate([
    prop_1.arrayProp({ items: Array }),
    __metadata("design:type", Array)
], Rating.prototype, "location", void 0);
Rating = __decorate([
    __1.index({ car: 1, user: 1 }, { unique: true }),
    __1.index({ location: '2dsphere' })
], Rating);
exports.Rating = Rating;
exports.model = new Rating().getModelForClass(Rating);
//# sourceMappingURL=rating.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.heroSchema = new mongoose_1.Schema({
    createdAt: { type: Date, default: Date.now },
    name: String
});
//# sourceMappingURL=hero.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.dailyTipsSchema = new mongoose_1.Schema({
    createdAt: { type: Date, default: Date.now },
    title: { type: String },
    description: { type: String }
});
//# sourceMappingURL=dailyTips.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.heroSchema = new mongoose_1.Schema({
    createdAt: { type: Date, default: Date.now },
    name: String
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYXMvaGVyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrQztBQUV2QixRQUFBLFVBQVUsR0FBVyxJQUFJLGlCQUFNLENBQUM7SUFDekMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUM1QyxJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUMsQ0FBQyIsImZpbGUiOiJzY2hlbWFzL2hlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IHZhciBoZXJvU2NoZW1hOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXG4gIG5hbWU6IFN0cmluZ1xufSk7Il19
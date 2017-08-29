import mongoose = require("mongoose");
import { Document, Model } from "mongoose";
import { DailyTips as DailyTipsInterface } from "../interfaces/dailytips";
import { dailyTipsSchema } from "../schemas/dailyTips";

export interface DailyTipsModel extends DailyTipsInterface, Document {}

export interface DailyTipsModelStatic extends Model<DailyTipsModel> {}

export const DailyTips = mongoose.model<DailyTipsModel, DailyTipsModelStatic>("DailyTips", dailyTipsSchema);
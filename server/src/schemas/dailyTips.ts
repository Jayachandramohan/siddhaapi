import { Schema } from "mongoose";

export var dailyTipsSchema: Schema = new Schema({
  createdAt: { type: Date, default: Date.now },
  title: { type:String},
  description: {type:String}
});
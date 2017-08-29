"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// model
var dailyTips_1 = require("../models/dailyTips");
/**
 * @class DailyTipsApi
 */
var DailyTipsApi = (function () {
    function DailyTipsApi() {
    }
    /**
     * Create the api.
     * @static
     */
    DailyTipsApi.create = function (router) {
        // GET
        router.get("/dailyTips", function (req, res, next) {
            console.log("Request body", req.body);
            new DailyTipsApi().list(req, res, next);
        });
        // POST
        router.post("/dailyTips", function (req, res, next) {
            console.log("Request body", req.body);
            new DailyTipsApi().create(req, res, next);
        });
    };
    /**
     * Add a new Tips.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    DailyTipsApi.prototype.create = function (req, res, next) {
        // create hero
        var dailyTips = new dailyTips_1.DailyTips(req.body);
        console.log("Request dailyTips", dailyTips);
        dailyTips.save().then(function (dailyTips) {
            res.json(dailyTips.toObject());
            next();
        }).catch(next);
    };
    /**
     * List all heros.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    DailyTipsApi.prototype.list = function (req, res, next) {
        // get tips
        dailyTips_1.DailyTips.find().then(function (dailyTips) {
            console.log('daily tips retrieved: ', dailyTips);
            res.json(dailyTips.map(function (dailyTips) { return dailyTips.toObject(); }));
            next();
        }).catch(next);
    };
    return DailyTipsApi;
}());
exports.DailyTipsApi = DailyTipsApi;
//# sourceMappingURL=dailyTips.js.map
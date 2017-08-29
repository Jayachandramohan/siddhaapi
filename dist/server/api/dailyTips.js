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
            console.log("Request body for GET", req.body);
            new DailyTipsApi().list(req, res, next);
        });
        // POST
        router.post("/dailyTips", function (req, res, next) {
            console.log("Request body for POST", req.body);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9kYWlseVRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxRQUFRO0FBQ1IsaURBQStEO0FBRS9EOztHQUVHO0FBQ0g7SUFBQTtJQXVEQSxDQUFDO0lBckRDOzs7T0FHRztJQUNXLG1CQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFFakMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFJLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtZQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBR0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksNkJBQU0sR0FBYixVQUFjLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDM0QsY0FBYztRQUNkLElBQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUztZQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDJCQUFJLEdBQVgsVUFBWSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ3pELFdBQVc7UUFDWCxxQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQzNELElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFHSCxtQkFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksb0NBQVkiLCJmaWxlIjoiYXBpL2RhaWx5VGlwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cHJlc3NcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UsIFJlcXVlc3QsIFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5cbi8vIG1vZGVsXG5pbXBvcnQgeyBEYWlseVRpcHMsIERhaWx5VGlwc01vZGVsfSBmcm9tIFwiLi4vbW9kZWxzL2RhaWx5VGlwc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBEYWlseVRpcHNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIERhaWx5VGlwc0FwaSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgYXBpLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZShyb3V0ZXI6IFJvdXRlcikge1xuICAgIFxuICAgIC8vIEdFVFxuICAgIHJvdXRlci5nZXQoXCIvZGFpbHlUaXBzXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IGJvZHkgZm9yIEdFVFwiLCByZXEuYm9keSk7XG4gICAgICBuZXcgRGFpbHlUaXBzQXBpKCkubGlzdChyZXEsIHJlcywgbmV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBQT1NUXG4gICAgcm91dGVyLnBvc3QoXCIvZGFpbHlUaXBzXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IGJvZHkgZm9yIFBPU1RcIiwgcmVxLmJvZHkpO1xuICAgICAgbmV3IERhaWx5VGlwc0FwaSgpLmNyZWF0ZShyZXEsIHJlcywgbmV4dCk7XG4gICAgfSk7XG5cbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgVGlwcy5cbiAgICogQHBhcmFtIHJlcSB7UmVxdWVzdH0gVGhlIGV4cHJlc3MgcmVxdWVzdCBvYmplY3QuXG4gICAqIEBwYXJhbSByZXMge1Jlc3BvbnNlfSBUaGUgZXhwcmVzcyByZXNwb25zZSBvYmplY3QuXG4gICAqIEBwYXJhbSBuZXh0IHtOZXh0RnVuY3Rpb259IFRoZSBuZXh0IGZ1bmN0aW9uIHRvIGNvbnRpbnVlLlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgIC8vIGNyZWF0ZSBoZXJvXG4gICAgY29uc3QgZGFpbHlUaXBzID0gbmV3IERhaWx5VGlwcyhyZXEuYm9keSk7XG4gICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IGRhaWx5VGlwc1wiLCBkYWlseVRpcHMpO1xuICAgIGRhaWx5VGlwcy5zYXZlKCkudGhlbihkYWlseVRpcHMgPT4ge1xuICAgICAgcmVzLmpzb24oZGFpbHlUaXBzLnRvT2JqZWN0KCkpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pLmNhdGNoKG5leHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3QgYWxsIGhlcm9zLlxuICAgKiBAcGFyYW0gcmVxIHtSZXF1ZXN0fSBUaGUgZXhwcmVzcyByZXF1ZXN0IG9iamVjdC5cbiAgICogQHBhcmFtIHJlcyB7UmVzcG9uc2V9IFRoZSBleHByZXNzIHJlc3BvbnNlIG9iamVjdC5cbiAgICogQHBhcmFtIG5leHQge05leHRGdW5jdGlvbn0gVGhlIG5leHQgZnVuY3Rpb24gdG8gY29udGludWUuXG4gICAqL1xuICBwdWJsaWMgbGlzdChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgIC8vIGdldCB0aXBzXG4gICAgRGFpbHlUaXBzLmZpbmQoKS50aGVuKGRhaWx5VGlwcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZGFpbHkgdGlwcyByZXRyaWV2ZWQ6ICcsIGRhaWx5VGlwcyk7XG4gICAgICByZXMuanNvbihkYWlseVRpcHMubWFwKGRhaWx5VGlwcyA9PiBkYWlseVRpcHMudG9PYmplY3QoKSkpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pLmNhdGNoKG5leHQpO1xuICB9XG5cblxufSJdfQ==

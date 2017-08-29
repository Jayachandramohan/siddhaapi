"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// model
var hero_1 = require("../models/hero");
/**
 * @class HerosApi
 */
var HerosApi = (function () {
    function HerosApi() {
    }
    /**
     * Create the api.
     * @static
     */
    HerosApi.create = function (router) {
        // DELETE
        router.delete("/heros/:id([0-9a-f]{24})", function (req, res, next) {
            new HerosApi().delete(req, res, next);
        });
        // GET
        router.get("/heros", function (req, res, next) {
            new HerosApi().list(req, res, next);
        });
        router.get("/heros/:id([0-9a-f]{24})", function (req, res, next) {
            new HerosApi().get(req, res, next);
        });
        // POST
        router.post("/heros", function (req, res, next) {
            new HerosApi().create(req, res, next);
        });
        // PUT
        router.put("/heros/:id([0-9a-f]{24})", function (req, res, next) {
            new HerosApi().update(req, res, next);
        });
    };
    /**
     * Create a new hero.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    HerosApi.prototype.create = function (req, res, next) {
        // create hero
        var hero = new hero_1.Hero(req.body);
        hero.save().then(function (hero) {
            res.json(hero.toObject());
            next();
        }).catch(next);
    };
    /**
     * Delete a hero.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    HerosApi.prototype.delete = function (req, res, next) {
        // verify the id parameter exists
        var PARAM_ID = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        var id = req.params[PARAM_ID];
        // get hero
        hero_1.Hero.findById(id).then(function (hero) {
            // verify hero exists
            if (hero === null) {
                res.sendStatus(404);
                next();
                return;
            }
            hero.remove().then(function () {
                res.sendStatus(200);
                next();
            }).catch(next);
        }).catch(next);
    };
    /**
     * Get a hero.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    HerosApi.prototype.get = function (req, res, next) {
        // verify the id parameter exists
        var PARAM_ID = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        var id = req.params[PARAM_ID];
        // get hero
        hero_1.Hero.findById(id).then(function (hero) {
            // verify hero was found
            if (hero === null) {
                res.sendStatus(404);
                next();
                return;
            }
            // send json of hero object
            res.json(hero.toObject());
            next();
        }).catch(next);
    };
    /**
     * List all heros.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    HerosApi.prototype.list = function (req, res, next) {
        // get heros
        hero_1.Hero.find().then(function (heros) {
            res.json(heros.map(function (hero) { return hero.toObject(); }));
            next();
        }).catch(next);
    };
    /**
     * Update a hero.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    HerosApi.prototype.update = function (req, res, next) {
        var PARAM_ID = "id";
        // verify the id parameter exists
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        var id = req.params[PARAM_ID];
        // get hero
        hero_1.Hero.findById(id).then(function (hero) {
            // verify hero was found
            if (hero === null) {
                res.sendStatus(404);
                next();
                return;
            }
            // save hero
            Object.assign(hero, req.body).save().then(function (hero) {
                res.json(hero.toObject());
                next();
            }).catch(next);
        }).catch(next);
    };
    return HerosApi;
}());
exports.HerosApi = HerosApi;
//# sourceMappingURL=hero.js.map
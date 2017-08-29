"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var morgan = require("morgan");
var errorHandler = require("errorhandler");
var mongoose = require("mongoose");
var cors = require("cors");
var dailyTips_1 = require("./api/dailyTips");
/**
 * The server.
 *
 * @class Server
 */
var Server = (function () {
    /**
     * @constructor
     */
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add api
        this.api();
    }
    /**
     * Bootstrap the application.
     * @static
     */
    Server.bootstrap = function () {
        return new Server();
    };
    /**
     * Create REST API routes
     *
     * @class Server
     */
    Server.prototype.api = function () {
        var router = express.Router();
        // configure CORS
        var corsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "http://localhost:4200",
            preflightContinue: false
        };
        router.use(cors(corsOptions));
        // root request
        router.get("/", function (req, res, next) {
            res.json({ announcement: "Welcome to our API." });
            next();
        });
        // create API routes
        dailyTips_1.DailyTipsApi.create(router);
        // wire up the REST API
        this.app.use("/api", router);
        // enable CORS pre-flight
        router.options("*", cors(corsOptions));
    };
    /**
     * Configure application
     *
     * @class Server
     */
    Server.prototype.config = function () {
        // morgan middleware to log HTTP requests
        this.app.use(morgan("dev"));
        //use json form parser middlware
        this.app.use(bodyParser.json());
        //use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // connect to mongoose
        // Equivalent to the above code
        mongoose.connect("mongodb://siddha:siddha@ds157723.mlab.com:57723/siddha", {
            useMongoClient: true
        });
        mongoose.connection.on("error", function (error) {
            console.error(error);
        });
        //catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHandler());
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map
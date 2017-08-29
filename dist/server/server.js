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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsYUFBQztBQUFELENBckdBLEFBcUdDLElBQUE7QUFyR1ksd0JBQU0iLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyID0gcmVxdWlyZShcImVycm9yaGFuZGxlclwiKTtcbmltcG9ydCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCB7IERhaWx5VGlwc0FwaSB9IGZyb20gXCIuL2FwaS9kYWlseVRpcHNcIjtcblxuLyoqXG4gKiBUaGUgc2VydmVyLlxuICpcbiAqIEBjbGFzcyBTZXJ2ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG5cbiAgLyoqXG4gICAqIFRoZSBleHByZXNzIGFwcGxpY2F0aW9uLlxuICAgKiBAdHlwZSB7QXBwbGljYXRpb259XG4gICAqL1xuICBwdWJsaWMgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uO1xuXG4gIC8qKlxuICAgKiBCb290c3RyYXAgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGJvb3RzdHJhcCgpOiBTZXJ2ZXIge1xuICAgIHJldHVybiBuZXcgU2VydmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL2NyZWF0ZSBleHByZXNzanMgYXBwbGljYXRpb25cbiAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcblxuICAgIC8vY29uZmlndXJlIGFwcGxpY2F0aW9uXG4gICAgdGhpcy5jb25maWcoKTtcblxuICAgIC8vYWRkIGFwaVxuICAgIHRoaXMuYXBpKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFJFU1QgQVBJIHJvdXRlc1xuICAgKlxuICAgKiBAY2xhc3MgU2VydmVyXG4gICAqL1xuICBwdWJsaWMgYXBpKCkge1xuICAgICB2YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICAgLy8gY29uZmlndXJlIENPUlNcbiAgICAgY29uc3QgY29yc09wdGlvbnM6IGNvcnMuQ29yc09wdGlvbnMgPSB7XG4gICAgICBhbGxvd2VkSGVhZGVyczogW1wiT3JpZ2luXCIsIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIkNvbnRlbnQtVHlwZVwiLCBcIkFjY2VwdFwiLCBcIlgtQWNjZXNzLVRva2VuXCJdLFxuICAgICAgY3JlZGVudGlhbHM6IHRydWUsXG4gICAgICBtZXRob2RzOiBcIkdFVCxIRUFELE9QVElPTlMsUFVULFBBVENILFBPU1QsREVMRVRFXCIsXG4gICAgICBvcmlnaW46IFwiaHR0cDovL2xvY2FsaG9zdDo0MjAwXCIsXG4gICAgICBwcmVmbGlnaHRDb250aW51ZTogZmFsc2VcbiAgICAgfTtcbiAgICAgcm91dGVyLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XG5cbiAgICAgIC8vIHJvb3QgcmVxdWVzdFxuICAgIHJvdXRlci5nZXQoXCIvXCIsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgcmVzLmpzb24oeyBhbm5vdW5jZW1lbnQ6IFwiV2VsY29tZSB0byBvdXIgQVBJLlwiIH0pO1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlIEFQSSByb3V0ZXNcbiAgICBEYWlseVRpcHNBcGkuY3JlYXRlKHJvdXRlcik7XG5cbiAgICAvLyB3aXJlIHVwIHRoZSBSRVNUIEFQSVxuICAgIHRoaXMuYXBwLnVzZShcIi9hcGlcIiwgcm91dGVyKTtcblxuICAgIC8vIGVuYWJsZSBDT1JTIHByZS1mbGlnaHRcbiAgICByb3V0ZXIub3B0aW9ucyhcIipcIiwgY29ycyhjb3JzT3B0aW9ucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBhcHBsaWNhdGlvblxuICAgKlxuICAgKiBAY2xhc3MgU2VydmVyXG4gICAqL1xuICBwdWJsaWMgY29uZmlnKCkge1xuICAgIC8vIG1vcmdhbiBtaWRkbGV3YXJlIHRvIGxvZyBIVFRQIHJlcXVlc3RzXG4gICAgdGhpcy5hcHAudXNlKG1vcmdhbihcImRldlwiKSk7XG5cbiAgICAvL3VzZSBqc29uIGZvcm0gcGFyc2VyIG1pZGRsd2FyZVxuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbiAgICAvL3VzZSBxdWVyeSBzdHJpbmcgcGFyc2VyIG1pZGRsd2FyZVxuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICAgICAgZXh0ZW5kZWQ6IHRydWVcbiAgICB9KSk7XG5cbiAgICAvLyBjb25uZWN0IHRvIG1vbmdvb3NlXG5cbiAgICAvLyBFcXVpdmFsZW50IHRvIHRoZSBhYm92ZSBjb2RlXG4gICAgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGI6Ly9zaWRkaGE6c2lkZGhhQGRzMTU3NzIzLm1sYWIuY29tOjU3NzIzL3NpZGRoYVwiLCB7XG4gICAgICB1c2VNb25nb0NsaWVudDogdHJ1ZVxuICAgIH0pO1xuICAgICAgXG4gICBcbiAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uKFwiZXJyb3JcIiwgZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG5cbiAgICAvL2NhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXG4gICAgdGhpcy5hcHAudXNlKGZ1bmN0aW9uKGVycjogYW55LCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xuICAgICAgICBlcnIuc3RhdHVzID0gNDA0O1xuICAgICAgICBuZXh0KGVycik7XG4gICAgfSk7XG5cbiAgICAvL2Vycm9yIGhhbmRsaW5nXG4gICAgdGhpcy5hcHAudXNlKGVycm9ySGFuZGxlcigpKTtcbiAgfVxufSJdfQ==

// express
import { NextFunction, Response, Request, Router } from "express";

// model
import { DailyTips, DailyTipsModel} from "../models/dailyTips";

/**
 * @class DailyTipsApi
 */
export class DailyTipsApi {

  /**
   * Create the api.
   * @static
   */
  public static create(router: Router) {
    
    // GET
    router.get("/dailyTips", (req: Request, res: Response, next: NextFunction) => {
      console.log("Request body for GET", req.body);
      new DailyTipsApi().list(req, res, next);
    });

    // POST
    router.post("/dailyTips", (req: Request, res: Response, next: NextFunction) => {
      console.log("Request body for POST", req.body);
      new DailyTipsApi().create(req, res, next);
    });

    
  }

  /**
   * Add a new Tips.
   * @param req {Request} The express request object.
   * @param res {Response} The express response object.
   * @param next {NextFunction} The next function to continue.
   */
  public create(req: Request, res: Response, next: NextFunction) {
    // create hero
    const dailyTips = new DailyTips(req.body);
    console.log("Request dailyTips", dailyTips);
    dailyTips.save().then(dailyTips => {
      res.json(dailyTips.toObject());
      next();
    }).catch(next);
  }

  /**
   * List all heros.
   * @param req {Request} The express request object.
   * @param res {Response} The express response object.
   * @param next {NextFunction} The next function to continue.
   */
  public list(req: Request, res: Response, next: NextFunction) {
    // get tips
    DailyTips.find().then(dailyTips => {
      console.log('daily tips retrieved: ', dailyTips);
      res.json(dailyTips.map(dailyTips => dailyTips.toObject()));
      next();
    }).catch(next);
  }


}
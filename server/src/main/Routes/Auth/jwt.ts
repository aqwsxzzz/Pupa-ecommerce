import passportJWT, { Strategy as JWTStrategy } from "passport-jwt";
import passport from "passport";
import { UserModel } from "../../Models/User";

require("dotenv").config();

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },

    (jwtpayload: any, done: any) => {
      UserModel.findById(jwtpayload.id, (err: any, user: any) => {
        if (err) return err;
        return done(null, user);
      });
    }
  )
);

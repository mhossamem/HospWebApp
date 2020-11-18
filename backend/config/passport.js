import { getUserById } from '../models/userModel.js';
import passport from 'passport';
import { secret } from './db.js';
import pkg from 'passport-jwt';


export function passportdo()
{
    const ExtractJWT = pkg.ExtractJwt;
    const JWTStrategy = pkg.Strategy;

    let opts = {};
    opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme("jwt"); 
    opts.secretOrKey = secret;
    passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
        getUserById(jwt_payload.data._id, (err, User)=> {
            if(err){
                return done(err, false);
            }
            if(User)
            {
                return done(null,User);
            }
            else
            {
                return done(null, false);
            }

        });
    }));
}
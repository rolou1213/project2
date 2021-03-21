const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Store = require('../models/stores');


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Store.findOne({ 'googleId': profile.id }, function(err, store) {
      if (err) return cb(err);
      if (store) {
        return cb(null, store);
      } else {
        // we have a new student via OAuth!
        var newStore = new Store({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newStore.save(function(err) {
          if (err) return cb(err);
          return cb(null, newStore);
        });
      }
    });
  }
));

passport.serializeUser(function(store, done) {
    done(null, store.id);
});

passport.deserializeUser(function(id, done) {
    Store.findById(id, function(err, store) {
      done(err, store);
    });
  });


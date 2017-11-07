var mongoose = require('mongoose');
var router = require('express').Router();
var Subscriber = mongoose.model('Subscriber');


//lookup subscriber information
router.param('subscriberId', function(req, res, next, id) {

  //basic check to see if id is vald
  if ( !mongoose.Types.ObjectId.isValid(id) ) {
    return res.status(400).send({
      errors: {
        'subscriberId': `\`${id}\` is not a valid subscriberId`
      }
    });
  }

  //fetch subscriber
  Subscriber.findById(id).exec(function (err, subscriber){
    if(err) { //database error - pass to error handler
      return next(err);
    } else if (!subscriber) {
      return res.status(404).send({
        errors: {
          'subscriberId' : 'Subscriber does not exist'
        } 
      });
    }

    req.subscriber = subscriber;
    next();
  });

});


router.route('/:subscriberId')
  .get(function(req, res, next){ // get single subscriber
    //return subscriber as is from database
    res.json(req.subscriber);
  })
  .put(function(req, res, next){ //update a single subscriber

      var subscriber = req.subscriber;

      //update select fields
      for(var field in req.body) {
        if(field in [
                      "phoneNumber",
                      "username",
                      "password",
                      "domain",
                      "status"
                    ]) {
          subscriber[field] = req.body[field]
        }
      }

      //update features - append, don't replace
      if(typeof req.body.features !=='undefined') {
        for(var feature in req.body.features) {
          for(var field in feature) {
            subscriber.features[feature].field = feature[field];
          }
        }
      }

      subscriber.save(function(err){
        if(err) {
          next(err); //schema error - pass along to handler
        } else {
          res.json(subscriber);
        }
      });
  });


router.route('/')
  .get(function(req, res, next){ // get all subscribers

    Subscriber.find().exec(function(err, subscribers){
      if(err) {
        return next(err);  //mongoose error - pass along to handler
      }
      
      res.json(subscribers);
    });
  })
  .post(function(req, res, next){ // create new subscriber
    var subscriber = new Subscriber(req.body);

    subscriber.save(function(err){
      if(err) {
        next(err); //schema error - pass along to handler
      } else {
        //return created subscriber with uuid
        res.json(subscriber);
      }
    });
  });

module.exports = router;

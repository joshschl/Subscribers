var router = require('express').Router();

router.use('/subscribers', require('./subscribers'));

//process validation errors
router.use(function(err, req, res, next){
  console.log(err);

  if(err.name === 'ValidationError') {

    var errors = {};
    for(var field in err.errors) {
      errors[field] = err.errors[field].message;
    }

    return res.status(400).send({
      errors: errors
    });
  }
  else {
    next(err);
  }
});


module.exports = router;
'use strict';

var mongoose = require('mongoose');
var validator = require('validator');
var uniqueValidator = require('mongoose-unique-validator');

// Schema

var SubscriberSchema = mongoose.Schema({
  
  phoneNumber: {
    type: String,
    unique: '`{VALUE}` is assigned to another subscriber',
    validate: {
      validator: function(phoneNumber) {
        return validator.isMobilePhone(phoneNumber, 'en-CA');
      },
      message: '`{VALUE}` is not a valid Canadian phone number'
    },
    required: true
  },

  username: {
    type: String,
    unique: '`{VALUE}` already in use',
    maxLength: [255, '`{VALUE}` exceeds the maximum allowed length ({MAXLENGTH})'],
    required: true
  },

  password: {
    type: String,
    maxLength: [255, '`{VALUE}` exceeds the maximum allowed length ({MAXLENGTH})'],
    required: true
  },

  domain: {
    type: String,
    validate: {
      validator: function(domain) {
        return /([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}/.test(domain);
      },
      message: '`{VALUE}` is not a valid domain name'
    },
    required: true
  },

  status: {
    type: String,
    enum: ['ACTIVE','DISABLED'],
    required: true
  },

  features: {
    callForwardNoReply: {
      provisioned: {
        type: Boolean,
        default: false
      },
      destination: {
        type: String,
        validate: {
          validator: function(dest) {

            var number = dest.match(/^tel:\+(.*)$/);
            if (number) {
              return validator.isMobilePhone(number[1], 'any');
            }
            return false;
          },
          message: '`{VALUE}` is not a valid forwarding destination'
        },
        required: [
          function() {
            return this.features.callForwardNoReply.provisioned;
          },
          '`{PATH}` is required if features.callForwardNoReply is provisioned'
        ]
      }
    }
  }
});

SubscriberSchema.plugin(uniqueValidator);

var Subscriber = mongoose.model('Subscriber', SubscriberSchema);

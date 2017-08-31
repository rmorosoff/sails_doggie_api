/**
 * Dog.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    dogName: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 15,
      unique: true
    },
    ownerFirstName: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 15
    },
    ownerLastName: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 20
    },
    ownerEmail: {
      type: 'email',
      required: true
    },
    dogBreed: {
      type: 'string',
    },
    dogBirthYear: {
      type: 'integer',
      required: true,
      min:  1990,
      max: 2020
    },
    dogGender: {
      type: 'string',
      required: true,
      in: ["male", "female"]
    }

  }
};

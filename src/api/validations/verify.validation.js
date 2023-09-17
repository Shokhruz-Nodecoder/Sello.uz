const Joi = require("joi");

const verificationValidation = (code) => {
    const Verification = Joi.object({
      verification: Joi.number().max(4).required(),
    });
    const { error } = Verification.validate(code);
    return error;
  };

  module.exports = verificationValidation;
import mongoose from 'mongoose';

const phoneValidator = number => {
  const regex = /^\d{2,3}-\d+$/;
  return regex.test(number);
};

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 8,
    required: true,
    validate: {
      validator: phoneValidator,
      message: props =>
        `${props.value} is not a valid phone number! Numbers must have a length of 8 or more and be formed of two parts separated by a hyphen (-), with the first part having two or three digits and the second part consisting of digits`,
    },
  },
});

export const Contact = mongoose.model('Contact', contactSchema);

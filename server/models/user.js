const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  admin: Boolean,
  name: { type: String, required: true },
	userName: { type: String, required: true, index: {unique: true} },
	email: { type: String, index: { unique: true }, required: true },
  password: { type: String, required: true },
  age: { type: Number, min: 18, max: 99, require: true },
  address: { type: String, required: true },
});


UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
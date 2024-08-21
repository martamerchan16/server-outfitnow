const { Schema, model } = require("mongoose")


const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      minLength: 6
    },
    userName: {
      type: String,
      required: [true, 'User Name is required.']
    },
    phone: {
      type: String,
      minLength: 9
    },
    avatar: {
      type: String,
    },
    styles: [{
      type: Schema.Types.ObjectId,
      ref: 'Style'
    }],
    gallery: {
      type: [String],
    },
    aboutMe: {
      type: String,
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER', 'STYLIST'],
      default: 'USER'
    },
    services: [{
      type: Schema.Types.ObjectId,
      ref: 'Service'
    }],
    location: {
      type: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    }
  },
  {
    timestamps: true
  }
)

userSchema.index({ location: '2dsphere' })

const User = model("User", userSchema)


module.exports = User;

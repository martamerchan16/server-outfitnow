const { Schema, model } = require("mongoose")

const bookingSchema = new Schema(
    {
        measurements: {

            height: {
                type: Number,
                required: [true, 'Height is required.'],
            },

            topSize: {
                type: String,
                required: [true, 'Size is required.'],
                enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
            },

            bottomSize: {
                type: String,
                required: [true, 'Size is required.'],
                enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
            },
            shoeSize: {
                type: Number,
                required: [true, 'Size is required.'],
            }
        },
        deadline: {
            type: Date,
            required: true
        },
        comment: {
            type: String,
            maxLength: 100
        },
        stylist: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        client: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        service: {
            type: Schema.Types.ObjectId,
            ref: 'Service'
        },
        pack: {
            type: 'String',
            enum: ['premium', 'basic', 'glam']
        }
    },
    {
        timestamps: true
    }
)

bookingSchema.index({ location: '2dsphere' })

const Booking = model("Booking", bookingSchema)

module.exports = Booking
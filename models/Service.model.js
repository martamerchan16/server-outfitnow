const { Schema, model } = require("mongoose")

const serviceSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required.'],
        },
        images: {
            type: [String],
            required: [true, 'Image is required.'],
        },

        packs: {
            basic: {
                price: {
                    type: Number
                },
                description: {
                    type: String
                },
                outfitsIncluded: {
                    type: Number
                },
                homeService: {
                    type: Boolean
                },
                minimumNotice: {
                    type: Number
                }
            },
            premium: {
                price: {
                    type: Number
                },
                description: {
                    type: String
                },
                outfitsIncluded: {
                    type: Number
                },
                homeService: {
                    type: Boolean
                },
                minimumNotice: {
                    type: Number
                }
            },
            glam: {
                price: {
                    type: Number
                },
                description: {
                    type: String
                },
                outfitsIncluded: {
                    type: Number
                },
                homeService: {
                    type: Boolean
                },
                minimumNotice: {
                    type: Number
                }
            }
        }
    },
    {
        timestamps: true
    }
)

const Service = model("Service", serviceSchema)

module.exports = Service
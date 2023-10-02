import mongoose, { Model, model, Schema } from 'mongoose'

var couponSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
        },
        expiry: {
            type: Date,
            required: true,
        },
        discount: {
            type: Number,
            required: true
        }
    }
)

const Coupon: Model<any> = mongoose.model("Coupon", couponSchema)

export = Coupon
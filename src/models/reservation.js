import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const reservationSchema = new Schema({
    code: {
        type: String,
        required: true,
        trim: true
    },
    detailReservation: {
        numberPersons: {
            type: Number,
            required: true,
            min: 1
        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        codeTable: {
            type: String,
            required: true
        },
        zone: {
            type: String,
            required: true
        }
    },
    detailPayment: {
        cardType: {
            type: String,
            enum: ['VISA', 'MASTERCARD'],
            required: true
        },
        cardNumber: {
            type: String,
            required: true
        }
    },
    personalInformation: {
        name:{
            type: String,
            required: true,
            trim: true
        },
        paternalName: {
            type: String,
            required: true,
            trim: true
        },
        maternalName: {
            type: String,
            trim: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
}, {
    versionKey: false,
    timestamps: true
});

reservationSchema.plugin(mongoosePaginate);

export default model('Reservation', reservationSchema);
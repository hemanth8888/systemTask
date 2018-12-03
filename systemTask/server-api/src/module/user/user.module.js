import mongoose, {Schema} from "mongoose";
import validator from "validator";

const userSchem = new Schema({
    email: {
        type : String,
        unique: true,
        required : [true, "Email Is Required"],
        trim  : true,
        validate : {
            validator(email){
                return validator.isEmail(email);
            },
            message: "{value} is Not a valid Email"
        } 
    },
    name : {
        type : String,
        required : [true,"Name Is Required"],
        trim : true,
    },
    address : {
        type : String,
        required : [true,"address Is Required"],
        trim : true,
    },
    gender : {
        type : String,
        required : [true,"Gender Is Required"],
        trim : true,
    },
    phnum : {
        type : String,
        required : [true,"Phone Number Is Required"],
        trim : true,
        unique: true
    },
    Bdate : {
        type : Date,
        required : [true,"Birth Date is Required"],
        trim : true,
        unique: true
    },
    statuss : {
        type : String,
        required : [true,"status Is Required"],
        trim : true
    }
});

export default mongoose.model("User", userSchem);
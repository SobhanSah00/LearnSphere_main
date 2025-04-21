import mongoose, { Schema } from "mongoose"

const TodoSchema = new Schema(
    {
        title: String,
        required: [true, "Title is required"],
        trim: true,
        unique: true,
        maxLength: [100, "Title mush be at most 100 charecter"],
        validate: {
            validator: (value) => value.length > 0,
            message: "Title must be not empty"
        },
        complited: {
            type: Boolean,
            default: false
        },
        dueDate: {
            type: Date,
            default: null
        },
        priroty : {
            type : Number,
            default  :1,
            min: [1, "Priority must be at least 1"],
            max: [5, "Priority must be at most 5"]
        },
        tags : {
            type: [String], 
            enum: ["work", "personal", "urgent"],
            default: ['personal']
        }
    },
    {
        timestamps: true
    }

);

export default Todo = mongoose.model("Todo", TodoSchema);
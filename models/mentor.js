const mongoose = require('mongoose');

const mentorschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    githublink: {
        type:String,
        required : true
    },
    linkedinlink:{
        type : String,
        required : true
    } 
}, {
    timestamps: true
});



const Mentor = mongoose.model('Mentor', mentorschema );

module.exports = Mentor;
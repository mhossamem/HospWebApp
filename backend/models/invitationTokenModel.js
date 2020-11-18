import mongoose from 'mongoose';


const inviteTokenSchema = mongoose.Schema({

    token:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true
    },
    Hospital:{
        type: String,
        Default: 'None'
    },
    createdAt: {type: Date, default: Date.now, expires: '10m'}
 
});
export default mongoose.model('inviteToken',inviteTokenSchema);


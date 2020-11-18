import express from 'express';
const router = express.Router();
import inviteToken from '../models/invitationTokenModel.js';
 

router.route('/').get((req,res) => { 
    inviteToken.find((err, invitationToken) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(invitationToken);
        }
    });

});

router.route('/get').post((req,res) => {
    inviteToken.findOne({token: req.body.token}, (err,inviteToken) =>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(inviteToken);
        }
    });
});

router.route('/delete').post((req,res) => {
    inviteToken.findOneAndRemove({token: req.body.token}, (err) => {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json('Removed Successfully');
        }
    })
    
});

router.route('/generate').post((req, res) => {

    let InviteToken = new inviteToken(req.body);
    InviteToken.save()
        .then(Patient => {

            res.status(200).json({'Token': 'Added successfully'});
        })
        .catch(err => {

            res.status(400).send('Failed to create new record');
        });
});

export default router;
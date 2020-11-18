import express from 'express';
const router = express.Router();


import patient from '../models/patientModel.js';




router.route('/Hospital').post((req, res) => {
    patient.find({Hospital: req.body.Hospital}, (err, patients) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(patients);
        }

    });
});

router.route('/:id').get((req, res) => {

    patient.findById(req.params.id, (err, patient) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(patient);
        }
    });
});

router.route('/n_ID/').post((req, res) => {
    patient.findOne({ n_ID: req.body.n_ID }, (err, patient) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(patient);
        }
    });
});

router.route('/fullNameAr/').post((req, res) => {
    patient.findOne({ fullNameAr: req.body.fullNameAr }, (err, patient) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(patient);
        }
    });
});
router.route('/add').post((req, res) => {

    let Patient = new patient(req.body);
    Patient.save()
        .then(Patient => {

            res.status(200).json({ 'Patient': 'Added successfully' });
        })
        .catch(err => {

            res.status(400).send('Failed to create new record');
        });
});

router.route('/delete/:id').get((req, res) => {


    patient.findByIdAndRemove({ _id: req.params.id }, (err) => {


        if (err) {
            res.json(err);
        }
        else {
            res.json('Removed successfully');
        }
    });
});

router.route('/update/:id').post((req, res) => {


    patient.findById({ _id: req.params.id }, (err, patient) => {


        if (err) {
            res.json(err);
        }
        else {
            patient.updateOne(req.body).then(patient => {
                res.status(200).json({ 'Patient': 'Updated successfully' });
            })
                .catch(err => {
                    res.status(400).send('Failed to update record');
                })



        }
    });
});


export default router;

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let  patientSchema = new Schema({

    fullName: {
        type: String,
        required: true,
    },
    fullNameAr: {
        type: String
    },
    Age: {
        type: Number,
        required:true,
    },
    Height: {
        type: Number,
        required: true
    },
    bldGrp: {
        type: String,
        required: true,
    },
    kAllergies: {
        type:String,
        required: true
    },
    Hospital: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: Number,
        required: true,
        min: 0,
        max: 999999999
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male','Female'],
    },
    n_ID: {
        type: String,
        required: true,
        unique: true
    },
    Nationality: {
        type: String,
        required: true

    },
    submittedBy: {
        type: String,
        rerquired: true,
    },

    dosDialysis: {
        type: String
    },
    oKidneyDisease: {
        type: String
    },
    morbHype: {
        type: Boolean
    },
    morbDM: {
        type: Boolean
    },
    morbIHD: {
        type: Boolean
    },
    morbEpi: {
        type: Boolean
    },
    coMorbOther: {
        type: String
    },
    previousTr: {
        type: String
    },
    fitForTr: {
        type: String    
    },
    potentialRDonors: {
        type: String
    },
    currentAccess:{
        type: String
    },
    dOfAccessCreation:{
        type: String
    },
    compInsuf: {
        type: Boolean
    },
    compInf: {
        type: Boolean
    },
    compAD: {
        type: Boolean
    },
    compDC: {
        type: Boolean
    },
    compOther:{
        type: String
    },
    prevAcc1:{
        type: String,
        Default: 'None'
    },
    prevAcc2:{
        type: String,
        Default: 'None'
    },
    prevAcc3:{
        type: String,
        Default: 'None'
    },
    prevAcc4:{
        type: String,
        Default: 'None'
    },
    Frequency:{
        type: Number
    },
    Duration:{
        type: Number
    },
    Dialyser:{
        type: String
    },
    antiCoagulation:{
        type: String
    },
    antiCoYes:{
        type: String
    },
    hInit: {
        type: String
    },
    hMaint:{
        type: String
    },
    LMWHval: {
        type: String
    },
    antiCoReason: {
        type: String
    },
    dryWt: {
        type: Number
    },
    avgWtGain: {
        type: Number
    },
    dialAdeq :{
        type: Number
    },
    dCompHead: {
        type: Boolean
    },
    dCompHG: {
        type: Boolean
    },
    dCompHOT: {
        type: Boolean
    },
    dCompHET: {
        type: Boolean
    },
    dCompMC : {
        type: Boolean
    },
    dCompAC : {
        type: Boolean
    },
    dCompVom: {
        type: Boolean
    },
    dCompSZ: {
        type: Boolean
    },
    dCompHS: {
        type: Boolean
    },
    dCompIt: {
        type: Boolean
    },
    dCompOther: {
        type: String
    },
    labDate: {
        type: String
    },
    cbcHB: {
        type: Number
    },
    cbcWBC: {
        type: Number
    },
    cbcPlatelets: {
        type: Number
    },
    chemCre: {
        type: Number
    },
    chemUrea: {
        type: Number
    },
    chemSod: {
        type: Number
    },
    chemPot: {
        type: Number
    },
    chemCal: {
        type: Number
    },
    chemPhos: {
        type: Number
    },
    chemAST: {
        type: Number
    },
    chemALT: {
        type: Number
    },
    chemMag:{
        type: Number
    },
    chemAlb: {
        type: Number
    },
    chemAlph: {
        type: Number
    },
    chemOther: {
        type: String,
    },
    Siron: {
        type: Number
    },
    TIBC: {
        type: Number
    },
    Sferitin: {
        type: Number
    },
    hormPTH: {
        type: Number
    },
    hormVITD: {
        type: Number
    },
    hormOther: {
        type: String
    },
    hbsAg: {
        type: String
    },
    hcvAb: {
        type: String
    },
    hivI_II:{
        type: String
    },
    othrSer: {
        type: String
    },
    coagPT: {
        type: Number
    },
    coagPPT: {
        type: Number
    },
    coagINR: {
        type: Number
    },
    cMD1: {
        type: String
    },
    cMD2: {
        type: String
    },
    cMD3: {
        type: String
    },
    cMD4: {
        type: String
    },
    cMD5: {
        type: String
    },
    cMD6: {
        type: String
    },
    cMD7: {
        type: String
    },
    cMD8: {
        type: String
    },
    cMD9: {
        type: String
    },
    cMD10: {
        type: String
    },
    cMD11: {
        type: String
    },
    cMD12: {
        type: String
    },
    cMD13: {
        type: String
    },
    cMD14: {
        type: String
    },
    cMD15: {
        type: String
    },
    cMD16: {
        type: String
    },
    HepBV: {
        type: String
    },
    HepBVDate: {
        type: String
    },
    InfV: {
        type: String
    },
    InfVDate: {
        type: String
    }

    

});
export default mongoose.model('Patient',patientSchema);

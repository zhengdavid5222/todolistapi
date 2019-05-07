'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
	
var formSchema = new Schema({	
	FirstName: String,
	LastName: String,
	Email: String,
	Country: String,
	EducationLevel: String,
	aac_hgh_scl_grd_dt: String,
	Address1: String,
	City: String,
	State: String,
	Zip: String,
	PrimaryPhone: String,
	Country_Code: String,
	Program: String,
	AnticipatedStartTimeFrame: String,
	comm_key_2: String,
	aac_online_interst: String,
	Military_Status_Desc: String,
	TCPAExpressConsent: String,
	admin_function_2: String,
	aac_100prct_online: String,
	Military: String,
	tcpaExpressConsent: String,
	adminFunction2: String,
	elqSiteId: String,
	FORMNAME: String
},{ strict: false });


module.exports = mongoose.model('forms', formSchema);
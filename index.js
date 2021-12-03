const { Applicant, JobListing } = require('./models');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs'); // for our view (html like pages), we want to use ejs 
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/style'));


app.get('/', function (req, res) {
    res.json({ message: "Welcome to Apple's Job Listings" });
});


app.get('/job-listings', function (req, res) {
    JobListing.findAll()
        .then(function (jobListingList) {
            console.log('Found All Job Listings', jobListingList);
            //res.json({ artist: artistList });
            res.render('job-listings', { jobListingList });
        })
        .catch(function (err) {
            console.log('ERROR', err);
            res.json({message:'Error occured, please try again...'})
        });

});


app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
})




//Create JobListing
// JobListing.create({
//     role: 'Senior Art Editor',
//     department: 'Marketing',
//     postDate: 'Nov 16, 2021',
//     location: 'Santa Clara Valley',
//     description: 'description1',
//     favorited: 1
// })
//     .then(function (newJobListing) {
//         console.log(newJobListing.toJSON());
//     })
//     .catch(function (error) {
//         console.log(error);
//     })



// Applicant.create({
//     firstName:'Justin',
//     lastName: 'Luu', 
//     email:'jluu@email.com'
// })
//     .then(function (newApplicant) {
//         console.log(newApplicant.toJSON());
//     })
//     .catch(function (error) {
//         console.log(error);
//     })



//Add a applicant to a joblisting
// Applicant.findOne({
//     where: {
//         firstName:'Justin'
//     }
// })
// .then(function(applicantFound){
//     console.log('Applicant Found', applicantFound.toJSON());

//     JobListing.findOne({
//         where:{
//             role: 'Tools Software Engineer'
//         }
//     })
//     .then(function(jobListingFound){
//         console.log('Job Listing Found', jobListingFound.toJSON());
//         applicantFound.addJobListing(jobListingFound);
//         applicantFound.save();
//     })
//     .catch(function(err){
//         console.log('ERROR', err);
//     });
// })
// .catch(function(err){
//     console.log('ERROR', err);
// });
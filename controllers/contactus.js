let ContactModel = require('../models/contactus')

module.exports = {
    index,
    create,
}

function index(req, res) {
    res.render("contactus/form.ejs")
};

function create(req, res) {
    let names = req.body.name
    let emails = req.body.email
    let messages = req.body.message
    ContactModel.lastContact = {name: names, email: emails, message: messages }
    ContactModel.contactArr.push(ContactModel.lastContact)
    res.render('contactus/submit.ejs', {submitted: ContactModel.lastContact} )
    res.redirect('stores/index')
}
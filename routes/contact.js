var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'erragul93@gmail.com',
            pass: '181721121Ragul@'
        }
    });

    var mailOptions = {
        from: 'erragul93@gmail.com',
        to: 'erragul93@gmail.com',
        subject: 'My Nodemailer App',
        text: 'You received below details..Name: ' + req.body.name + 'Email: ' + req.body.email + 'Message: ' + req.body.message,
        html: '<p>You received below details..</p><ul><li>Name:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Message:' + req.body.message + '</li></ul>'
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.redirect('/');
            // console.log('Message sent : ' + info.response);

        }
    })

})

module.exports = router;
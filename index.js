const express = require('express');
const app = new express();
const PORT = 8080;
const cors = require('cors');
app.listen(PORT, (err)=>{
    const connect = !err ? 'Server is live' : err;
    console.log(connect);
});
const mongo = require('mongoose');
mongo.connect('mongodb+srv://nesacv:GnuuMSlJRaMCO6W5@cluster0-lbs9r.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true},
    (err) => {
        //useNewUrlParser: true;
        const connect = !err ? 'Connected to db' : err;
        console.log(connect);
    })
app.use(express.json());
app.use(cors());
const contact = require('./models/contact');

app.post('/contact', (request,response)=>{
    const data = request.body;
    const contactmsg = {
        fullname: data.fullname,
        email: data.email,
        message: data.message
    };

    const contactdata = new contact(contactmsg);
    contactdata.save((err,doc)=>{
        if(!err){
            return response.json({
                status: true,
                message: 'I have received and will respond soon'
            })
        }else{
            return response.json({
                status: false,
                message: 'An error occured.Your message was not sent'
            })
        }
    });
});
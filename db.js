const mongoose = require('mongoose')


const connect = mongoose.connect('mongodb+srv://onkar:onkaratlas@cluster0.xxociih.mongodb.net/auth?retryWrites=true&w=majority')



module.exports = {connect}

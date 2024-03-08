const mongoose = require('mongoose')

const connectDB = (url) => {
 return mongoose.connect(url, {
     useNewUrlParser: true, // for deprecation, don't need this in version 6
     useCreateIndex: true, // for deprecation, don't need this in version 6
     useFindAndModify: false, // for deprecation, don't need this in version 6
     useUnifiedTopology: true // for deprecation, don't need this in version 6
   })
}

module.exports = connectDB


  
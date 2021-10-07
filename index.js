const express = require('express');

// morgan is added for better logging functionality 
const morgan = require('morgan');

// mongoose library
const mongoose = require('mongoose'); 

// imports of all the schemas
let generalInfoModel = require('./models/generalInfo');
let residenceInfoModel = require('./models/resInfo');
let contactInfoModel = require('./models/contactInfo');
let employmentInfoModel = require('./models/employmentInfo');
let educationInfoModel = require('./models/educationInfo');
let incomeInfoModel = require('./models/incomeInfo');
let healthInfoModel = require('./models/healthInfo');
let legalInfoModel = require('./models/legalInfo');


// conection to the mongodb with mongoose 
mongoose
  .connect("mongodb://localhost:27017/RestoringJusticeDB")  
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  }); 

// the express app
const app = express();    
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// initialize routes
app.use('/api',require('./router/api'));

app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

/*** CRUD for all schemas ***/

// api endpoint to retrieve all of general information
app.get('/generalInfo/', (req, res, next) => {
    generalInfoModel.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
});

// api endpoint to retrieve all of residence information
app.get('/residenceInfo/', (req, res, next) => {
    generalInfoModel.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
});

// api endpoint to retrieve all of contact information
app.get('/contactInfo/', (req, res, next) => {
    generalInfoModel.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
});




// endpoint to see all of education information
app.get('/educationInfo/', (req, res, next) => {
    educationInfoModel.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
  });

// endpoint to see all of employment information
app.get('/employmentInfo/', (req, res, next) => {
    employmentInfoModel.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
  });

// endpoint to see all of income information
app.get('/incomeInfo/', (req, res, next) => {
    incomeInfoModel.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
  });

// endpoint to see all of health information
app.get('/healthInfo/', (req, res, next) => {
    healthInfoModel.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
  });

// endpoint to see all of legal information
app.get('/legalInfo/', (req, res, next) => {
    legalInfoModel.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
  });  

// api endpoint to create general information 
app.post('/creategenInfo', (req, res, next) => {
    generalInfoModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('General Information is added to the database');
        }
    });
});

// api endpoint to create residence information 
app.post('/createresInfo', (req, res, next) => {
    residenceInfoModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Residence Information is added to the database');
        }
    });
});

// api endpoint to create contact information
app.post('/createcontactInfo', (req, res, next) => {
    contactInfoModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Contact Information is added to the database');
        }
    });
});

// endpoint that creates the education information
app.post('/createeduInfo', (req, res, next) => {
    educationInfoModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Education Information is added to the database');
        }
    });
  });

// endpoint that creates the employment information
app.post('/createempInfo', (req, res, next) => {
    employmentInfoModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Employment Information is added to the database');
        }
    });
  });

// endpoint that creates the income information
app.post('/createincomeInfo', (req, res, next) => {
    incomeInfoModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Income Information is added to the database');
        }
    });
  });

  // endpoint that creates the health information
app.post('/createhealthInfo', (req, res, next) => {
    healthInfoModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Health Information is added to the database');
        }
    });
  });

// endpoint that creates the legal information
app.post('/createlegalInfo', (req, res, next) => {
    legalInfoModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Legal Information is added to the database');
        }
    });
  });


// server port
const port = 3000;
app.listen(port, () => {
    console.log(`Back-end app listening at http://localhost:${port}`); // link to server

});


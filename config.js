const readline = require('readline');

var currentEnv = process.env.NODE_ENV || 'local';

var contactTest = process.env.CONTACT || false;

var config = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ENV set up

config.env = {
    production: false,
    local: false
};

config.env[currentEnv] = true;

config.firebase = {
  apiKey: "AIzaSyBDugxOr0kCfZ6Vxn4JQomt4uB-0W1SE88",
  authDomain: "carneasada-f0617.firebaseapp.com"
}

config.email = {
  account: null,
  password: null
}

config.setContactFormEmail = function(){

  // TODO: consider making a proc file
  
  if(currentEnv === 'production'){

    rl.question('Please enter your email:', (email) => {
     console.log(`Email set as: ${email}`);
     config.email.account = email;

     rl.question('Please enter your password: ', (pwd) => {
       config.email.password = pwd;
       console.log("--- credentials logged as ---")
       console.log("EMAIL:", config.email.account )
       console.log("PASSWORD:", "hidden for your protection" )
       console.log("--- server is ready to go, testing auth ---")
       rl.close();
       // TODO: run some login test
     });

    });

  }else{

    if(contactTest === 'true'){

      rl.question('Please enter your email:', (email) => {
       console.log(`Email set as: ${email}`);
       config.email.account = email;

       rl.question('Please enter your password: ', (pwd) => {
         console.log(`Password set as: ${pwd}`);
         config.email.password = pwd;
         console.log(config.email)
         console.log("Running in dev mode, contact form will be run. Happy Testing.")
         rl.close();
       });

      });

    }else{
      console.log("Running in dev mode, contact form will fail.")
    }

  }
}

// Set Values
if(currentEnv === 'production'){

}

if(currentEnv === 'local'){

}

module.exports = config;

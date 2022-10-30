
const express = require("express");
const bodyParser = require("body-parser");
const repository = require("./repository");
const mercadopago = require("mercadopago");
const app = express();
const port = process.env.PORT || 3000;
mercadopago.configure({
    access_token: "TEST-1266598737144382-102013-5774e3810768d910243f3340ebefc338-382213317",
  });


server.listen(port, function (error) {
    if (error){
        console.log ('something went wrong', error)
    } else { 
        console.log( 'server is listening on port ' + port)

    }
})

const mercadopago = require("mercadopago");
let preference = {
    items: [
      {
        title: "Sin Despedida No hay Adios",
        unit_price: 2000,
        quantity: 1,
}],
      back_urls: {
        success: "http://localhost:3000/feedback",
        failure: "http://localhost:3000/feedback",
        pending: "http://localhost:3000/feedback",
      },
      auto_return: "approved",
    };
  
   
  mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
  })
  .catch(function (error) {
    console.log(error);
  });


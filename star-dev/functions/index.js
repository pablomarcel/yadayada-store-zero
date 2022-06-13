/* eslint-disable */
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
// const stripe =
// require("stripe")("sk_test_uoIX6zqNf8DtQsukQhBKeiBQ006RDu1qK1");
const app = express();
app.use(cors({origin: true}));
app.use(express.json());

// app.post('/payments/create', async (req, res) =>{
//   try{
//     const { amount, shipping } = req.body;
//     const paymentIntent = await stripe.paymentIntents.create({
//       shipping,
//       amount,
//       currency: 'usd'
//     })
//     res.status(200).send(paymentIntent.client_secret)
//   } catch (err){
//     res.status(500).json({statusCode:500,
//     message: err.message})
//   }
// })

app.get("*", (req, res)=>{
  res.status(404).send("404, Not Found. Message from Firebase Function");
});

exports.api = functions.https.onRequest(app);

// where do I specify shipping and amount?

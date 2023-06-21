// inlcude express 
const express = require("express");
const path = require("path")
const fs = require("fs").promises


//googleapis
const { google } = require("googleapis");
const docs = require('@googleapis/docs')

const sheets = google.sheets('v4');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];




//initilize express
const app = express();

//set app view engine
app.set("view engine", "ejs");

 
app.use("/", (req, res) => {
    res.status(200).send("server working...")
})


;(async () => {


    const auth = new google.auth.GoogleAuth({
        keyFile: "horizon-382811-fcf20e40a458.json", //the key file
        //url to spreadsheets API
        scopes:  ['https://www.googleapis.com/auth/spreadsheets','https://www.googleapis.com/auth/documents'], 
    });

    const authClient = await auth.getClient();

const client = await docs.docs({
    version: 'v1',
    auth: authClient
});

const createResponse = await client.documents.create({
    requestBody: {
      title: 'Your new document!',
    },
});

console.log(createResponse.data);

    // //Auth client Object
    // const authClientObject = await auth.getClient();


    // // //Google sheets instance
    // const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });


    // // // spreadsheet id
    // const spreadsheetId = "1i9ct-Vshr9hxOhSJILw6k2VrltVEJEzLJcWjAqYeeQU";


    // //  //write data into the google sheets
    // await googleSheetsInstance.spreadsheets.values.append({
    //     auth, //auth object
    //     spreadsheetId, //spreadsheet id
    //     range: "Sheet1!A:B", //sheet name and range of cells
    //     valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
    //     resource: {
    //         values: [["Git followers tutorial", "Mia Roberts"]],
    //     },
    // });

    // //Read front the spreadsheet
    // const readData = await googleSheetsInstance.spreadsheets.values.get({
    //     auth, //auth object
    //     spreadsheetId, // spreadsheet id
    //     range: "Sheet1!A:A", //range of cells to read from.
    // })

    // console.log(readData)



})().catch(err => {
    console.log("error ======== ",  err)
})
 


app.post("/", async (req, res) => {
    const { request, name } = req.body;


})


app.listen(3000, () => {
    console.log("server is working on port", 3000)
})
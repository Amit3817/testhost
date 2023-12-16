const express=require('express');
const { default: mongoose } = require('mongoose');
const authroutes=require("./routes/authroutes");
const cors=require("cors");
const bodyParser = require('body-parser');
const path=require("path")
const fs = require('fs');

const dotenv=require('dotenv');
dotenv.config();

const app=express();
app.use(cors({origin:true}));
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.dburl)
  .then(result=>{
    app.listen(2000);
    console.log("connected");
}).catch(err=>{
    console.log(err);
});
app.use(authroutes);
app.get('/download-pdf/:affidavit', (req, res) => {
  const {affidavit}=req.params
  const pdfFilePath = path.join(__dirname, `pdf/${affidavit}.pdf`);

  // Check if the file exists
  if (!fs.existsSync(pdfFilePath)) {
    return res.status(404).send('PDF file not found');
  }

  // Set headers for file download
  res.setHeader('Content-Disposition', 'attachment; filename=downloaded.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  // Stream the PDF file to the response
  const fileStream = fs.createReadStream(pdfFilePath);
  fileStream.pipe(res);
});
app.use('/',(req,res)=>{
  res.json({msg:"success"})
})
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

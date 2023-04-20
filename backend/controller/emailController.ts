import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
import { Response, Request } from 'express';

const sendEmail = async (data:any):Promise<void>=>{
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "buivanduynhat@gmail.com", // generated ethereal user
        pass: "umbtxiryojbhvgjq", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"BuiDay Shop 👻" <foo@gmail.com>', // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      text: data.text, // plain text body
      html: data.html, // html body
    });
}
  

export default sendEmail
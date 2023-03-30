const multer = require("multer");
const sharp = require("sharp");
const path = require("path");

const multerStorage = multer.diskStorage({
    destination:function(req:any, file:any, cb:any){
        cb(null,path.join(__dirname,"../public/images"));
    },
    filename: function(req:any, file:any, cb:any){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null,file.fieldname + "-" + uniqueSuffix + ".jpeg");
    }
})

const multerFilter = (req:any, file:any, cb:any) =>{
    if(file.mimetype.startsWith("image")){
        cb(null,true);
    }else{
        cb(
            {
                message:"Unsupported file format",
            },
            false
        )
    }
}

export const productImageResize = async(req:any, res:any, next:any)=>{
    if(!req.files) return next();
    await Promise.all(
        req.files.map(async(file:any)=>{
         await sharp(file.path)
            .toFormat("jpeg")
            .jpeg({quality:90})
            .toFile(`public/images/products/${file.filename}`);
    }))
    next();
}

export const blogImageResize = async(req:any, res:any, next:any)=>{
    if(!req.files) return next();
    await Promise.all(
        req.files.map(async(file:any)=>{
         await sharp(file.path)
            .toFormat("jpeg")
            .jpeg({quality:90})
            .toFile(`public/images/blogs/${file.filename}`);
    }))
    next();
}


export const uploadPhoto = multer({
    storage:multerStorage,
    fileFilter:multerFilter,
    limits:{fieldSize:200000},
})

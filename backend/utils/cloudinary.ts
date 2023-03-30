const cloudinary = require('cloudinary');

// Configuration 
cloudinary.config({
  cloud_name: "dlqieazbj",
  api_key: "272993419191242",
  api_secret: "GmSHL1ELYDoKv6UfgqrtnRBcFxo"
});

export const cloudinaryUploading = async(fileToUpload:any,images?:string) =>{
    return new Promise((resolve)=>{
        cloudinary.uploader.upload(fileToUpload,(result:any)=>{
            resolve(
                {
                    url:result.secure_url,
                    asset_id:result.asset_id,
                    public_id:result.public_id,
                },
                // {
                //     resource_type: "auto",
                // }
            )
        })
    })
}

export const cloudinaryDelete = async(fileToDelete:any) =>{
    return new Promise((resolve)=>{
        cloudinary.uploader.destroy(fileToDelete,(result:any)=>{
            resolve(
                {
                    url:result.secure_url,
                    asset_id:result.asset_id,
                    public_id:result.public_id
                },
                // {
                //     resource_type:"auto",
                // }
            )
        })
    })
}


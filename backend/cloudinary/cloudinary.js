const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: "avinashprj",
    api_key: "631674358759139",
    api_secret: "M4LfH_G8rWT2BC0rHFOoTSekfQo",
});
module.exports = cloudinary;

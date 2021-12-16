const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FamilyPicturesSchema = new Schema({
    title: String,
    image: String,
    email: String
});

const FamilyPictures = mongoose.model('FamilyPictures',FamilyPicturesSchema);
module.exports = FamilyPictures;

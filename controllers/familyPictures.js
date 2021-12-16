const FamilyPictures = require('../models/FamilyPictures'); 

module.exports = async (req, res)=>{
    const FamilyPictures = await FamilyPictures.find({}).sort({_id: -1}).limit({limit: 20});
    console.log(req.session)
    res.render('familypictures',{
        FamilyPictures
    })
}

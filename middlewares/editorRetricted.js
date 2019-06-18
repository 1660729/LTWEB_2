module.exports = (req,res,next)=>{
    if(!req.user){
        var retUrl = req.originalUrl;
        return res.redirect(`/account/login?retUrl=${retUrl}`);
    }
    var user = req.user;
    if(req.user.PhanQuyen!= '3'){
        return res.redirect('/error');
    }
    next();
}
module.exports = (req,res,next)=>{
    if(!req.user){
        var retUrl = req.originalUrl;
        return res.redirect(`/account/login?retUrl=${retUrl}`);
    }
    var user = req.user;
    if(req.user.role!= 'editor'){
        return res.redirect('/error');
    }
    next();
}
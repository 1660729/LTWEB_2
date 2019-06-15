module.exports = (req,res,next)=>{
    if(!req.user){
        var retUrl = req.originalUrl;
        return res.redirect(`/account/login?retUrl=${retUrl}`);
    }
    if(req.user.role !== 'writer'){
        return res.redirect('/error');
    }
    next();
}
if(process.env.NODE_END === 'production'){
    module.exports = {
        mongoUIR : "mongodb://lincxx:lincxx@ds163918.mlab.com:63918/vidjot-prod"
    }
} else {
    mongoUIR : 'mongodb://localhost/vidjot-dev'
}
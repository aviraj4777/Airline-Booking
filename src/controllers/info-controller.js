const info = (req, res) => { 
    return res.json({
        success: true,
        message: 'Welcome to the API',
        error: {},
        data: {}
    });
};
module.exports = {
    info
}
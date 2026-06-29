const response = (res, statusCode, message, data = null) => {
    const resData = {
        status: statusCode >= 200 && statusCode < 300 ? 'success' : 'fail',
        message: message,
    };
    if (data) {
        resData.data = data;
    }
    return res.status(statusCode).json(resData);
};

module.exports = { response };

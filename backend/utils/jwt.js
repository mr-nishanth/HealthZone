const sendToken = ({ userObj, statusCode, response }) => {
    // create a token for the user
    const token = userObj.getJWTToken();
    // create cookie options for the token to expire in 7 days
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    // if the environment is production, then set secure to true
    // if (process.env.NODE_ENV === "production") {
    //   options.secure = true;
    // }

    response.status(statusCode).cookie('token', token, options).json({
        success: true,
        userObj,
        token,
    });
};

module.exports = sendToken;

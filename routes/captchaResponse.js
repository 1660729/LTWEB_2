let request = require('request');    // Sử dụng thư viện request để gửi request lên Google API
let data = req.body;  // Dữ liệu từ form submit lên bao gồm thông tin đăng ký và captcha response
let captchaResponse = data.captchaResponse;

if (captchaResponse) {
    request({
        url: 'https://www.google.com/recaptcha/api/siteverify',
        method: 'POST',
        form: {
            secret: '6LfUSakUAAAAADorvkvDWNko6sgALz9-3iseVqqA',
            response: captchaResponse
        }
    }, function (error, response, body) {
        // Parse String thành JSON object
        try {
            body = JSON.parse(body);
        } catch (err) {
            body = {};
        }

        if (!error && response.statusCode == 200 && body.success) {
            // Captcha hợp lệ, xử lý tiếp phần đăng ký tài khoản       
        } else {
            // Xử lý lỗi nếu Captcha không hợp lệ
        }
    });
} else {
    // Xử lý lỗi nếu không có Captcha
}

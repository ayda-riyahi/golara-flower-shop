function validateInput(input) {
    input.value = input.value.replace(/\D/g, '').substring(0, 11);
}

function validateMobile() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    const invalidMessage = document.getElementById('invalidMessage');
    if (mobileNumber.length !== 11) {
        invalidMessage.style.display = 'block';
    } else {
        invalidMessage.style.display = 'none';
        document.getElementById('showMobileNumber').innerText = mobileNumber;
        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.add('visible');
    }
}
function verifyCode() {
    const verificationCode = document.getElementById('verificationCode').value;
    if (verificationCode === '111') {
        alert('ورود موفقیت‌آمیز بود');
        window.location.href = 'main.html';
    }
}
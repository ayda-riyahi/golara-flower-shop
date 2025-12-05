function validateInput(input) {
    const pattern = /^[\u0600-\u06FF\s]+$/;
    if (!pattern.test(input.value)) {
        input.classList.add('invalid');
        input.setCustomValidity('لطفاً فقط حروف فارسی وارد کنید');
    } else {
        input.classList.remove('invalid');
        input.setCustomValidity('');
    }
}

function validatePhone(input) {
    const pattern = /^\d{11}$/;
    if (!pattern.test(input.value)) {
        input.classList.add('invalid');
        input.setCustomValidity('شماره تلفن باید شامل 11 رقم باشد');
    } else {
        input.classList.remove('invalid');
        input.setCustomValidity('');
    }
}

function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('orderForm');
    const inputs = form.querySelectorAll('.input-field');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity() || input.value === '') {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    if (!isValid) {
        document.getElementById('invalidMessage').style.display = 'block';
    } else {
        document.getElementById('invalidMessage').style.display = 'none';
        document.getElementById('successMessage').classList.remove('hidden');
    }
}
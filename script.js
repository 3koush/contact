document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // يمنع الصفحة من التحديث بعد الضغط على الزر
    
    // نجيب قيم الحقول
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // نعمل كائن لتخزين البيانات
    const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // نخزن البيانات في localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // نعيد تعيين الفورم بعد التخزين
    document.getElementById('contactForm').reset();

    alert('Your data has been saved locally!'); // رسالة تأكيد
});

// لما الصفحة تتحمل، نجيب البيانات من localStorage ونعبي الحقول
window.onload = function() {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('name').value = formData.name || '';
        document.getElementById('email').value = formData.email || '';
        document.getElementById('phone').value = formData.phone || '';
        document.getElementById('message').value = formData.message || '';
    }
};
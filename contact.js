/* ===================================
   PLATTO - Contact Form Handler
   Utilise Formspree pour l'envoi email
   =================================== */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const btnReset = document.getElementById('btnReset');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        if (!validateForm()) return;

        // État chargement
        setLoading(true);
        formError.hidden = true;

        try {
            const data = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                form.hidden = true;
                formSuccess.hidden = false;
            } else {
                throw new Error('Erreur serveur');
            }
        } catch (err) {
            formError.hidden = false;
            setLoading(false);
        }
    });

    btnReset.addEventListener('click', function () {
        form.reset();
        form.hidden = false;
        formSuccess.hidden = true;
        formError.hidden = true;
        clearErrors();
    });

    // ---- Validation ----
    function validateForm() {
        clearErrors();
        let valid = true;

        const fields = ['name', 'email', 'subject', 'message'];
        fields.forEach(function (id) {
            const el = document.getElementById(id);
            if (!el.value.trim()) {
                markError(el);
                valid = false;
            }
        });

        const emailEl = document.getElementById('email');
        if (emailEl.value && !isValidEmail(emailEl.value)) {
            markError(emailEl);
            valid = false;
        }

        return valid;
    }

    function markError(el) {
        el.classList.add('error');
        el.addEventListener('input', function () {
            el.classList.remove('error');
        }, { once: true });
    }

    function clearErrors() {
        ['name', 'email', 'subject', 'message'].forEach(function (id) {
            const el = document.getElementById(id);
            if (el) el.classList.remove('error');
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function setLoading(loading) {
        submitBtn.disabled = loading;
        btnText.hidden = loading;
        btnIcon.hidden = loading;
        btnLoading.hidden = !loading;
    }
});

const InitializeDropdowns = () => {
    const radiosDropa = document.querySelectorAll('.custom-dropdown__checkbox');
    radiosDropa.forEach(radio => {
        radio.onchange = () => {
            const radioChecked = document.querySelector(`input[name="${radio.name}"]:checked`).nextElementSibling;
            const out = document.querySelector(`[outfor="${radio.name}"]`);
            out.textContent = radioChecked.textContent;
        }
    });
}
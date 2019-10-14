mod('.more', '.description-btn', '.overlay', '.popup-close', 'more-splash');
function mod(btn, btnArray, overlayClass, btnClose, btnStyle) {
    let btnModWind = document.querySelector(btn),
        btnDescription = document.querySelectorAll(btnArray);
    
    activateModeWind(btnModWind);
    
    btnDescription.forEach(function(event) {
        activateModeWind(event);
    });

    function activateModeWind(btn) {
        let overlay = document.querySelector(overlayClass),
            btnCloseModWind = document.querySelector(btnClose);
    
            btn.addEventListener('click', function() {
            this.classList.add(btnStyle);
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    
        btnCloseModWind.addEventListener('click', function() {
            btn.classList.remove(btnStyle);
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
}

module.exports = mod;

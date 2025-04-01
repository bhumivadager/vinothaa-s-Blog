function execute2PL() {
    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let lockState = document.getElementById("lockState");

    lockState.innerHTML = "Phase 1: Acquiring Locks...";

    setTimeout(() => {
        t1.classList.add("locked");
        lockState.innerHTML = "Transaction 1 has acquired a lock.";
    }, 1000);

    setTimeout(() => {
        t2.classList.add("locked");
        lockState.innerHTML = "Transaction 2 has acquired a lock.";
    }, 2000);

    setTimeout(() => {
        lockState.innerHTML = "Phase 2: Releasing Locks...";
    }, 4000);

    setTimeout(() => {
        t1.classList.remove("locked");
        t1.classList.add("unlocked");
        lockState.innerHTML = "Transaction 1 released the lock.";
    }, 5000);

    setTimeout(() => {
        t2.classList.remove("locked");
        t2.classList.add("unlocked");
        lockState.innerHTML = "Transaction 2 released the lock. 2PL complete!";
    }, 6000);
}
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function fadeInOnScroll() {
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Run on load
});
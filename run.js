(function twitchboxlooter() {

    setTimeout(() => {
        var balance = window.document.querySelector("p[data-test-selector='balance-string']");
        console.log(balance.textContent);
        var box = window.document.querySelector("div[class = 'claimable-bonus__icon tw-flex']");
        if (box) {
            box.click();
            console.log("looted!");
        }
        setTimeout(twitchboxlooter, 55000);
    }, 5000);
})()


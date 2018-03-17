if (typeof web3 == "undefined") {
    $(document).ready(function () {
        console.log("Sadly it looks like you do not have MetaMask installed");
        $('head').append('<link rel="stylesheet" href="./src/css/nometamask.css" type="text/css" />');
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    })
} else {
    function TestConnected() {
        console.log("Is connected = " + web3.isConnected() + "\n");
    }
    TestConnected()
}
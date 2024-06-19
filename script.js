    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }//button C

    function deleteLast() {
        let currentDisplay = document.getElementById('display').value;
        document.getElementById('display').value = currentDisplay.slice(0, -1);
    }// DEL

    function calculateResult() {
        let currentDisplay = document.getElementById('display').value;
        try {
            let result = eval(currentDisplay);
            document.getElementById('display').value = result;
        } catch (error) {
            alert('Invalid Expression');
        }
    }// onclick '='
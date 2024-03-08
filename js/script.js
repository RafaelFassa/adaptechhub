document.addEventListener("DOMContentLoaded", function () {
    var content = document.getElementById('content');
    var speakButton = document.getElementById('speakButton');

    speakButton.addEventListener('click', function () {
        var selectedText = getSelectedText();
        if (selectedText) {
            speak(selectedText);
        } else {
            function customAlert(message) {
                var alertBox = document.createElement('div');
                alertBox.style.position = 'fixed';
                alertBox.style.top = '50%';
                alertBox.style.left = '50%';
                alertBox.style.transform = 'translate(-50%, -50%)';
                alertBox.style.backgroundColor = '#fff';
                alertBox.style.padding = '20px';
                alertBox.style.border = '2px solid #333';
                alertBox.style.borderRadius = '5px';
                alertBox.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
                alertBox.textContent = message;

                var closeButton = document.createElement('button');
                closeButton.textContent = 'Fechar';
                closeButton.style.marginTop = '10px';
                closeButton.style.padding = '5px 10px';
                closeButton.style.backgroundColor = '#333';
                closeButton.style.color = '#fff';
                closeButton.style.border = 'none';
                closeButton.style.borderRadius = '5px';
                closeButton.style.cursor = 'pointer';
                closeButton.addEventListener('click', function () {
                    document.body.removeChild(alertBox);
                });

                alertBox.appendChild(closeButton);
                document.body.appendChild(alertBox);
            }

            customAlert('Esta é uma mensagem de alerta personalizada.');
        }
    });

    function getSelectedText() {
        var selectedText = '';
        if (window.getSelection) {
            selectedText = window.getSelection().toString();
        } else if (document.selection && document.selection.type != 'Control') {
            selectedText = document.selection.createRange().text;
        }
        return selectedText.trim();
    }

    function speak(text) {
        var speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.lang = 'pt-BR';
        speech.rate = 1.0; // Adjust the rate as needed
        window.speechSynthesis.speak(speech);
    }
});

var elemento = document.getElementById('api');
var btt = document.getElementById('open_api');
var btt_2 = document.getElementById('exit_api')
var img_api = document.getElementById('img_open_api')
var v_libras = document.getElementById('vlibras_btt')
var exit_vl = document.getElementsByClassName('vpw-header-btn-close')

btt.addEventListener('click', function () {
    elemento.classList.toggle('box_active');
    btt.classList.toggle('off');
    // img_api.style.display = 'none';
    btt_2.style.display = 'block';
    v_libras.style.display = 'none';
    
});

btt_2.addEventListener('click', function () {
    elemento.classList.toggle('box_active');
    btt.classList.toggle('off');
    // img_api.style.display = 'block';
    btt_2.style.display = 'none';
    v_libras.style.display = 'block';
})

exit_vl.addEventListener('click', function(){
    btt.classList.toggle('off');
})
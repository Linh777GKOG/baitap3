function showOptions() {
  const encryptionType = document.getElementById('encryption-select').value;
  document.getElementById('classic-options').style.display =
    encryptionType === 'classic' ? 'block' : 'none';
  document.getElementById('block-options').style.display =
    encryptionType === 'block' ? 'block' : 'none';
}

function loadFile(event, elementId) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById(elementId).value = e.target.result;
  };
  reader.readAsText(file);
}

function encode() {
  // Implement encoding logic here
  alert('Encode function called');
}

function decode() {
  // Implement decoding logic here
  alert('Decode function called');
}

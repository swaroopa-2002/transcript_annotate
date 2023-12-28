document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fileInput = document.getElementById('fileInput');
    var speakerName = document.getElementById('speakerName').value;
    var file = fileInput.files[0];

    if (file) {
        // Implement the code to handle the file upload and transcription
        // For example, using FormData to send it to your server
        var formData = new FormData();
        formData.append('file', file);
        formData.append('speakerName', speakerName);

        // Example: POST request to your server endpoint
        fetch('your-server-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Display the transcription result
            document.getElementById('transcriptionOutput').innerText = data.transcription;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please select a file to upload.');
    }
});

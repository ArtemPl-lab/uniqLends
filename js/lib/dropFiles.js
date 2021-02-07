const createDropZone = (IdDropZone, onDropCallback) => {
    const dropZone = document.getElementById(IdDropZone);

    // prevent default events
    const preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    // highlight and unhighlight dropzone
    const highlight = (e) => {
        dropZone.classList.add('highlight');
    }
    const unhighlight = (e) => {
        dropZone.classList.remove('highlight');
    }
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    // handle drop
    const handleDrop = (e) => {
        let dt = e.dataTransfer;
        let files = dt.files;
        handleFiles(files);
    }
    dropZone.addEventListener('drop', handleDrop, false);

    // handle file
    const handleFiles = (files) => {
        ([...files]).forEach(onDropCallback)
    }

    // ---if browser no suppor drag&drop func---
    const dropZoneInput = document.querySelector(`#${IdDropZone} input[type="file"]`);
    // if input file exist
    if(dropZoneInput){
        dropZoneInput.onchange = (e) =>{
            handleFiles(dropZoneInput.files);
        }
    }
}
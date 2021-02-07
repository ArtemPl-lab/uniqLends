window.onload = () => {
    const from = document.getElementById('form');
    const formData = new FormData(from);
    const onArchiveLoad = (file) => formData.set('archiveFile', file);
    createDropZone('drop-zone1', onArchiveLoad);
    InitializeDropdowns();

    from.onsubmit = (e) => {
        e.preventDefault();
        for (var value of formData.values()) {
            console.log(value);
        }
    }

}
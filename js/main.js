window.onload = () => {
    const from = document.getElementById('form');
    let file = {};
    const onArchiveLoad = (file1) => file = file1;
    createDropZone('drop-zone1', onArchiveLoad);
    InitializeDropdowns();
    from.onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(from);
        formData.set('archiveFile', file);
        sendData(formData);
    }

    const sendData = async (data) => {
        const response = await fetch('/', {
            method: 'POST', 
            body: data
        });
        console.log(response);
    }
}
function downloadFile(fileBlob, filename) {
    if (typeof window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(fileBlob, filename);
    }
    else {
        var blobURL = window.URL.createObjectURL(fileBlob);
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', filename);
        tempLink.setAttribute('target', '_blank');
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
    }
}

fetch(""https://www.cs.colorado.edu/~kena/classes/5448/f12/presentation-materials/vaish.pdf").then(res => res.blob()).then(fileBlob => downloadFile(fileBlob, "Test.PDF"));

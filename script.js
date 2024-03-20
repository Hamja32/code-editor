
function run() {
    let code = document.getElementById("code").value;
    let result = document.getElementById("result");
    result.innerHTML = code;
    let code_box = document.getElementById("code_box");
    code_box.style.display = "none";
    let result_box = document.getElementById("result_box");
    result_box.style.display = "block";
    result_box.setAttribute("class","animation");
    let btn = document.getElementById("run_btn");
    btn.style.display = "none";
    let back_btn = document.getElementById("icon");
    back_btn.style.display = "block";
    // window.alert(code);
}

function back() {
    let result_box = document.getElementById("result_box");
    result_box.style.display = "none";
    let code_box = document.getElementById("code_box");
    code_box.style.display = "block";
    let back_btn = document.getElementById("icon");
    back_btn.style.display = "none";
    let btn = document.getElementById("run_btn");
    btn.style.display = "block";
}

//for download file
function downloadFile(filename,content) {
    const element = document.createElement('a');
    const blob = new Blob([content],{
        type : 'plane/text'
    });

    const fileUrl = URL.createObjectURL(blob);

    element.setAttribute('href',fileUrl);       //file location
    element.setAttribute('download',filename);  //file name

    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    
    document.body.removeChild(element);
};

window.onload = () => {
    document.getElementById('download').addEventListener('click', e =>{
        const filename = document.getElementById('filename').value;

        const content = document.getElementById("code").value;

        if (filename && content) {
            downloadFile(filename,content);
        }
    })
}




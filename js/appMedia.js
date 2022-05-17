window.onload = function() {
    doApi('dog');
    declareEvents();
}



function doApi(qSearch) {
    let url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${qSearch}&image_type=photo&pretty=true
` //adresss

    let xhr = new XMLHttpRequest;
    xhr.open('GET', url);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let json = JSON.parse(xhr.response);
            console.log(json.hits)
            createPictures(json.hits);
        }
    })
    xhr.send();

}

function createPictures(_ar) {
    document.querySelector('#id_res').innerHTML = '';
    _ar.forEach(item => {
        let imgBox = new Media('#id_res', item);
        imgBox.render();
    });
}


function declareEvents() {
    document.querySelector('#search_btn').addEventListener('click', function() {

        let input_val = document.querySelector('#id_input').value;
        console.log(input_val)

        doApi(input_val);
    })


    document.querySelector('#id_input').addEventListener('keyup', function(e) {
        e.preventDefault();
        let input_val = document.querySelector('#id_input').value;

        if (e.keyCode === 13) {
            doApi(input_val);
            document.getElementById("search_btn").click();
        }

    })


}
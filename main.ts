const dogButt = document.getElementById("dogButton");

dogButt!.onclick = function(){
    findDog()
}

async function findDog(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await response.json();
    document.getElementById('new-photo')!.style.display = 'block';
    //console.log(data);
    (<HTMLImageElement> document.getElementById('random-dog')).src = data.message;
}

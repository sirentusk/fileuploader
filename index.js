let profilePic = document.getElementById("profile-pic")
let inputFile = document.getElementById("input-file")

inputFile.onchange = function(){ // what to do on upload change of new input file
    profilePic.src = URL.createObjectURL(inputFile.files[0]); // creata a new url for the image and change it
}

// https://www.youtube.com/watch?v=xXrs4j-p3yE

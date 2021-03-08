names = ["Father",
    "Mother",
    "Brother", "Sister", "Grandfather", " Grandmother", "Myself"];

images = ["father.jpg", "mom.jpg", "BROTHER.jpg", "sister.jpg", "grandfather.jpg", "grandmother.jpg", "me.jpg"];
 
var i = 0;

function nextName() {
    document.getElementById("family_name").innerHTML = names[i];
    document.getElementById("image1").src = images[i];
    i++;
    if (i == 7)
    {
        i = 0;
        }
}
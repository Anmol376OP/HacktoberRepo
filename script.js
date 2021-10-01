let img= document.getElementsByTagName("img")

for (let i = 0; i < 3; i++) {
    img[i].src="https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    img[i].width= "260"
    img[i].height="260"
}
for (let i = 3; i < img.length; i++) {
    img[i].src="https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    img[i].width= "250"
    img[i].height="250"
}


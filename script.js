const lines = document.querySelectorAll("[id='letter']");
const trueWord = "KALEM";
const green = "#538d4e";
const gray = "#3a3a3c";
const yellow = "#b59f3b";

var count = 0;
var whichLine = 0;
var correctCount = 0;

GetKeyDown();
console.log(lines.length);

function GetKeyDown() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        try {
            console.log(count);
            if (name === "Backspace") {//enter basınca önceki şeyleri silememesi lazım
                count--;
                lines[count].innerHTML = "";
            }
            else if (name !== "Enter" && name !== "Alt") {
                lines[count].innerHTML = name.toUpperCase().toString();
                count++;
            }

            if (name === "Enter")// && (count) % 5 === 0) {
            {
                //CEVAP KONTROL
                //enter olunca whichline +5 olur. her satır için +5 ve count(yani son harf) 
                //arasnda olur
                //2 tane aynı harfli kelime bulunmasın
                correctCount = 0;
                for (let i = whichLine; i < count; i++) {
                    //console.log(trueWord[i - whichLine] + "-" + lines[i].innerHTML);

                    if (trueWord.includes(lines[i].innerHTML) && lines[i].innerHTML !== trueWord[i - whichLine]) {
                        lines[i].parentElement.style.backgroundColor = yellow.toString();

                    }
                }
                for (let i = whichLine; i < count; i++) {
                    //console.log(trueWord[i - whichLine] + "-" + lines[i].innerHTML);
                    if (lines[i].innerHTML === trueWord[i - whichLine]) {
                        lines[i].parentElement.style.backgroundColor = green.toString();
                        correctCount++;
                    }
                    if (lines[i].innerHTML !== trueWord[i - whichLine]) {
                        lines[i].parentElement.style.backgroundColor = gray.toString();
                    }
                }
                if (whichLine < 30)
                    whichLine += 5;
                if (correctCount === 5)
                    console.log("Kazandın...☺");
            }
        }
        catch {

        }
    });
}


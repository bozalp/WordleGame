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
            // console.log(count);
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
                let playerAnswer = "";
                for (let i = whichLine; i < count; i++) {
                    playerAnswer += lines[i].innerHTML.toString();
                }

                correctCount = 0;
                for (let i = whichLine; i < count; i++) {
                    //console.log(trueWord[i - whichLine] + "-" + lines[i].innerHTML);

                    //Harf dogruysa
                    if (lines[i].innerHTML === trueWord[i - whichLine]) {
                        lines[i].parentElement.style.backgroundColor = green.toString();
                        correctCount++;

                        //continue;
                    }
                    //Harf listede var ama yanlış yerdeyse
                    if (lines[i].innerHTML !== trueWord[i - whichLine]) {
                        //yazılan harfin indexi ile doğru harf index farklıysa
                        //daha önce o harf yazılmadıysa. 
                        //girilen harf önceki harflerde varsa gri yak. yoksa sari

                        for (let j = 0; j < i; i++) {
                            if (lines[j].innerHTML === trueWord[i - whichLine])//girilen harf, önceden kullanıldıysa
                            {
                                lines[i].parentElement.style.backgroundColor = gray.toString();
                                break;
                            }
                            else {
                                lines[i].parentElement.style.backgroundColor = yellow.toString();
                                break;
                            }
                        }

                        /*  if (playerAnswer.includes(lines[i].innerHTML)) {
  
                          }
  */

                        console.log(i);
                    }

                    //listede o harf yoksa
                    if (!trueWord.includes(lines[i].innerHTML)) {
                        lines[i].parentElement.style.backgroundColor = gray.toString();
                    }

                }
                if (whichLine < 30)
                    whichLine += 5;
                if (correctCount === 5)
                    console.log("Kazandin...☺");
            }
        }
        catch {

        }
    });
}


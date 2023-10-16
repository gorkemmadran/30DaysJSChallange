                /*
                    1-) 1 den 10 a kadar dönen bir for döngüsü kur.
                */
for(let i = 0; i<= 10; i++){
    console.log(i)
}
                /*
                    2-) 1 den 10 a kadar dönen bir while döngüsü kur.
                */
// let i = 0;
while(i <= 10){
    console.log(i)                  
    i++
}
                /*
                    3-) 10 dan 0 a kadar dönen bir for döngüsü kur.
                */


for(let i = 10; i>= 0; i--){
console.log(i)
}
                  /*
                    4-) 10 dan 0 a kadar dönen bir for döngüsü kur.
                */

while(i >= 0){
    console.log(i)
    i--
}

                /*
                    5-) 0 dan 100 e kadar dönen bir  döngü kur.
                */
for(let i =0; i<=100; i++){
    console.log(i)
}
                 /*
                    6-) 1x1 = 1 dönsgüsü kur
                */
for(let i = 1; i<=10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}
                /*
                    7-) 0 dan 100 e kadar giden tek sayıya geldiğinde
                    tek, çift sayıya geldiğinde çift olduğunu belirt.
                */
               
for(let i = 1; i<=100; i++){
    if(i % 2 === 0 ){
        console.log('Ben tek sayıyım : ', i)
    }else{
        console.log('Ben çift sayıyım :' , i)
    }
}
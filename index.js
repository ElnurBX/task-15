
// // task1
// let say1 =parseInt(prompt("eded daxil ed"));



// while( say1 > 1) {
//     if(say1 / 3 == 1){
//         console.log("bu 3 un quvetidir");
//         break;
//     }else if(say1 % 3 == 0){
//         say1= say1/3

//     }else{
//         console.log("3un quveti deyil");
//         break;
//     }
    
// }

// // task2
// let eded=parseInt(prompt("eded daxil ed"));
// let yoxlanis=eded
// let ededin_tersi=0
// let test1=eded
// let mertebe=0;
// let qaliq =0;


// for ( mertebe = 0; eded >= 1 ; mertebe++) {
//     qaliq = eded%10;
//     eded= eded-qaliq;
//     eded/=10;
// }
// while(mertebe > 0){
//     mertebe--
//     qaliq = yoxlanis % 10;
//     yoxlanis= yoxlanis-qaliq;
//     yoxlanis/=10;
//     ededin_tersi=ededin_tersi+(qaliq * (10**mertebe) )

// }
// if(test1===ededin_tersi){
//     console.log("Polidrom ededir");
// }else{
//     console.log("Polidrom deyil");
// }

//ferziye 2
// for ( mertebe = 0; eded >= 1 ; mertebe++) {
//     qaliq = eded%10;
//     eded= eded-qaliq;
//     eded/=10;
//     ededin_tersi=ededin_tersi+`${qaliq}`
//     console.log(ededin_tersi , mertebe ,qaliq);
// }
// console.log(ededin_tersi);
// ededin_tersi=parseInt(ededin_tersi)
// console.log(ededin_tersi);

// if(yoxlanis == ededin_tersi){
//     console.log(true,yoxlanis ,ededin_tersi);
// }else{
//     console.log(false,yoxlanis ,ededin_tersi);
// }
//ferziye 3
// let eded = prompt("eded daxil ed");
// let ededin_tersi=""
// console.log(ededin_tersi);
// for (let i = eded.length; i > 0; --i) {
//     ededin_tersi=ededin_tersi + eded[i-1]
// }
// if(eded == ededin_tersi){
//         console.log("Polidrom ededir");
// }else{
//         console.log("Polidrom deyil");
// }

// // task3
// let eded =prompt("eded daxil ed");


// let count=0
// while (count**2 <= eded) { 
//     count++
//     if (count**2 > eded ) {
//         console.log("en yaxin asagi koku " ,count-1);
//         break
//     }

// }


// ferziye 2
// cavab=(eded**0.5)-((eded**0.5)%1)
// console.log(cavab);


////task 4
// array=[1,2,3,4,5,6,7,8,9,10]
// let count=0
// for (let i = 0; i < array.length; i++) {
//     let a = array[i];
//     for (let j = i+1; j < array.length; j++) {
//         let b = array[j];
//         if(a+b<10){
//             count++

//         }
//     }
// }   
// console.log(count);
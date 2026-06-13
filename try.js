let x = 5;

for(let i=x;i>=1;i--){
    let str = "";

    for(let j=x;j>i;j--){
        str += " ";
    }

    for(let k=1;k<=i;k++){
        str += "*";
    }

    console.log(str);
}
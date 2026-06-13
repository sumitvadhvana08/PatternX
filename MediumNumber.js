alert("Please enter a number to generate the pattern.");
function popUp(callback){

    let p = document.getElementById("min");
    p.style.opacity = "0.1";

    let div = document.createElement("div");

    div.style.cssText = `
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.5);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:9999;
    `;

    div.innerHTML = `
        <div id="popupBox" style="
            background:white;
            padding:20px;
            border-radius:20px;
        ">
            <h3>Last chance to solve it yourself!</h3>
            <button id="yesBtn">💡 Show Solution</button>
            <button id="noBtn">🔄 Keep Thinking</button>
        </div>
    `;

    document.body.appendChild(div);

    div.addEventListener("click", function(){
        div.remove();
        p.style.opacity = "1";
    });
    
    document.getElementById("noBtn").addEventListener("click", function(){
        div.remove();
        p.style.opacity = "1";
    });

    document.getElementById("yesBtn").addEventListener("click", function(){
        div.remove();
        p.style.opacity = "1";
        callback();
    });
}

function p1(){

    let x=document.getElementById("pr1").value;

    if(x > 10){
        alert("Please Enter Number less than or equal to 10");
        return;
    }

    document.querySelector('.A1').innerHTML="";

    for(let i=1;i<=x;i++){

        let str="";

        for(let j=1;j<=x;j++){

            if(i==1 || i==x){
                str+=j+" ";
            }
            else{
                if(j==1){
                    str+="1 ";
                }
                else if(j==x){
                    str+=x+" ";
                }
                else{
                    str+="&nbsp;&nbsp;";
                }
            }

        }

        document.querySelector('.A1').innerHTML+=str+"<br>";
    }
}


function c1(){
    document.querySelector('.A1').innerHTML=
`<pre>
<code>
for(int i=1;i&lt;=x;i++){<br>

    for(int j=1;j&lt;=x;j++){<br>

        if(i==1 || i==x){<br>
            System.out.print(j + " ");<br>
        }<br>
        else{<br>
            if(j==1 || j==x){<br>
                if(j==1)<br>
                    System.out.print("1 ");<br>
                else<br>
                    System.out.print(x + " ");<br>
            }<br>
            else{<br>
                System.out.print("  ");<br>
            }<br>
        }<br>

    }<br>

    System.out.println("");<br>

}<br>
</code>
</pre>`;
}

function p2(){

    let x=document.getElementById("pr2").value;

    if(x > 15){
        alert("Please Enter Number less than or equal to 15");
        return;
    }

    document.querySelector('.A2').innerHTML="";

    let num = 1;

    for(let i=1;i<=x;i++){

        let str="";

        for(let j=1;j<=i;j++){

            str += num + " ";
            num += 2;

        }

        document.querySelector('.A2').innerHTML += str + "<br>";
    }
}

function c2(){
    document.querySelector('.A2').innerHTML=
`<pre>
<code>
int num = 1;<br>

for(int i=1;i&lt;=x;i++){<br>

    for(int j=1;j&lt;=i;j++){<br>

        System.out.print(num + " ");<br>

        num = num + 2;<br>

    }<br>

    System.out.println("");<br>

}<br>
</code>
</pre>`;
}

function p3(){

    let x=document.getElementById("pr3").value;

    if(x > 15){
        alert("Please Enter Number less than or equal to 15");
        return;
    }

    document.querySelector('.A3').innerHTML="";

    for(let i=1;i<=x;i++){

        let str="";

        for(let j=1;j<=x;j++){

            if((i + j) % 2 == 0){
                str += "1 ";
            }
            else{
                str += "0 ";
            }

        }

        document.querySelector('.A3').innerHTML += str + "<br>";
    }
}

function c3(){
    document.querySelector('.A3').innerHTML=
`<pre>
<code>
for(int i=1;i&lt;=x;i++){<br>

    for(int j=1;j&lt;=x;j++){<br>

        if((i + j) % 2 == 0){<br>
            System.out.print("1 ");<br>
        }<br>
        else{<br>
            System.out.print("0 ");<br>
        }<br>

    }<br>

    System.out.println("");<br>

}<br>
</code>
</pre>`;
}

function p4(){

    let x=document.getElementById("pr4").value;

    if(x > 15){
        alert("Please Enter Number less than or equal to 15");
        return;
    }
    if(x>4){
        alert("Entert Number Lessthen 4 for Better View");
    }

    document.querySelector('.A4').innerHTML="";

    let num = 1;

    // upper part
    for(let i=1;i<=x;i++){

        let str="";

        for(let j=1;j<=x-i;j++){
            str+="&nbsp;";
        }

        for(let j=1;j<=i;j++){
            str += num + " ";
            num++;
        }

        document.querySelector('.A4').innerHTML += str + "<br>";
    }

    // lower part
    for(let i=x-1;i>=1;i--){

        let str="";

        for(let j=1;j<=x-i;j++){
            str+="&nbsp;";
        }

        for(let j=1;j<=i;j++){
            str += num + " ";
            num++;
        }

        document.querySelector('.A4').innerHTML += str + "<br>";
    }
}

function c4(){
    document.querySelector('.A4').innerHTML=
`<pre>
<code>
let num = 1;<br>

for(int i=1;i&lt;=x;i++){<br>

    for(int j=1;j&lt;=x-i;j++){<br>
        System.out.print(" ");<br>
    }<br>

    for(int j=1;j&lt;=i;j++){<br>
        System.out.print(num + " ");<br>
        num++;<br>
    }<br>

    System.out.println("");<br>

}<br><br>

for(int i=x-1;i&gt;=1;i--){<br>

    for(int j=1;j&lt;=x-i;j++){<br>
        System.out.print(" ");<br>
    }<br>

    for(int j=1;j&lt;=i;j++){<br>
        System.out.print(num + " ");<br>
        num++;<br>
    }<br>

    System.out.println("");<br>

}<br>
</code>
</pre>`;
}

function p5(){

    let x=document.getElementById("pr5").value;

    if(x > 15){
        alert("Please Enter Number less than or equal to 15");
        return;
    }

    document.querySelector('.A5').innerHTML="";

    for(let i=1;i<=x;i++){

        let str="";

        for(let j=1;j<=x;j++){

            if(i == j){
                str += i + " ";
            }
            else{
                str += "0 ";
            }

        }

        document.querySelector('.A5').innerHTML += str + "<br>";
    }
}

function c5(){
    document.querySelector('.A5').innerHTML=
`<pre>
<code>
for(int i=1;i&lt;=x;i++){<br>

    for(int j=1;j&lt;=x;j++){<br>

        if(i == j){<br>
            System.out.print(i + " ");<br>
        }<br>
        else{<br>
            System.out.print("0 ");<br>
        }<br>

    }<br>

    System.out.println("");<br>

}<br>
</code>
</pre>`;
}

function p6(){

    let n=document.getElementById("pr6").value;

    if(n > 15){
        alert("Please Enter Number less than or equal to 15");
        return;
    }

    document.querySelector('.A6').innerHTML="";

    for(let i=1;i<=n;i++){

        let str="";

        // leading spaces
        for(let j=n;j>=i;j--){
            str += "&nbsp;&nbsp;";
        }

        // decreasing part
        for(let k=i-1;k>=0;k--){
            str += k + " ";
        }

        // increasing part
        for(let s=1;s<i;s++){
            str += s + " ";
        }

        document.querySelector('.A6').innerHTML += str + "<br>";
    }
}

function c6(){
    document.querySelector('.A6').innerHTML=
`<pre>
<code>
#include&lt;stdio.h&gt;<br>
int main(){<br>

    int n;<br>
    scanf("%d",&n);<br>

    for(int i=1;i&lt;=n;i++){<br>

        for(int j=n;j&gt;=i;j--){<br>
            printf("  ");<br>
        }<br>

        for(int k=i-1;k&gt;=0;k--){<br>
            printf("%d ",k);<br>
        }<br>

        if(i&gt;1){<br>
            for(int s=1;s&lt;i;s++){<br>
                printf("%d ",s);<br>
            }<br>
        }<br>

        printf("\\n");<br>
    }<br>

    return 0;<br>
}<br>
</code>
</pre>`;
}

function p7(){

    let x=document.getElementById("pr7").value;

    if(x > 15){
        alert("Please Enter Number less than or equal to 15");
        return;
    }

    document.querySelector('.A7').innerHTML="";

    for(let i=1;i<=x;i++){

        let str="";

        for(let j=1;j<=i;j++){

            str += (j*j) + " ";

        }

        document.querySelector('.A7').innerHTML += str + "<br>";
    }
}

function c7(){
    document.querySelector('.A7').innerHTML=
`<pre>
<code>
for(int i=1;i&lt;=x;i++){<br>

    for(int j=1;j&lt;=i;j++){<br>

        System.out.print((j*j) + " ");<br>

    }<br>

    System.out.println("");<br>

}<br>
</code>
</pre>`;
}

function p9(){

    let n=document.getElementById("pr9").value;

    if(n > 15){
        alert("Please Enter Number less than or equal to 15");
        return;
    }

    document.querySelector('.A9').innerHTML="";

    // upper part
    for(let i=1;i<=n;i++){

        let str="";

        for(let j=1;j<=n;j++){
            str += "&nbsp;&nbsp;";
        }

        for(let k=1;k<=i;k++){
            str += k + " ";
        }

        document.querySelector('.A9').innerHTML += str + "<br>";
    }

    // lower part
    for(let i=n;i>=1;i--){

        let str="";

        for(let j=n;j>=i;j--){
            str += "&nbsp;&nbsp;";
        }

        for(let k=i;k>=1;k--){
            str += k + " ";
        }

        document.querySelector('.A9').innerHTML += str + "<br>";
    }
}

function c9(){
    document.querySelector('.A9').innerHTML=
`<pre>
<code>
#include&lt;stdio.h&gt;<br>
int main(){<br>

    int n;<br>
    scanf("%d",&n);<br>

    for(int i=1;i&lt;=n;i++){<br>

        for(int j=1;j&lt;=n;j++){<br>
            printf("  ");<br>
        }<br>

        for(int k=1;k&lt;=i;k++){<br>
            printf("%d ",k);<br>
        }<br>

        printf("\\n");<br>
    }<br>

    for(int i=n;i&gt;=1;i--){<br>

        for(int j=n;j&gt;=i;j--){<br>
            printf("  ");<br>
        }<br>

        for(int k=i;k&gt;=1;k--){<br>
            printf("%d ",k);<br>
        }<br>

        printf("\\n");<br>
    }<br>

    return 0;<br>
}<br>
</code>
</pre>`;
}

function p8(){

    let x=document.getElementById("pr8").value;

    if(x > 9){
        alert("Please Enter Number less than or equal to 9");
        return;
    }

    document.querySelector('.A8').innerHTML="";

    // Upper Part
    for(let i=x;i>=1;i--){

        let str="";

        for(let j=i;j<x;j++){
            str+="&nbsp;&nbsp;";
        }

        for(let j=1;j<=2*i-1;j++){
            str+=i+" ";
        }

        document.querySelector('.A8').innerHTML+=str+"<br>";
    }

    // Lower Part
    for(let i=2;i<=x;i++){

        let str="";

        for(let j=i;j<x;j++){
            str+="&nbsp;&nbsp;";
        }

        for(let j=1;j<=2*i-1;j++){
            str+=i+" ";
        }

        document.querySelector('.A8').innerHTML+=str+"<br>";
    }
}

function c8(){
    document.querySelector('.A8').innerHTML=
`<pre>
<code>
for(int i=x;i>=1;i--){<br>

    for(int j=i;j&lt;x;j++){<br>
        System.out.print("  ");<br>
    }<br>

    for(int j=1;j&lt;=2*i-1;j++){<br>
        System.out.print(i + " ");<br>
    }<br>

    System.out.println("");<br>

}<br><br>

for(int i=2;i&lt;=x;i++){<br>

    for(int j=i;j&lt;x;j++){<br>
        System.out.print("  ");<br>
    }<br>

    for(int j=1;j&lt;=2*i-1;j++){<br>
        System.out.print(i + " ");<br>
    }<br>

    System.out.println("");<br>

}<br>
</code>
</pre>`;
}

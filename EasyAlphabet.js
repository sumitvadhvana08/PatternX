
alert("Please enter a number to generate the pattern.");function popUp(callback){

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
function c1(){
    document.querySelector('.A1').innerHTML=
`<pre>
<code>
for(int i=0;i&lt;x;i++){<br>
    for(int j=0;j<=i;j++){<br>
        System.out.print((char)(65+j));<br>
    }<br>
    System.out.println("");<br>
}<br>
</code>
</pre>`;
}

function p1(){

    let x=document.getElementById("pr1").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A1').innerHTML="";

    for(let i=0;i<x;i++){

        let str="";

        for(let j=0;j<=i;j++){
            str+=String.fromCharCode(65+j);
        }

        document.querySelector('.A1').innerHTML+=str+"<br>";
    }
}

function c2(){
    document.querySelector('.A2').innerHTML=
`<pre>
<code>
for(int i=0;i&lt;x;i++){<br>
    for(int j=0;j&lt;=i;j++){<br>
        System.out.print((char)(65+i));<br>
    }<br>
    System.out.println("");<br>
}<br>
</code>
</pre>`;
}

function p2(){

    let x=document.getElementById("pr2").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A2').innerHTML="";

    for(let i=0;i<x;i++){

        let str="";

        for(let j=0;j<=i;j++){
            str+=String.fromCharCode(65+i);
        }

        document.querySelector('.A2').innerHTML+=str+"<br>";
    }
}

function c3(){
    document.querySelector('.A3').innerHTML=
`<pre>
<code>
for(int i=x-1;i&gt;=0;i--){<br>
    for(int j=x-1;j&gt;=i;j--){<br>
        System.out.print((char)(65+i));<br>
    }<br>
    System.out.println("");<br>
}<br>
</code>
</pre>`;
}

function p3(){

    let x=document.getElementById("pr3").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A3').innerHTML="";

    for(let i=x-1;i>=0;i--){

        let str="";

        for(let j=x-1;j>=i;j--){
            str+=String.fromCharCode(65+i);
        }

        document.querySelector('.A3').innerHTML+=str+"<br>";
    }
}

function c4(){
    document.querySelector('.A4').innerHTML=
`<pre>
    <code>
for(int i=x-1;i&gt;=0;i--){<br>
    for(int j=i;j&lt;x;j++){<br>
        System.out.print((char)(65+j));<br>
    }<br>
     System.out.println("");<br>
}<br>
    </code>
</pre>`;
}
function p4(){

    let x=document.getElementById("pr4").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A4').innerHTML="";

    for(let i=x-1;i>=0;i--){

        let str="";

        for(let j=i;j<x;j++){
            str+=String.fromCharCode(65+j);
        }

        document.querySelector('.A4').innerHTML+=str+"<br>";
    }
}

function c5(){
    document.querySelector('.A5').innerHTML=
`<pre>
<code>
for(int i=0;i&lt;x;i++){<br>
    for(int j=i;j&gt;=0;j--){<br>
        System.out.print((char)(65+j));<br>
    }<br>
    System.out.println("");<br>
}<br>
</code>
</pre>`;
}

function p5(){

    let x=document.getElementById("pr5").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A5').innerHTML="";

    for(let i=0;i<x;i++){

        let str="";

        for(let j=i;j>=0;j--){
            str+=(String.fromCharCode(65+j));
        }

        document.querySelector('.A5').innerHTML+=str+"<br>";
    }
}

function c6(){
    document.querySelector('.A6').innerHTML=
`<pre>
<code>
for(int i=x;i&gt;=1;i--){<br>
    for(int j=0;j&lt;i;j++){<br>
        System.out.print((char)(65+j));<br>
    }<br>
    System.out.println("");<br>
}<br>
</code>
</pre>`;
}

function p6(){

    let x=document.getElementById("pr6").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A6').innerHTML="";

    for(let i=x;i>=1;i--){

        let str="";

        for(let j=0;j<i;j++){
            str+=String.fromCharCode(65+j);
        }

        document.querySelector('.A6').innerHTML+=str+"<br>";
    }
}

function c7(){
    document.querySelector('.A7').innerHTML=
`<pre>
<code>
for(int i=0;i&lt;x;i++){<br>
    for(int k=x;k&gt;i;k--){<br>
        System.out.print(" ");<br>
}<br>
    for(int j=0;j&lt;=i;j++){<br>
        System.out.print((char)(65+j)+" ");<br>
    }<br>
    System.out.println("");<br>
}
</code>
</pre>`;
}

function p7(){

    let x = document.getElementById("pr7").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A7').innerHTML = "";

    for(let i=0;i<x;i++){

        let str = "";

        for(let k=x;k>i;k--){
            str += "&nbsp;";
        }

        for(let j=0;j<=i;j++){
            str += String.fromCharCode(65+j) + " ";
        }

        document.querySelector('.A7').innerHTML += str + "<br>";
    }
}

function c8(){
    document.querySelector('.A8').innerHTML=
`<pre>
<code>
for(int i=0;i&lt;x;i++){<br>
    for(int k=x;k&gt;i;k--){<br>
         System.out.print(" ");<br>
    }<br>
    for(int j=0;j&lt;=i;j++){<br>
        System.out.print((char)(65+i)+" ");<br>
    }<br>
System.out.println("");<br>
}<br>
</code>
</pre>`;
}

function p8(){

    let x = document.getElementById("pr8").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A8').innerHTML = "";

    for(let i=0;i<x;i++){

        let str = "";

        for(let k=x;k>i;k--){
            str += "&nbsp;";
        }

        for(let j=0;j<=i;j++){
            str += String.fromCharCode(65+i) + " ";
        }

        document.querySelector('.A8').innerHTML += str + "<br>";
    }
}

function c9(){
    document.querySelector('.A9').innerHTML=
`<pre>
    <code>
for(int i=0;i&lt;x;i++){<br>
    for(int k=x;k&gt;i;k--){<br>
        System.out.print(" ");<br>
    }<br>

    for(int j=0;j&lt;=i;j++){<br>
        System.out.print((char)(65+j)+" ");<br>
    }<br>

    for(int j=i-1;j&gt;=0;j--){<br>
        System.out.print((char)(65+j)+" ");<br>
    }<br>

    System.out.println("");<br>
}<br>
    </code>
</pre>`;
}

function p9(){

    let x = document.getElementById("pr9").value;
    if(x > 26){
    alert("Please Enter Number less than or equal to 26");
    return;
}

    document.querySelector('.A9').innerHTML = "";

    for(let i=0;i<x;i++){

        let str = "";

        for(let k=x;k>i;k--){
            str += "&nbsp;";
        }

        for(let j=0;j<=i;j++){
            str += String.fromCharCode(65+j) + " ";
        }

        for(let j=i-1;j>=0;j--){
            str += String.fromCharCode(65+j) + " ";
        }

        document.querySelector('.A9').innerHTML += str + "<br>";
    }
}
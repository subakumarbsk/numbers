// reference for element Id of leftside:
const one = document.getElementById("sol1");
const two = document.getElementById("sol2");
const three = document.getElementById("sol3");
const four = document.getElementById("sol4");
const five = document.getElementById("sol5");
// reference for element Id of rightside :
const rightheading = document.getElementById("hidetxt");
const heading = document.getElementById("title");
const usrinput = document.getElementById("usrinput");
const rigdivision = document.getElementById("multiinput");
const a = document.getElementById("inavalue");
const b = document.getElementById("inbvalue");
const c = document.getElementById("incvalue");
const d = document.getElementById("indvalue");
const btn = document.getElementById("clkbtn");
const resul = document.getElementById("resultpara");

//home Button()
function home(){
        document.getElementById("hidetxt").style.display="block";
        document.getElementById("title").style.display="none";
        document.getElementById("usrinput").style.display="none";
        document.getElementById("multiinput").style.display="none";
        document.getElementById("clkbtn").style.display="none";
        document.getElementById("resultpara").style.display="none";
}
//Button Function()
function strop(){
    var btn = document.getElementById("clkbtn").value;

//    var btnvalue = btn.value;
    if(btn==1){
        string();
    }
    else if(btn==2){
        primenum();
    }
    else if(btn==3){
        largenum();
    }
    else if(btn==4){
        numberrev();
    }
    else{
       maxi();
   }
}

// Project1
function projecto(){
    multihide();
    onetxt();
    txtinput();
    const heading = document.getElementById("title");
    const usrinput = document.getElementById("usrinput");
    const btn = document.getElementById("clkbtn");
    const resul = document.getElementById("resultpara");
    heading.innerHTML="Enter Your Word to reverse it";
    usrinput.value="";
    btn.value=1;
    btn.innerHTML="Reverse";
    resul.innerHTML="";

}
// Project2
function projectt(){
    multihide();
    onetxt();
    numinput();
    const heading = document.getElementById("title");
    const resul = document.getElementById("resultpara");
    const usrinput = document.getElementById("usrinput");
    const btn = document.getElementById("clkbtn");
    //
    heading.innerHTML="Enter a number to find it is prime number or not";
    btn.value=2;
    btn.innerHTML="Check";
    resul.innerHTML="";
    usrinput.value="";
}
// Project3
function projectth(){
    onehide();
    multi();
    const heading = document.getElementById("title");
    const resul = document.getElementById("resultpara");
    const usrinput = document.getElementById("usrinput");
    const btn = document.getElementById("clkbtn");
    document.getElementsByClassName("valueinput").value="";
    heading.innerHTML="Enter numbers to create largest Number";
    btn.value=3;
    btn.innerHTML="create";
    resul.innerHTML="";
    //usrinput.style.display="none";

}
// Project4
function projectf(){
    multihide();
    onetxt();
    numinput();
    const heading = document.getElementById("title");
    const usrinput = document.getElementById("usrinput");
    const btn = document.getElementById("clkbtn");
    const resul = document.getElementById("resultpara");
    heading.innerHTML="Enter the Number to reverse it";
    usrinput.value="";
    btn.value=4;
    btn.innerHTML="Reverse";
    resul.innerHTML="";
}
// Project5
function projectfi(){
    onehide();
    multi();
    const heading = document.getElementById("title");;
    const usrinput = document.getElementById("usrinput");
    const resul = document.getElementById("resultpara");
    heading.innerHTML="Enter some Numbers to find maximum and minimum from numbers";
    const btn = document.getElementById("clkbtn");
    btn.value=5;
    btn.innerHTML="max and min";
    resul.innerHTML="";
    usrinput.value="";
}
//Find reverse of string
//
function string(){
    const usrinput = document.getElementById("usrinput");
    const resul = document.getElementById("resultpara");
    var rever = "";
    const usrvalue = usrinput.value;
    const valuelen = usrvalue.length;
    s = /^[a-z]+$/;
    if(s.test(usrvalue)){
    for(i=valuelen;i>=0;i--){
        k = usrvalue.charAt(i);
        rever = rever+k;
    }
    resul.innerHTML=rever+" "+" - is the Reverse word for your given string"
}
else{
    resul.innerHTML="Enter Valid Word in small letters/Lower case";
}
    
}
// Find prime number
//
function primenum(){
    var usrinput = document.getElementById("usrinput").value;
    if(usrinput==1 || usrinput==2){
        document.getElementById("resultpara").innerHTML="It is a Prime Number";
    }
    else{
        for(i=2;i<usrinput;i++){
            if(usrinput%i==0){
                
                document.getElementById("resultpara").innerHTML="It is a Composite Number";
                break
            }
            else{
                document.getElementById("resultpara").innerHTML="It is a Prime Number";
                break
            }
        }
    }
}
// Numnber Reverse function
//
function numberrev(){
    const usrinput = document.getElementById("usrinput");
    const resul = document.getElementById("resultpara");
    var rever = "";
    const usrvalue = usrinput.value;
    const valuelen = usrvalue.length;
    s = /^[0-9]+$/;
    if(s.test(usrvalue)){
    for(i=valuelen;i>=0;i--){
        k = usrvalue.charAt(i);
        if(k==0){
            rever=rever;
        }
        else{
            rever=rever+k;
        }
    }
    resul.innerHTML=rever+" "+" - is the Reverse number. [Note: 0 is neglated]";
}
else{
    resul.innerHTML="Enter a Positive Number";
}
}
//function max and min
function maxi(){
    var a = document.getElementById("inavalue").value;
    var b = document.getElementById("inbvalue").value;
    var c = document.getElementById("incvalue").value;
    var d = document.getElementById("indvalue").value;
    const btn = document.getElementById("clkbtn");
    const resul = document.getElementById("resultpara");
    m = Math.min(a,b,c,d);
    j = Math.max(a,b,c,d);
    resul.innerHTML="maximum number is - "+j+ "and minimum number is - "+m ;
}
//form Largest Number()
function largenum(){
    var a = document.getElementById("inavalue").value;
    var b = document.getElementById("inbvalue").value;
    var c = document.getElementById("incvalue").value;
    var d = document.getElementById("indvalue").value;
    const resul = document.getElementById("resultpara");
    var getnum = "";
    const val = [a,b,c,d];
    const sortval = val.sort();
    const revval = sortval.reverse();
    for(i=0;i<4;i++){
        a = revval[i];
        getnum = getnum+a;
    }
    resul.innerHTML="The Largest value is "+getnum;
}
//text show
function numinput(){
    const usrinput = document.getElementById("usrinput");
    usrinput.type="number";
    usrinput.placeholder="Enter Number";
}
function txtinput(){
    const usrinput = document.getElementById("usrinput");
    usrinput.type="text";
    usrinput.placeholder="Enter your Text";
}
//show text function
function multihide(){
     document.getElementById("hidetxt").style.display="none";
     document.getElementById("multiinput").style.display="none";

}
function multi(){
    document.getElementById("title").style.display="block";
    document.getElementById("multiinput").style.display="block";
    document.getElementById("clkbtn").style.display="block";
    document.getElementById("resultpara").style.display="block";
}
function onetxt(){
        document.getElementById("title").style.display="block";
        document.getElementById("usrinput").style.display="block";
        document.getElementById("clkbtn").style.display="block";
        document.getElementById("resultpara").style.display="block";
}
function onehide(){
    document.getElementById("hidetxt").style.display="none";
    document.getElementById("usrinput").style.display="none";
}
var i=0;
var j=0;
var d=0;
var k=0;
var len1=0;
var len2=0;
var sum;
function check() {
	
 k++;
var m=document.getElementById("str1").value; 
var f=document.getElementById("str2").value; 
len1=m.length;
len2=f.length;

if((len1==0)||(len2==0)) {
	
	document.getElementById("demo").innerHTML="OOPS! ";
	document.getElementById("demo").style.color='#FF0080';
}


if(i==len1) {
	
document.getElementById("demo").innerHTML=d;
print();	
clearTimeout(set);
i=0;
j=0;
d=0;
k=0;



}
if(j==len2) {
i++;
j=0;	
}	
if(m[i]==f[j]){
	
d++;	
}
if(i!=len1) {
j++; 	
	
}


if(k>0) {
var set=setTimeout(function() {
	
check();	
	
	
},0);
}

}
function print() {


	var length=len1+ +len2;
	var plus=d+d;
    var flame = length - plus;
    //var ans="flames"
	var ans=["F","L","A","M","E","S"];
	//delete ans[2];
	//alert(ans);
    var tt = flame - 1;

    flame = flame - 1;
  /*for(t=0;t<=tt;t++) 
	if(t==tt){
delete ans[t];
	alert (ans[t]);*/


    for (var nKeyIndex = 1; ans.length != 1; nKeyIndex++)
    {
        if (nKeyIndex % flame == 0)
        {
            ans.splice((nKeyIndex) % ans.length, 1);          
        } 
    }

    last();
	
	function last() {
		if((len1==0)||(len2==0)) {
	
	document.getElementById("demo").innerHTML="OOPS!";
	document.getElementById("demo").style.color='#FF0080';
}

		
	else if(ans=="F")
                    {
                            //res="FRIENDS";
							document.getElementById("demo").innerHTML = 'FRIENDS';
							document.getElementById("demo").style.color='blue';                  
                    }
                    else if(ans=="L")
                    {
                            //res="LOVER";
							document.getElementById("demo").innerHTML = 'LOVER';
							document.getElementById("demo").style.color='#FF0080';
                    }
                    else if(ans=="A")
                    {
                            //res="AFFECTION";
							document.getElementById("demo").innerHTML = 'AFFECTION';
							document.getElementById("demo").style.color='#DBA901';
                    } 
                    else if(ans=="M")
                    {
                            //res="MARRIAGE";
							document.getElementById("demo").innerHTML = 'MARRIAGE';
							document.getElementById("demo").style.color='green';
                    }
                    else if(ans=="E")
                    {	
                            //res="ENEMY";
							document.getElementById("demo").innerHTML = 'ENEMY';
							document.getElementById("demo").style.color='red';
                    }
                    else if(ans=="S")
                    {
                            //res="SISTER";
							document.getElementById("demo").innerHTML = 'SISTER';
							document.getElementById("demo").style.color='violet';
                    }
		
		
		
		
		
		
	}
	
}
	
	
	
	

		
	
	
	



 
 
 //document.getElementById("demo").innerHTML=m[i];
	//  document.getElementById("demo").innerHTML=f[j];




//test.js
var cnt=0;
var posArray=[49,50,48,51,52];
var cntStep=1;
var cntMin=0;
var cntMax=9;
var textWarning="\n";

function onClickSetMax() {
	cnt=cntMax;
	alert("Clicked button : SetMax"+"\n"+"cnt = "+cnt);
}

function onClickShowItem() {
	alert("PosArray : "+posArray[cnt]);
}

function onClickReset() {
	cnt=cntMin;
	alert("Clicked button : Reset"+"\n"+"cnt = "+cnt);
}

function onClickBack() {
	cnt-=cntStep;
	if(cnt<cntMin){
		cnt=cntMin;
		textWarning=textWarning+"Reached the lower limit of array";
	}
	alert("Clicked button : Back"+"\n"+"cnt = "+cnt+textWarning);
	textWarning="\n";
	return false;
}

function onClickNext() {
	cnt+=cntStep;
	if(cnt>cntMax){
		cnt=cntMax;
		textWarning=textWarning+"Reached the upper limit of array";
	}
	alert("Clicked button : Next"+"\n"+"cnt = "+cnt+textWarning);
	textWarning="\n";
	return false;
}

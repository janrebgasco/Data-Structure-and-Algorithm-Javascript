//my script
var Fnum, Snum, Ans;
function compute(){
	Fnum=parseInt(document.getElementById('txtFnum').value);
	Snum=parseInt(document.getElementById('txtSnum').value);
	Oper=parseInt(document.getElementById('txtOper').value);
	switch(Oper){
		case 1: Ans =Fnum + Snum;break;
		case 2: Ans =Fnum - Snum;break;
		case 3: Ans =Fnum * Snum;break;
		case 4: Ans =Fnum / Snum;break;
		default: Ans ="Select Operation"; break;

	}
	document.getElementById('lblAns').innerHTML=Ans;
}
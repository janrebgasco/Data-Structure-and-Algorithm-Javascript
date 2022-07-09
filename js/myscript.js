	var Fnum,Snum,Oper,Ans;
	function compute(){
		Fnum=parseInt(document.getElementById('txtFnum').value);
		Snum=parseInt(document.getElementById('txtSnum').value);
		Oper=parseInt(document.getElementById('cbooper').value);
		switch(Oper){
			case1:Ans=Fnum+Snum;break;
			case2:Ans=Fnum-Snum;break;
			case3:Ans=Fnum*Snum;break;
			case4:Ans=Fnum/Snum;break;
			default:Ans="SelectOperation";break;
			document.getElementById('IblAns').innerHTML=Ans;
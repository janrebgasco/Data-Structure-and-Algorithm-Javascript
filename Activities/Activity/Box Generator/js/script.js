var i , j, box='';
var numberOfHeight , numberofWidth;

function displayHeight()
{
	numberOfHeight = parseInt(document.getElementById('cboNumberOfHeight').value);
	console.log(numberOfHeight);
	box = '';
	for (i=1;i<=numberOfHeight;i++)
	{
		box += '<div class = "Box" id="box'+1+'"></div>';	
	}
	document.getElementById('disp').innerHTML = box;
}

function displayWidth() 
{
	numberOfHeight = parseInt(document.getElementById('cboNumberOfHeight').value);
	numberOfWidth = parseInt(document.getElementById('cboNumberOfWidth').value);
	box='';
	for (i=1;i<=numberOfHeight;i++)
	{
		box += '<div class ="block">';
			for(j=1;j<=numberOfWidth;j++)
			{
				box += '<div class ="Box inlineBlock" id="box'+j+'" > </div>';
			}
		box += "</div>";
	}
		document.getElementById('disp').innerHTML = box;

}
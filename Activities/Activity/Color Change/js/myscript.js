var tmp,count = 0;
	function colorete(tmp)
	{	
		switch(tmp)
		{
			case 1: color ="red";break;
			case 2: color ="green";break;
			case 3: color ="blue";break;
			case 4: color ="yellow";break;
			case 5: color ="pink";break;
			case 6: color ="grey";break;
			case 7: color ="black";break;
			case 8: color ="white";break;
		}
		return color;
	}
	function flow()
	{
		count +=  1;

		switch(count)
		{
			case 1: document.getElementById(count).style.backgroundColor = colorete(1);
					break;
			case 2: document.getElementById(count).style.backgroundColor = colorete(1);
					document.getElementById(count - 1).style.backgroundColor = colorete(count);
					break;
			case 3: document.getElementById(count).style.backgroundColor = colorete(1);
					document.getElementById(count - 1).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 2).style.backgroundColor = colorete(count);
					break;
			case 4: document.getElementById(count).style.backgroundColor = colorete(1);
					document.getElementById(count - 1).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 2).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 3).style.backgroundColor = colorete(count);
					break;
			case 5: document.getElementById(count).style.backgroundColor = colorete(1);
					document.getElementById(count - 1).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 2).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 3).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 4).style.backgroundColor = colorete(count);
					break;
			case 6: document.getElementById(count).style.backgroundColor = colorete(1);
					document.getElementById(count - 1).style.backgroundColor = colorete(count - 4);
					document.getElementById(count - 2).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 3).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 4).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 5).style.backgroundColor = colorete(count);
					break;
			case 7: document.getElementById(count).style.backgroundColor = colorete(1); // red 
					document.getElementById(count - 1).style.backgroundColor = colorete(count - 5); //green
					document.getElementById(count - 2).style.backgroundColor = colorete(count - 4); //blue
					document.getElementById(count - 3).style.backgroundColor = colorete(count - 3); //yellow
					document.getElementById(count - 4).style.backgroundColor = colorete(count - 2);	//pink
					document.getElementById(count - 5).style.backgroundColor = colorete(count - 1); //grey
					document.getElementById(count - 6).style.backgroundColor = colorete(count);		// black
					break;
			case 8: document.getElementById(count - 1).style.backgroundColor = colorete(count - 6);
					document.getElementById(count - 2).style.backgroundColor = colorete(count - 5); 
					document.getElementById(count - 3).style.backgroundColor = colorete(count - 4);
					document.getElementById(count - 4).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 5).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 6).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 7).style.backgroundColor = "white";
					break;
			case 9: document.getElementById(count - 2).style.backgroundColor = colorete(count - 6);
					document.getElementById(count - 3).style.backgroundColor = colorete(count - 5); 
					document.getElementById(count - 4).style.backgroundColor = colorete(count - 4);
					document.getElementById(count - 5).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 6).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 7).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 8).style.backgroundColor = "white";
					break;
			case 10: document.getElementById(count - 3).style.backgroundColor = colorete(count - 6);
					document.getElementById(count - 4).style.backgroundColor = colorete(count - 5); 
					document.getElementById(count - 5).style.backgroundColor = colorete(count - 4);
					document.getElementById(count - 6).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 7).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 8).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 9).style.backgroundColor = "white";
					break;
		 	case 11: document.getElementById(count - 4).style.backgroundColor = colorete(count - 6);
					document.getElementById(count - 5).style.backgroundColor = colorete(count - 5); 
					document.getElementById(count - 6).style.backgroundColor = colorete(count - 4);
					document.getElementById(count - 7).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 8).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 9).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 10).style.backgroundColor = "white";
					break;
			case 12: document.getElementById(count - 5).style.backgroundColor = colorete(count - 6);
					document.getElementById(count - 6).style.backgroundColor = colorete(count - 5); 
					document.getElementById(count - 7).style.backgroundColor = colorete(count - 4);
					document.getElementById(count - 8).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 9).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 10).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 11).style.backgroundColor = "white";
					break;
			case 13: document.getElementById(count - 6).style.backgroundColor = colorete(count - 6);
					document.getElementById(count - 7).style.backgroundColor = colorete(count - 5); 
					document.getElementById(count - 8).style.backgroundColor = colorete(count - 4);
					document.getElementById(count - 9).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 10).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 11).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 12).style.backgroundColor = "white";
					break;
			case 14:document.getElementById(count - 7).style.backgroundColor = colorete(count - 6);
					document.getElementById(count - 8).style.backgroundColor = colorete(count - 5); 
					document.getElementById(count - 9).style.backgroundColor = colorete(count - 4);
					document.getElementById(count - 10).style.backgroundColor = colorete(count - 3);
					document.getElementById(count - 11).style.backgroundColor = colorete(count - 2);
					document.getElementById(count - 12).style.backgroundColor = colorete(count - 1);
					document.getElementById(count - 13).style.backgroundColor = "white";
					break;
		}
		if(count == 14){
			count = 0;
		}

	}

	
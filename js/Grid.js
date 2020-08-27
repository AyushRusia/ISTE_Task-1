
function input()
{
	var x=document.getElementById("Grid");
	if(x!=null)
		document.getElementsByClassName("Grid")[0].removeChild(x);
	
	const size = document.getElementById("Size").value;
	var color1=document.getElementById("Color1").value;
	var color2=document.getElementById("Color2").value;
	var color3=document.getElementById("Color3").value;
	console.log(size);
	if(size<=30&&size>0)
	{
		create_grid(size);
		css(size);
	}
	else
		alert("Enter the value between 1 and 30 inclusive");
	
}
function Reset()
{
	const size=document.getElementById("Size").value=null;
	const color1=document.getElementById("Color1").value="#aa0000";
	const color2=document.getElementById("Color2").value="#00aa00";
	const color3=document.getElementById("Color3").value="#0000aa";
	
	var x=document.getElementById("Grid");
	document.getElementsByClassName("Grid")[0].removeChild(x);
	
	document.getElementById("submit").disabled=false;
	
}

function create_grid(size)
{
	
	
	var x = document.createElement("TABLE");
	x.setAttribute("id", "Grid");
	x.setAttribute("class", "tab");
	document.getElementsByClassName("Grid")[0].appendChild(x);
	
	for(var i=0;i<size;i++)
	{
		var r = document.createElement("TR");
		r.setAttribute("class", "rows");
		document.getElementById("Grid").appendChild(r);
	
		for(var j=0;j<size;j++)
		{
			var c = document.createElement("TD");
			c.setAttribute("class", "columns");
			document.getElementsByClassName("rows")[i].appendChild(c);
		}
	}
		fill_color(size);
}
var bonus2=[];
function fill_color(ezis)
{
	
	var k=0;

	for(var i=0;i<ezis;i++)
	{
		for(var j=0;j<ezis;j++)
		{
			var x = Math.floor(Math.random() * 3) + 1; // returns a random integer from 1 to 3
			
			if(x==1)
			{
				var z=document.getElementById("Grid").rows[i].cells[j];
				var color1=document.getElementById("Color1").value;
				bonus2[k]=x;
				k++;
				z.style.backgroundColor=color1;
				
			}
			if(x==2)
			{
				var z=document.getElementById("Grid").rows[i].cells[j];
				var color2=document.getElementById("Color2").value;
				bonus2[k]=x;
				k++;
				
				z.style.backgroundColor=color2;
			}
			if(x==3)
			{
				var z=document.getElementById("Grid").rows[i].cells[j];
				var color3=document.getElementById("Color3").value;
				bonus2[k]=x;
				k++;
				
				z.style.backgroundColor=color3;
			}
		}
	}

	
}
function css(size)
{
	var t= parseInt(size)+25;
	var r=document.getElementsByTagName("TD");
	if(size<=25)
	{
		console.log(t);
		var v=t/size;
	}
	if(size>25)
	{
		var v=(40/size);
	}
	
	for(var i=0;i<r.length;i++)
	{
		r[i].style.width=v+"vw";
		r[i].style.height=v+"vw";
	}
	var w=document.getElementsByClassName("Grid")[0];
	w.removeAttribute("style");
}
function bonus()
{
	const size = document.getElementById("Size").value;
	var color1=document.getElementById("Color1").value;
	var color2=document.getElementById("Color2").value;
	var color3=document.getElementById("Color3").value;

	var array=[]
	var count=1;
	var v=[];
	var k=0;
	
	for(var r=0;r<size;r++)
	{
		var n=(r)*size;
		var o=(r+1)*size;
		
		if(bonus2[n]==bonus2[n+1])
		{
			v[k]=1;
			k++;
		}
		else
		{
			v[k]=0;
			k++;
		}
		
		
		for(var i=n;i<o;i++)
		{
			
			var l=i+1;
			for(var j=l;j<o;j++)
			{
				
				if(bonus2[i]==bonus2[j])
				{
					count++;
					v[k]=count;
					k++;
					i=j;
					
				}
				
				else
				{
					v[k]=1;
					k++;
					break;
				}
			}
			count=1;
			
			
		}
	}
	console.log(v);
	
	var max= Math.max.apply(null, v);
	
	
	for(var r=0;r<size;r++)
	{
		var n=(r)*size;
		var o=(r+1)*size;
		
		for(var i=n+1;i<o;i++)
		{
			console.log(i);
			if(v[i]==max)
			{
				array[array.length]=i+1;
			}
		}
	}
	
	
	
	var cell=document.getElementsByTagName("TD");
	var t;
	var a;
	for(var m=0;m<array.length;m++)
	{
		t=array[m]-max;
		a=t;
		for(var p=0;p<max;p++)
		{
				
				cell[t].style.border ="white dashed 2px";
				t++;
		}
		
	}
	
	
	
}
				
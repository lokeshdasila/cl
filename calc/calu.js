var currentOperation,result;	
	
const buttonPressed=(num)=>{
	var changeField=document.querySelector("#resultField");
	var changeOp1=document.querySelector("#op1");
	var changeOp2=document.querySelector("#op2");
	var operatorField=document.querySelector("#operator");
	var errM=document.querySelector('#errMessage');
//	console.log(errM.innerHTML==='');	
	if (errM.innerHTML!=='') 
	{
		errM.innerHTML='';
		changeOp2.innerHTML='';
		changeField.innerHTML='';
		operatorField.innerHTML='';
		changeOp1.innerHTML=num;
		return;
	}	
	if ((!operatorField.innerHTML)) 
	{
		changeOp1.innerHTML+=num;
	}
	else if (changeField.innerHTML) 
	{
		changeOp1.innerHTML=num;
		changeField.innerHTML='';
		changeOp2.innerHTML='';
		operatorField.innerHTML='';
	}
	else
	{
		changeOp2.innerHTML+=num;

	}
}
const clearAll=()=>{
	var changeField=document.querySelector("#resultField");
	var changeOp1=document.querySelector("#op1");
	var changeOp2=document.querySelector("#op2");
	var operatorField=document.querySelector("#operator");
	var errM=document.querySelector("#errMessage");
	errM.innerHTML='';
	changeField.innerHTML="";
	changeOp1.innerHTML="";
	changeOp2.innerHTML="";
	operatorField.innerHTML="";
	
	currentOperation='';
	//changeOp2.innerHTML='';
	//changeOp1.innerHTML='';changeOp1.innerHTML
}
const buttonOp=(operation)=>{
	var changeField=document.querySelector("#resultField");
	var changeOp1=document.querySelector("#op1");
	var changeOp2=document.querySelector("#op2");
	var operatorField=document.querySelector("#operator");
	var errM=document.querySelector('#errMessage');
	console.log(changeOp1.innerHTML);
	console.log((changeOp2.innerHTML==''));
	
	if(errM.innerHTML!=='')
	{
		errM.innerHTML='';
		changeOp2.innerHTML='';
		changeField.innerHTML='';
		operatorField.innerHTML=operation;
		changeOp1.innerHTML='';
		return;
	}
	if (changeField.innerHTML!=='') 
	{
		changeOp1.innerHTML=changeField.innerHTML;
		changeField.innerHTML='';
		changeOp2.innerHTML='';
		operatorField.innerHTML=operation;
		errM.innerHTML='';
		return;
	}

	if(changeOp2.innerHTML!=='')
	{
		//changeOp2.innerHTML=parseFloat(changeField.innerHTML);
		if (changeOp1.innerHTML==='') {
			if((operatorField.innerHTML!=='sin')||(operatorField.innerHTML!=='cos')||(operatorField.innerHTML!=='log'))
			changeOp1.innerHTML=0;
			else 
				changeOp1.innerHTML=1;
		}
		switch(operatorField.innerHTML)
		{
			case '+':
				result=(parseFloat(changeOp1.innerHTML))+(parseFloat(changeOp2.innerHTML));
				break;
			case '-':
				result=(parseFloat(changeOp1.innerHTML))-(parseFloat(changeOp2.innerHTML));
				break;
			case '*':
				result=(parseFloat(changeOp1.innerHTML))*(parseFloat(changeOp2.innerHTML));
				break;
			case '/':
				result=(parseFloat(changeOp1.innerHTML))/(parseFloat(changeOp2.innerHTML));
				break;
			case 'sin':
				result=parseFloat(changeOp1.innerHTML)*(Math.sin((Math.PI*parseFloat(changeOp2.innerHTML)/180)).toFixed(5));
				if(operatorField.innerHTML==='-');
				{
					if(changeOp1.innerHTML==='')
						changeOp1.innerHTML=-1;
					else
						changeOp1.innerHTML=(-changeOp1.innerHTML);
					result=result*(-1);
				}
				break;
			case 'cos':
				result=parseFloat(changeOp1.innerHTML)*(Math.cos((Math.PI*parseFloat(changeOp2.innerHTML)/180)).toFixed(5));
				if(operatorField.innerHTML==='-');
				{
					if(changeOp1.innerHTML==='')
						changeOp1.innerHTML=-1;
					else
						changeOp1.innerHTML=(-changeOp1.innerHTML);
					result=result*(-1);
				}
				break;
			case 'log':
				result=parseFloat(changeOp1.innerHTML)*(Math.log10(parseFloat(changeOp2.innerHTML)));
				if(operatorField.innerHTML==='-');
				{
					if(changeOp1.innerHTML==='')
						changeOp1.innerHTML=-1;
					else
						changeOp1.innerHTML=(-changeOp1.innerHTML);
					result=result*(-1);
				}
				break;

		}
		changeOp1.innerHTML=result;
		changeOp2.innerHTML='';
		changeField.innerHTML='';
	}
	else if(operatorField.innerHTML==='-')
	{
		if ((operation==='sin')||(operation==='cos')||(operation==='log')) {
			if (changeOp1.innerHTML===''||changeOp1.innerHTML==='0') {
				changeOp1.innerHTML=-1;
			} 
			else {
				changeOp1.innerHTML=(-changeOp1.innerHTML)
			}
		}

	}
	console.log(changeOp1.innerHTML);
	
	operatorField.innerHTML=operation;
}
const buttonEqual=()=>{
	var changeField=document.querySelector("#resultField");
	var changeOp1=document.querySelector("#op1");
	var changeOp2=document.querySelector("#op2");
	var operatorField=document.querySelector("#operator");

	console.log(parseFloat(changeField.innerHTML));
	//changeOp2.innerHTML=parseFloat(changeField.innerHTML);
	if (changeOp2.innerHTML==='') {
		changeField.innerHTML='';
		changeOp1.innerHTML='';
		changeOp2.innerHTML='';
		var erM=document.querySelector("#errMessage");
		erM.innerHTML="What are you doing man????";
		return;
	}
	if (changeOp1.innerHTML==='') {
		if((operatorField.innerHTML==='sin')||(operatorField.innerHTML==='cos')||(operatorField.innerHTML==='log'))
			changeOp1.innerHTML=1;
		else
			changeOp1.innerHTML=0;
	}
	switch(operatorField.innerHTML)
	{
		case '+':
			result=(parseFloat(changeOp1.innerHTML))+(parseFloat(changeOp2.innerHTML));
			break;
		case '-':
			result=(parseFloat(changeOp1.innerHTML))-(parseFloat(changeOp2.innerHTML));
			break;
		case '*':
			result=(parseFloat(changeOp1.innerHTML))*(parseFloat(changeOp2.innerHTML));
			break;
		case '/':
			result=(parseFloat(changeOp1.innerHTML))/(parseFloat(changeOp2.innerHTML));
			break;
		case 'sin':
			result=parseFloat(changeOp1.innerHTML)*(Math.sin((Math.PI*parseInt(changeOp2.innerHTML)/180)).toFixed(5));
			break;
		case 'cos':
			result=parseFloat(changeOp1.innerHTML)*(Math.cos((Math.PI*parseFloat(changeOp2.innerHTML)/180)).toFixed(5));
			break;
		case 'log':
			result=parseFloat(changeOp1.innerHTML)*(Math.log10(parseFloat(changeOp2.innerHTML)));
			break;

	}

	//changeField.innerHTML=result;
	changeField.innerHTML=result;
	//changeOp2.innerHTML='';
	//result='';
	//currentOperation='';

}

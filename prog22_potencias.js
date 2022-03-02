function ejecuta () {
	v1=document.f_ciclos.v1.value;
	v2=document.f_ciclos.v2.value;
	v1=parseInt(v1);
	v2=parseInt(v2);
	if ((v1>=1) && (v1<=10)) {

		if ((v2>=1) && (v2<=5)) {
			res_texto="";
			ctrl=v1;
			nCiclos=1;
			mult=1;
			while (nCiclos<=v2) {
			   if (nCiclos==v2) res_texto=res_texto+ctrl;
			   	else res_texto=res_texto+ctrl+" x ";
				    mult=mult*v1;
					nCiclos=nCiclos+1;
		    } 
		    document.f_ciclos.res_texto.value=res_texto;
		    document.f_ciclos.res_num.value=mult;	
		    } else {
		    	alert("Error, se debe de indicar el valor secundario entre 1 y 5");
		    	document.f_ciclos.v2.style.background="red";
		    }
	} else {
		alert("Error, se debe de indicar el valor inicial entre 1 y 10");
		document.f_ciclos.v1.style.background="red";
		}
	}
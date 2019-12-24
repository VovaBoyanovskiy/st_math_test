var data;
function checkIt(){

    theGroup1 = document.Form1.Math_method;
    theGroup2 = document.Form2.Math_values;
    
    var A = Number.parseFloat(theGroup2[0].value),B = Number.parseFloat(theGroup2[1].value),
    C = Number.parseFloat(theGroup2[2].value),D = Number.parseFloat(theGroup2[3].value); //коэффициенты уравнения
	
    var a0 =Number.parseFloat(theGroup2[4].value),
    b0 = Number.parseFloat(theGroup2[5].value); //начальные значения интервала неопределенности
	
    var e = Number.parseFloat(theGroup2[6].value);
	
    var k=0; //счетчик
    
    var a1,b1;
    
	
    if (theGroup1[0].checked){
    	var Yk, Zk;
		var Rn; //характеристика
		var Fy,Fz; //значения функций в точках Xk, Yk, Zk
		var delta;
        Yk = a0 + ( ( 3 - Math.sqrt(5) )/ 2 )*( b0 - a0 );
		Zk = a0 + b0 - Yk;
        var str ="";
        str= str+"<br><hr>";

        do{
            str= str+"<h3>Итерация " + (k+1) +"</h3>"+ "<br>";
            str= str+"$$k=" + k + "$$<br>";
            Fy = A * Math.pow(Yk, 3) + B * Math.pow(Yk, 2) + C * Yk + D;
            str= str+"$$F(y)="+A+"*Y^3+"+B+"*Y^2+"+C+"*Y+"+D+"="+(A * Math.pow(Yk, 3)).toFixed(4)+"+"+(B * Math.pow(Yk, 2)).toFixed(4)+"+"+(C * Yk).toFixed(4)+D+"="+Fy.toFixed(4)+"$$<br>";
    
            Fz = A * Math.pow(Zk, 3) + B * Math.pow(Zk, 2) + C * Zk + D;
            str= str+"F(z)="+A+"*Z^3+"+B+"*Z^2+"+C+"*Z+"+D+"="+(A * Math.pow(Zk, 3)).toFixed(4)+"+"+(B * Math.pow(Zk, 2)).toFixed(4)+"+"+(C * Zk).toFixed(4)+D+"="+Fz.toFixed(4)+"<br>";
    
        if( Fy < Fz ){
            str= str+"F(y)="+Fy.toFixed(4)+"< F(z)="+Fz.toFixed(4)+"<br>";
            a1 = a0;
            b1 = Zk;
            Zk = Yk;
            Yk = a1 + b1 - Yk;
            str= str+"a(k+1)=a(k)=a("+k+")="+a1+"<br>"+"b(k+1)=Z(k)="+"Z("+k+")="+b1.toFixed(4)+"<br>"+"Z(k)=Y(k)="+Zk.toFixed(4)+"<br>"+"Y(k+1)=a(k+1)+b(k+1)-Y(k)="+a1.toFixed(4)+"+"+b1.toFixed(4)+ Zk.toFixed(4)+"="+Yk.toFixed(4)+"<br>";
        
        }
        if( Fy > Fz){
            str= str+"F(y)="+Fy.toFixed(4)+"> F(z)="+Fz.toFixed(4)+"<br>";
            a1 = Yk;
            b1 = b0;
            Yk = Zk;
            Zk = a1 + b1 -Zk;
            str= str+"a(k+1)=Y(k)=Y("+k+")="+a1.toFixed(4)+"<br>"+"b(k+1)=b(k)=b("+k+")="+b1.toFixed(4)+"<br>"+"Y(k+1)=Z(k)=Z("+k+")="+Yk.toFixed(4)+"<br>"+"Z(k+1)=a(k+1)+b(k+1)-Z(k)="+a1.toFixed(4)+"+"+b1.toFixed(4)+Yk.toFixed(4)+"="+Zk.toFixed(4)+"<br>";
        }
    
            
        
        delta = Math.abs(a1-b1)
        a0=a1;
        b0=b1;
        k++;
        str= str+"Δ=|a(k+1)-b(k+1)|="+"|"+a1.toFixed(4)+"-"+b1.toFixed(4)+"|="+delta.toFixed(4);
        str= str+"<hr>";
        } while( delta > e )
            
            
        str= str+"<h3>Ответ:</h3><br>"+"X ∈ [" + a0.toFixed(4) + ";" + b0.toFixed(4) + "] <br>" + "X* = Xk =" + ((a0+b0)/2).toFixed(4);
        document.getElementById('math').innerHTML = str;
        data = document.getElementById('math').innerHTML;
                
	}
    if (theGroup1[1].checked){
    	var Xk; //точка середины интервала
        var Yk, Zk;
        var L2k; //длина интервала
        var absL2k; // модуль L2k
        var Rn; //характеристика
        var Fx,Fy,Fz; //значения функций в точках Xk, Yk, Zk
        var str1 ="";
        str1= str1+"<br><hr>";
        Xk = (a0 + b0) / 2;
        str1= str1+"X0=("+a0+"+"+b0+")/2="+Xk+"<br>";
            
        do{
            str1= str1+"<h3>Итерация:" + (k+1) +"</h3>"+ "<br>";
            str1= str1+"k=" + k + "<br>";
            Fx = A * Math.pow(Xk, 3) + B * Math.pow(Xk, 2) + C * Xk + D;
            str1= str1+"F(x)="+A+"*X^3+"+B+"*X^2+"+C+"*X+"+D+"="+(A * Math.pow(Xk, 3)).toFixed(4)+"+"+(B * Math.pow(Xk, 2)).toFixed(4)+"+"+(C * Xk).toFixed(4)+D+"="+Fx.toFixed(4)+"<br>";
                
            L2k = b0 - a0;
            str1= str1+"L2k="+b0+"-"+a0+"="+L2k+"<br>";
            
            Yk = a0 + L2k / 4;
            str1= str1+"Yk=("+a0+"+"+L2k+")/4="+Yk+"<br>";
                
            Zk = b0 - L2k / 4;
            str1= str1+"Zk=("+b0+"-"+L2k+")/4="+Zk+"<br>";
                
            Fy = A * Math.pow(Yk, 3) + B * Math.pow(Yk, 2) + C * Yk + D;
            str1= str1+"F(y)="+A+"*Y^3+"+B+"*Y^2+"+C+"*Y+"+D+"="+(A * Math.pow(Yk, 3)).toFixed(4)+"+"+(B * Math.pow(Yk, 2)).toFixed(4)+"+"+(C * Yk).toFixed(4)+D+"="+Fy.toFixed(4)+"<br>";
            Fz = A * Math.pow(Zk, 3) + B * Math.pow(Zk, 2) + C * Zk + D;
            str1= str1+"F(z)="+A+"*Z^3+"+B+"*Z^2+"+C+"*Z+"+D+"="+(A * Math.pow(Zk, 3)).toFixed(4)+"+"+(B * Math.pow(Zk, 2)).toFixed(4)+"+"+(C * Zk).toFixed(4)+D+"="+Fz.toFixed(4)+"<br>";
        
            if( Fy < Fx){
                str1= str1+"F(y)="+Fy.toFixed(4)+"< F(z)="+Fz.toFixed(4)+"<br>";
                b1 = Xk;
                a1 = a0;
                Xk = Yk;
            }
        
            if(Fy > Fx){
                    
                if( Fz < Fx){
                    str1= str1+"F(z)="+Fz.toFixed(4)+"< F(x)="+Fx.toFixed(4)+"<br>";
                    a1 = Xk;
                    b1 = b0;
                    Xk = Zk;
                }
                if(Fz >= Fx) {
                    str1= str1+"F(z)="+Fz.toFixed(4)+">= F(x)="+Fx.toFixed(4)+"<br>";
                    a1 = Yk;
                    b1 = Zk;
                    Xk = Xk;
                }
            }
            absL2k = Math.abs(b1-a1);
            str1= str1+"|L2k|=|b(k+1)-a(k+1)|=|"+b1+"-"+a1+"|="+absL2k+"<br>";
            a0=a1;
            b0=b1;
            k++;
            
            str1= str1+"<hr>";
        } while(absL2k > e)
    
        str1= str1+"<h3>Ответ:</h3><br>"+"X э [" + a0 + ";" + b0 + "] <br>" + "X* = Xk =" + Xk;
        document.getElementById('math').innerHTML = str1;
        data = document.getElementById('math').innerHTML;
        
	}
    
    if (theGroup1[2].checked){
            
        document.getElementById('math').innerHTML = "";
    	alert("Данный метод появится в будущем");
	}
    
}
    
function download(data, name, type) {
  var a = document.getElementById("aaaaa");
  var file = new Blob([data], {type: type});
  aaaaa.href = URL.createObjectURL(file);
  aaaaa.download = name;
}
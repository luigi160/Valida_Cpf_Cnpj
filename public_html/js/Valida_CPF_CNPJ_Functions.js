/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ValidaCPF () {
    ////replace tira os elementos "." e "-" do CPF
    var cpf = document.getElementById("entrada").value;
    
    cpf = cpf.replace('.','').replace('.','').replace('.','').replace('-','');
    
    soma = 0;
    //SOMA RECEBE A MULTIPLICAÇÃO DE CADA POSICAO DO ARRAY PARA 1ª ETAPA DA VALIDACAO
    soma += cpf[0]*10;
    soma += cpf[1]*9;
    soma += cpf[2]*8;
    soma += cpf[3]*7;
    soma += cpf[4]*6;
    soma += cpf[5]*5;
    soma += cpf[6]*4;
    soma += cpf[7]*3;
    soma += cpf[8]*2;
    //RETO DA DIVISAO
    soma = (soma*10)%11;
    //SE SOMA>9 || SOMA RECEBE ZERO;
    if (soma===10 || soma===11)
    
    soma=0;
    
    console.log("Soma 1   "+soma);
    
    if(soma!=cpf[9])
    { 
     alert("CPF INVÁLIDO");    
     return false
    }
    
    //SOMA RECEBE A MULTIPLICAÇÃO DE CADA POSICAO DO ARRAY PARA 2ª ETAPA DA VALIDACAO 
    soma=0;
    soma += cpf[0]*11;
    soma += cpf[1]*10;
    soma += cpf[2]*9;
    soma += cpf[3]*8;
    soma += cpf[4]*7;
    soma += cpf[5]*6;
    soma += cpf[6]*5;
    soma += cpf[7]*4;
    soma += cpf[8]*3;
    soma += cpf[9]*2;
    
    soma = (soma*10)%11;
    
    if (soma===10 || soma===11)
    
    soma=0;
    
  
    console.log("Soma 2    "+soma);
    
    if(soma!=cpf[10]){
      
    alert("CPF INVÁLIDO");
    return false;
    
    }
    
    
    alert("CPF VÁLIDO");
    
    
}

function ValidaCNPJ ()
{
   //39.992.963/0001-54
   var cnpj = document.getElementById("entrada2").value;
   cnpj = cnpj.replace('.','').replace('.','').replace('/','').replace('-','');
   
   soma = 0;
   soma+= cnpj[0]*5;
   soma+= cnpj[1]*4;
   soma+= cnpj[2]*3;
   soma+= cnpj[3]*2;
   soma+= cnpj[4]*9;
   soma+= cnpj[5]*8;
   soma+= cnpj[6]*7;
   soma+= cnpj[7]*6;
   soma+= cnpj[8]*5;
   soma+= cnpj[9]*4;
   soma+= cnpj[10]*3;
   soma+= cnpj[11]*2;
   
   soma = (soma*10)%11;
   
   if(soma<2)
   
   {
      soma=0; 
        
   }
   
   console.log(soma);    
   
   if(soma!=cnpj[12])
   {
       window.alert("CNPJ inválido");
       return false;
    }
   var aux = soma;
   
   soma = 0;
   soma+= cnpj[0]*6;
   soma+= cnpj[1]*5;
   soma+= cnpj[2]*4;
   soma+= cnpj[3]*3;
   soma+= cnpj[4]*2;
   soma+= cnpj[5]*9;
   soma+= cnpj[6]*8;
   soma+= cnpj[7]*7;
   soma+= cnpj[8]*6;
   soma+= cnpj[9]*5;
   soma+= cnpj[10]*4;
   soma+= cnpj[11]*3;
   soma+= aux*2;
   
   
    soma = (soma*10)%11;
   
   if(soma<2)
   
   {
      soma=0; 
        
   }
   
    console.log(soma); 
   
   if(soma!=cnpj[13])
   {
       window.alert("CPNJ Inválido");
       return false
   }
   
   window.alert("CNPJ Válido");
    return true;
}


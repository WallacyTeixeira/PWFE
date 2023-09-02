let HT; //horas trabalhadas
let VH; //valor horas
let PD; //persentual de desconto
let TD; //total de descontos
let SB; //salario bruto
let SL; //salario liquido

HT = prompt ('Digite as Horas Trabalhadas:', 'Informe aqui.');
VH = prompt ('Entre com o valor da hora:','Informe aqui.')
PD = prompt ('Informe o Percentual de desconto:','em porcentagem');
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD; 


document.write('Salario =', SL);
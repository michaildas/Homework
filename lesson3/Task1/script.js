var answer1 = [];
var answer = "y";
while ((answer == "y") || (answer == "Y")){
var heads1 = prompt("Введите количество голов");
var legs1 = prompt("Введите количество ног");
if ( (heads1 != undefined) || (legs1 != undefined) ){
if (legs1%2!=0) {
	alert("Невозможные входные данные (нечетное количество ног)");
}
	else if (heads1 * 4 < legs1) {
		alert("Невозможные входные данные, если только у Вас коровы не с 5 ногами");}
	else if (heads1 * 2 > legs1) {
		alert("Невозможные входные данные, если только у Вас не одноногие курицы");}
else {answer1 = animals(heads1,legs1);
	alert("Голов =" + heads1 + "; Ног =" + legs1 + "; Коров ="+ 
	answer1[0] + "; Куриц =" + answer1[1]);
}}
answer = prompt("Еще раз? Y/y - да, N/n - нет","Y/N");	
}	
function animals(heads, legs){
	var answer = [];//answer[0] - cows, answer[1] - hens
	var cows;
	var hens;
	var flag;
	if (heads * 4 == legs) {answer[0] = heads; answer[1] = 0; return answer;}
	else if (heads * 2 == legs) {answer[1] = heads; answer[0] = 0; return answer;}
	else {
		cows = heads / 2; cows = cows - cows%1;
		hens = heads - cows;
		flag = cows * 4 + hens * 2;
		if (flag>legs) {flag = 0;}//Нужно меньше коров
		else {flag = 1;}//Нужно больше коров
		while (cows * 4 + hens * 2 != legs){
			if (flag) {cows--; hens--;}
			else {cows--; hens++;}
		}
		answer[0] = cows; answer[1] = hens;
		return answer;
	}
}


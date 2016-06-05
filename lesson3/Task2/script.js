var reaction = ["Чего так мало?", "Более чем достаточно", "Почему их так много?", 
"Ого, 101 далматинец!", "Ну ты вообще очумел"];
var numberAnimals;
var message; 
var answer = "Y";
function howManyAnimals (number){
	var respond;
	if (number <= 10) {respond = reaction[0];}
		else if (number <=50) {respond = reaction[1];}
		else if (number <=100) {respond = reaction[2];}
		else if (number ==101) {respond = reaction[3] + " " + reaction[2];}
	else {respond = reaction[4];}	
	return respond
}
while ((answer == "y") || (answer == "Y")){
numberAnimals = prompt("Сколько ты принес щенков?","");
message = howManyAnimals(numberAnimals);
alert(message);
answer = prompt("Еще раз? Y/y - да, N/n - нет","Y/N");	
}
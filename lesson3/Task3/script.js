var i;

for (i = 1; i < 101; i++)
	if (i % 3 == 0)
		if (i % 5 == 0)
			console.log("FIZZBUZZ");
		else 
			console.log("FIZZ");
	else if (i % 5 == 0)
			console.log("BUZZ");
	else 
		console.log(i);


function prime(number){

let factor=0;
for(let i=2;i<=number;i++){
		if(num%i === 0){
			factors++;

		}

	}
	if(factors == 2){
	return true;
	}
	return false;
}

let ans =prime(13);
if(ans==true){
console.log("prime");
}else{
console.log("Not Prime");
}
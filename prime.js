function prime(number){
for(let i=2;i<=number**(0.5);i++){
		if(num%i === 0){
			return false;
		}

	}
	return true;
}
console.log(prime(13));
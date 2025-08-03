const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let s=0;
	for(let i=0;i<arr.length;i++){
		if(i>0 && s<=n){
			s=s+i;
			return true;
			
		}
	}
};

//const n = prompt("Enter n: ");
//alert(JSON.stringify(divide(arr, n)));

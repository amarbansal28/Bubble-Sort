function countSwaps(a) {
    // Write your code here
    let swap = 0;
    for(let i =0;i<a.length;i++){
        for(let j =i+1;j<a.length;j++){
            if(a[i]>a[j]){
                swap++;
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;                
            }
        }   
    }
    console.log(`Array is sorted in ${swap} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
}
countSwaps([4, 2, 3, 1])

/*
op ->
Array is sorted in 5 swaps.
First Element: 1
Last Element: 4
*/

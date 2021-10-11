function findMinArray(arr, k) {
let outputArr = [arr.length];
    if(arr[k]<arr[0]) {
        for(let i=k;i>0;i--) {  /
            let temp = arr[i-1];
            arr[i-1]=arr[i];
            arr[i]=temp;
        }
    }
return arr;
}




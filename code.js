function mergesort(array) {
    if(!array.length > 1) {
            return array
        }

    for (maxGroupSize = 1 ; maxGroupSize < array.length; maxGroupSize *= 2) {

        for (group1L = 0 ; group1L < array.length ; group1L += maxGroupSize * 2){ 

            pointer1 = group1L
            pointer2 = pointer1 + maxGroupSize

            if (array[pointer2] == undefined){
                pointer2 = array.length-1
            }
    
            group1R = pointer2 - 1
            group2L = pointer2
            group2R = pointer2 + (maxGroupSize - 1)

            if (array[group2R] == undefined){
                group2R = array.length-1
            }
    
            if(array[pointer1] > array[group2R]){
                for (i = maxGroupSize; i > 0 ;i--){
                    let temp = array[pointer1]
                    array[pointer1] = array[pointer2]
                    array[pointer2] = temp
                }
    
            }
    
    
            if(array[group1R] < array[pointer2]){
                continue
            }
    
            while(pointer1 != group2R){


                if (array[pointer1] > array[pointer2]){
                    let temp = array[pointer1]
                    array[pointer1] = array[pointer2]
                    array[pointer2] = temp

                    pointer1++

                } else if (array[pointer1] <= array[pointer2]){

                    pointer1++
                }

                if (pointer1 == pointer2 && pointer1 != group2R){
                    
                    pointer1 = group1L

                    if (pointer2 < group2R){
                        pointer2++
                    }
                    else{
                        pointer2 = group2R
                    }
                }
            }    
        }
    }
    
    return array;
}



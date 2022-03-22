function minMaxScaling(numberList) {

    const scaledList = [];

    const maxNum = Math.max(...numberList);

    const minNum = Math.min(...numberList);

    for (i = 0; i < numberList.length; i++) {
        
        const currentNumber = numberList[i]

        const scaledNum = (currentNumber - minNum)/(maxNum - minNum);

        scaledList.push(scaledNum);
    }

    return scaledList;
}

console.log(minMaxScaling([5, 8, 4, 7, 3]))


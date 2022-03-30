export default function minMaxScaling(numberList: Array<number>) {

    const scaledList = [];

    const maxNum = Math.max(...numberList);
    const minNum = Math.min(...numberList);

    if(maxNum == minNum || numberList.length == 1) {
        return [...numberList]
    }

    for (let i = 0; i < numberList.length; i++) {
        
        const currentNumber = numberList[i]

        const scaledNum = (currentNumber - minNum)/(maxNum - minNum);

        scaledList.push(Math.round(scaledNum * 10) / 10);
    }

    return scaledList;
}

console.log(minMaxScaling([5, 8, 4, 7, 3]))


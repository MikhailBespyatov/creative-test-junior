// Функция для сдвига массива на COUNT чисел вправо
const COUNT = 3;
const arr = [1, 2, 3, 4, 5];


const shiftsArray = (arr, count) => {
    for (let i = 0; i < count; i++) {
        arr.unshift(arr.pop());
    };
    console.log(arr);
};

shiftsArray(arr, COUNT);
//
//Функция для нахождения самой длинной последовательности 2х строк
const string1 = 'aababba';
const string2 = 'abbaabcd';

const findSequence = (str1, str2) => {
    const arr = [];
    str1.split('').reduce((acc, current) => {
        if (str2.indexOf(`${acc}${current}`) !== -1) {
            arr.push(`${acc}${current}`);
            return `${acc}${current}`;
        } else return current;
    }, '');
    arr.sort((a, b) => {
        return b.length - a.length;
    });
    console.log(arr[0]);
    return arr[0];
};

findSequence(string1, string2);
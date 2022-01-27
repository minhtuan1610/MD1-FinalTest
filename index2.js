let arrInt = [1, 2, 3, 4, 5];

function returnIndex(a, array) {
    for (let i = 0; i < array.length; i++) {
        if (a == array[i]) {
            alert("Vị trí của phần tử trong mảng là: " + i);
            return i;
        }
    }
    alert("Phần tử không có trong mảng");
    return -1;
}

returnIndex(3, arrInt);
//TODO:// The following features can be added further
// 1- Game over
// 2- Game levels
// 3- Play with computer

let arr =
    [
        ['', '', '0'],
        ['', '', '0'],
        ['x', 'x', 'x']
    ];

function checkStatus(traverse) {
    for (let i = 0; i < arr.length; i++) {
        let prev = undefined;
        let count = 0;
        for (let j = 0; j < arr[i].length; j++) {

            if (traverse == 'vertically') {
                if (prev === undefined) {
                    prev = arr[i][j];
                    count = 1;
                }
                if (j > 0 && arr[i][j] == prev) {
                    prev = arr[i][j];
                    count++;
                }
            }
            if (traverse == 'horizontally') {
                if (prev === undefined) {
                    prev = arr[j][i];
                    count = 1;
                }

                if (j > 0 && arr[j][i] == prev) {
                    prev = arr[j][i];
                    count++;
                }
            }

            //TODO:// This can be done more dynamically
            if (traverse == 'diagonally') {
                if (i == j && j == 2 && arr[i - 1][j - 1] == arr[0][0] && arr[i][j] == arr[0][0]) {
                    count = 3;
                }
                else if (i == j && j == 2 && arr[0][j] == arr[0][0] && arr[0][j] == arr[1][1]) {
                    count = 3;
                }
            }
        }
        if (count == 3) {
            return { isSuccess: true, fromIndex: i, traveseDirection: traverse };
        }
    }
    return {isSuccess: false};
}


function play() {
    let traverse = ['vertically', 'horizontally', 'diagonally'];
    traverse.forEach(element => {
        let status = checkStatus(element);
        if (status.isSuccess) {
            console.log('Game completed ' + status.traveseDirection + ' from index ' + status.fromIndex);
        }
    });
}

play();
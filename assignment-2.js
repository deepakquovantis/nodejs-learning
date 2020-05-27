//TODO:// The following features can be added further
// 1- Game over
// 2- Game levels
// 3- Play with computer

class baseGame {
    constructor() {
    }
    play() { }
}

class TicTacToe extends baseGame {
    constructor() {
        super()
    }
    arr =
        [
            ['', '', '0'],
            ['', '', '0'],
            ['x', 'x', 'x']
        ];

    checkStatus(traverse) {
        for (let i = 0; i < this.arr.length; i++) {
            let prev = undefined;
            let count = 0;
            for (let j = 0; j < this.arr[i].length; j++) {

                if (traverse == 'vertically') {
                    if (prev === undefined) {
                        prev = this.arr[i][j];
                        count = 1;
                    }
                    if (j > 0 && this.arr[i][j] == prev) {
                        prev = this.arr[i][j];
                        count++;
                    }
                }
                if (traverse == 'horizontally') {
                    if (prev === undefined) {
                        prev = this.arr[j][i];
                        count = 1;
                    }

                    if (j > 0 && this.arr[j][i] == prev) {
                        prev = this.arr[j][i];
                        count++;
                    }
                }

                //TODO:// This can be done more dynamically
                if (traverse == 'diagonally') {
                    if (i == j && j == 2 && this.arr[i - 1][j - 1] == this.arr[0][0] && this.arr[i][j] == this.arr[0][0]) {
                        count = 3;
                    }
                    else if (i == j && j == 2 && this.arr[0][j] == this.arr[0][0] && this.arr[0][j] == this.arr[1][1]) {
                        count = 3;
                    }
                }
            }
            if (count == 3) {
                return { isSuccess: true, fromIndex: i, traveseDirection: traverse };
            }

        }
        return { isSuccess: false };
    }

    play() {
        let traverse = ['vertically', 'horizontally', 'diagonally'];
        traverse.forEach(element => {
            let status = this.checkStatus(element);
            if (status.isSuccess) {
                console.log('Game completed ' + status.traveseDirection + ' from index ' + status.fromIndex);
            }
        });
    }
}

let ticTacToe = new TicTacToe();
ticTacToe.play();
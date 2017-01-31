class TicTacToe {

    constructor() {
        this.matrix = [[null, null, null],
                       [null, null, null],
                       [null, null, null]];
        this.player = true;
    }

    getCurrentPlayerSymbol() {
        return this.player ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.player = !this.player;
        }
    }

    isFinished() {
        if (this.noMoreTurns() || this.getWinner() != null)
            return true;
        else
            return false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][0] == this.matrix[i][2] && this.matrix[i][0] != null)
                return this.matrix[i][0];
            if (this.matrix[0][i] == this.matrix[1][i] && this.matrix[0][i] == this.matrix[2][i] && this.matrix[0][i] != null)
                return this.matrix[0][i];
        }
        if (this.matrix[0][0] == this.matrix[1][1]  && this.matrix[0][0] == this.matrix[2][2] && this.matrix[0][0] != null)
            return this.matrix[0][0];
        if (this.matrix[2][0] == this.matrix[1][1]  && this.matrix[2][0] == this.matrix[0][2] && this.matrix[2][0] != null)
            return this.matrix[2][0];
        return null;
    }

    noMoreTurns() {
        let counter = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] == null)
                    counter++;
            }
        }
        if (counter > 0)
            return false;
        else return true;
    }

    isDraw() {
        if (!this.noMoreTurns() || this.getWinner() != null)
            return false;
        else
            return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

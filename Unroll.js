function unroll(square) {
    const result = [];
    let top = 0;
    let bottom = square.length - 1;
    let left = 0;
    let right = square[0].length - 1;

    while (top <= bottom && left <= right) {
        // Move right
        for (let i = left; i <= right; i++) {
            result.push(square[top][i]);
        }
        top++;

        // Move down
        for (let i = top; i <= bottom; i++) {
            result.push(square[i][right]);
        }
        right--;

        // Move left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(square[bottom][i]);
            }
            bottom--;
        }

        // Move up
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(square[i][left]);
            }
            left++;
        }
    }

    return result;
}
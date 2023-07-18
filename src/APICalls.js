import axios from 'axios';

/**
 * getAllBoards takes no arguments.
 * Returns an array of boards
 * @returns {Promise<Board[]>} Promise object represents an array of Board objects
 */
export const getAllBoards = () => {
    return axios
    .get('https://inspiration-board-backend-t6x0.onrender.com/boards')
    .then(response => {
        const allBoards = response.data
        console.log(allBoards)
        return allBoards
    })
};



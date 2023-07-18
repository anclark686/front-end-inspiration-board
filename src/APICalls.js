import axios from 'axios';

const kBaseUrl = 'https://inspiration-board-backend-t6x0.onrender.com/boards';

/**
 * getAllBoards takes no arguments.
 * Returns an array of boards
 * @returns {Promise<Board[]>} Promise object represents an array of Board objects
 */
export const getAllBoards = () => {
    return axios
    .get(`${kBaseUrl}`)
    .then(response => {
        const allBoards = response.data
        return allBoards
    });
};

/**
 * getSelectedBoard takes one argument, an int representing an id.
 * Returns a board
 * @param {Int} id must be an integer
 * @returns {Promise<Board>} Promise object represents a Board object
 */
export const getSelectedBoard = (id) => {
    return axios
    .get(`${kBaseUrl}/${id}`)
    .then(response => {
        const selectedBoard = response.data
        return selectedBoard
    });
};


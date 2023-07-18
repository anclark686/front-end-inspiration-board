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
 * getSelectedBoard takes one argument, an int representing a board id.
 * Returns a board
 * @param {int} id must be an integer
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

/**
 * createNewBoard takes one argument, an object containing data needed to create a new Board object .
 * Returns the newly created board
 * @param {Object} data
 * @param {String} data.title
 * @param {String} data.owner
 * @returns {Promise<Board>} Promise object represents a Board object
 */
export const createNewBoard = (data) => {
    axios
    .post(kBaseUrl, data)
    .then(response => {
        const newBoard = response.data
        return newBoard
    });
};

/**
 * createNewCard takes one argument, an object containing data needed to create a new Card object .
 * Returns the newly created card
 * @param {Object} data
 * @param {String} data.message
 * @param {int} data.likes_count
 * @param {int} data.board_id
 * @returns {Promise<Card>} Promise object represents a Card object
 */
export const createNewCard = (data) => {
    axios
    .post(`${kBaseUrl}/${data.board_id}/cards`, data)
    .then(response => {
        console.log(response.data)
        const newCard = response.data
        return newCard
    })
}


/**
 * getBoardCards takes one argument, an int representing a board id
 * Returns an array of cards associated with that board_id
 * @param {int} id must be an integer
 * @returns {Promise<Card[]>} Promise object represents an array of Card objects
 */
export const getBoardCards = (id) => {
    return axios
    .get(`${kBaseUrl}/${id}/cards`)
    .then(response => {
        const allCards = response.data
        console.log(allCards)
        return allCards
    })
}
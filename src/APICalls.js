import axios from 'axios';

const kBoardBaseUrl = 'https://inspiration-board-backend-t6x0.onrender.com/boards';

// API CALL FUNCTIONS FOR board_routes

/**
 * getAllBoards takes no arguments.
 * Returns an array of boards
 * @returns {Promise<Board[]>} Promise object represents an array of Board objects
 */
export const getAllBoards = () => {
    return axios
    .get(`${kBoardBaseUrl}`)
    .then(response => {
        const allBoards = response.data;
        return allBoards;
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
    .get(`${kBoardBaseUrl}/${id}`)
    .then(response => {
        const selectedBoard = response.data;
        return selectedBoard;
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
    return axios
    .post(kBoardBaseUrl, data)
    .then(response => {
        const newBoard = response.data;
        return newBoard;
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
    return axios
    .post(`${kBoardBaseUrl}/${data.board_id}/cards`, data)
    .then(response => {
        const newCard = response.data;
        return newCard;
    });
};

/**
 * getBoardCards takes one argument, an int representing a board id
 * Returns an array of cards associated with that board_id
 * @param {int} id must be an integer
 * @returns {Promise<Card[]>} Promise object represents an array of Card objects
 */
export const getBoardCards = (id) => {
    return axios
    .get(`${kBoardBaseUrl}/${id}/cards`)
    .then(response => {
        const allCards = response.data
        console.log(allCards)
        return allCards
    });
};


// API CALL FUNCTIONS FOR card_routes

const kCardBaseUrl = 'https://inspiration-board-backend-t6x0.onrender.com/cards';

/**
 * deleteCard takes one argument, an int representing a card id.
 * Does not return anything.
 * @param {int} id must be an integer
 */
export const deleteCard = (id) => {
    axios
    .delete(`${kCardBaseUrl}/${id}`)
    }

/**
 * addCardLike takes one argument, an int representing a card id.
 * Returns the updated card
 * @param {int} id must be an integer
 * @returns {Promise<Card>} Promise object represents a Card object
 */
export const addCardLike = (id) => {
    return axios
    .patch(`${kCardBaseUrl}/${id}/add_like`)
    .then(response => {
        const updatedCard = response.data
        return updatedCard
    })
}
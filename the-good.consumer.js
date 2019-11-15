/**
 * Creates person
 * @param {String} name - person name
 * @param {Object} info - person info
 * @returns {Object} - new person
 */
function createPerson(name, info) {
	return { name, info };
}

/**
 * Shows some info about person
 * @param {Object} person - some person
 */
function showPersonInfo(person) {
	console.log(person.info)
}

/**
 * person info
 * @type {Object}
 */
const personInfo = { z: 1, y: 2 };

/**
 * @type {Object} person
 */
const person = createPerson('134', personInfo);

export default showPersonInfo(person);
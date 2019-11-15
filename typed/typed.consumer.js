// @ts-nocheck

// import unusedVariable from "../model/person";


// /**
//  * @typedef {import('../model/person').PersonInfo} PersonInfo
//  * @typedef {import('../model/person').Person} Person
//  */


/**
 * Creates person
 * @param {String} name - person name
 * @param {PersonInfo} info - person info
 * @returns {Person} - new person
 */
function createPerson(name, info) {
	return { name, info, value: false };
}

/**
 * Shows some info about person
 * @param {Person} person - some person
 */
function showPersonInfo(person) {
	console.log(person.x)
}

/**
 * person info
 * @type {PersonInfo}
 */
const personInfo = { z: 1, y: 2 };

/**
 * @type {Person} person
 */
const person = createPerson('134', personInfo);

export default showPersonInfo(person);
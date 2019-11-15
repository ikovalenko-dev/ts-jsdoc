function createPerson(name, info) {
	return { name, info };
}

function showPersonInfo(person) {
	console.log(person.info)
}

const personInfo = { z: 1, y: 2 };
const person = createPerson('134', personInfo);

export default showPersonInfo(person);
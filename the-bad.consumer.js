
function f(a, b) {
	return { a, b };
}

function g(p) {
	console.log(p.a)
}

const n = { z: 1, y: 2 }
const s = f('134', n)

export default g(s);
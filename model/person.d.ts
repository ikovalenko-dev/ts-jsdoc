declare namespace Model {
	export interface Person {
		name: string,
		info: PersonInfo
	}

	export interface PersonInfo {
		age: Number,
		salary: Number,
		social: String,
		height?: Number
	}
}
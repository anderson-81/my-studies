const Sequelize = require('sequelize')
const DataTypes = require('sequelize')

const seq = new Sequelize('dbSeq', 'postgres', '121181', {
	host: 'localhost',
	dialect: 'postgres'
})

const Person = seq.define('Person', {
	name: {
		type: DataTypes.STRING(45),
		allowNull: false		
	},
	email: {
		type: DataTypes.STRING(45),
		allowNull: false,
		unique: 'unqEmail'
	},
	salary: {
		type: DataTypes.DECIMAL(10,2),
		allowNull: false
	},
	birthday: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	gender: {
		type: DataTypes.STRING(1),
		allowNull: false
	},
}, { tablename: 'Pessoa' })
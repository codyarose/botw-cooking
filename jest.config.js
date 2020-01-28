module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.(ts|tsx)?$' : 'ts-jest',
	},
	testMatch: ['<rootDir>/src/**/__tests__/**/*.ts?(x)'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/public/'],
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
	],
	moduleNameMapper: {
		"\\.(css|scss|svg)$": "identity-obj-proxy"
	}
}

module.exports = {
	roots: [
		'src'
	],
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'src/(.*)': '<rootDir>/src/$1'
	},
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	'moduleFileExtensions': [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node'
	],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
}

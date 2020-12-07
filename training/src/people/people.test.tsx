import {appTitle, doSomething, doSomethingArrow} from './people'


test('a trivial test', () => {
	expect(true).toBe(true)
})

test('a appTitle to be P E O P L E', () => {
	expect(appTitle).toBe('P E O P L E')
})


test('func', () => {
	expect(doSomethingArrow()).toBe('OK')
})

function internal(){
	expect(doSomething()).toBe('OK')

}


test('func2', internal)

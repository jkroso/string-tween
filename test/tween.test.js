
var assert = require('assert')
var tween = require('..')

describe('string-tween', function(){
	it('simple numbers', function(){
		var frame = tween('rgb(0,0,0)', 'rgb(100,100,100)')
		assert(frame(0) == 'rgb(0,0,0)')
		assert(frame(0.01) == 'rgb(1,1,1)')
		assert(frame(0.5) == 'rgb(50,50,50)')
		assert(frame(1) == 'rgb(100,100,100)')
	})

	it('exponents', function(){
		var frame = tween('rgb(0,0,0)', 'rgb(1e2,1e2,1e2)')
		assert(frame(0) == 'rgb(0,0,0)')
		assert(frame(0.5) == 'rgb(50,50,50)')
		assert(frame(1) == 'rgb(100,100,100)')
	})

	it('preserve whitespace', function(){
		var frame = tween('rgb(0, 0, 0)', 'rgb(100, 100, 100)')
		assert(frame(0) == 'rgb(0, 0, 0)')
		assert(frame(0.5) == 'rgb(50, 50, 50)')
		assert(frame(1) == 'rgb(100, 100, 100)')
	})

	it.skip('uneven number counts', function(){
		var frame = tween('rgb(0,0)', 'rgb(100,100,100)')
		assert(frame(0) == 'rgb(0,0,100)')
		assert(frame(0.5) == 'rgb(50,50,100)')
		assert(frame(1) == 'rgb(100,100,100)')
	})
})

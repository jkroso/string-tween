
/**
 * number pattern
 * @type {RegExp}
 */

var number = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g

module.exports = tween

/**
 * create a tween generator from `a` to `b`
 *
 * @param {String} a
 * @param {String} b
 * @return {Function}
 */

function tween(a, b){
	var string = []
	var keys = []
	var from = []
	var to = []
	var cursor = 0
	var m

	while (m = number.exec(b)) {
		if (m.index > cursor) string.push(b.slice(cursor, m.index))
		to.push(Number(m[0]))
		keys.push(string.length)
		string.push(null)
		cursor = number.lastIndex
	}
	if (cursor < b.length) string.push(b.slice(cursor))

	while (m = number.exec(a)) from.push(Number(m[0]))

	return function frame(n){
		var i = keys.length
		while (i--) string[keys[i]] = from[i] + (to[i] - from[i]) * n
		return string.join('')
	}
}

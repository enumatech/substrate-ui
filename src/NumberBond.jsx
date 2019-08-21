const React = require('react')
const {InputBond} = require('./InputBond')

function formatValue(n) {
	return `${n}`
}

function interpretRender(s) {
    return parseFloat(s)
}

class NumberBond extends InputBond {
	constructor() {
		super()
	}

	handleBlur () {
		let s = this.state
		if (typeof(s.corrected) === 'string') {
			s.display = s.corrected
			delete s.corrected
			this.setState(s)
		}
	}
}

NumberBond.defaultProps = {
	placeholder: '0',
	defaultValue: '',
	validator: (u, s) => {
		let q = u === ''
			? 0
			: interpretRender(u)
        return isNaN(q)
            ? null
            : {
                internal: q,
                // display: d,
                corrected: formatValue(q),
                external: q,
                ok: true
            }
	}
}

module.exports = { NumberBond }

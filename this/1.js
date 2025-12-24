const parentFunction = function () {
	return () => {
		console.log(this)
	}
}

parentFunction("Imma child!")
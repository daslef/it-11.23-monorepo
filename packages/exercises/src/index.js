function parseArrayEntries(entries) {
	/**
	 * @param [['id', 7], ['hash', 'hsk471']]
	 * @returns { id: 7, hash: 'hsk471'}
	 */

	return Object.fromEntries(entries);
}

function withMetaData(valueObject) {
	/**
	 * @param { id: 4, itemId: 2, operation: "success" }
	 * @returns { id: 4, itemId: 2, operation: "success", createdAt: 1731407124112 }
	 */

	return {
		...valueObject,
		createdAt: Date.now(),
	};
}

export { parseArrayEntries, withMetaData };

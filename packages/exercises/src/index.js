function parseArrayEntries(entries) {
  /**
   * @param [['id', 7], ['hash', 'hsk471']]
   * @returns { id: 7, hash: 'hsk471'}
   */

  return Object.fromEntries(entries);
}

export { parseArrayEntries };

// src/data/data.js
const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    // id: Date.now() + i,
    id: i,
    title: `Note ${i}`
  }))

module.exports = notes
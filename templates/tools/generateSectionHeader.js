async function generateSectionHeader (level, type, state) {
  let header = '\n'
  for (let i = 0; i < level; i++) {
    header = header.concat('#')
  }
  if (state !== undefined) {
    const capitalizedState = state.charAt(0).toUpperCase() + state.slice(1)
    header = header.concat(' ', capitalizedState, ' ', type)
  } else {
    header = header.concat(' ', type)
  }
  header = header.concat('\n\n')

  return header
}

module.exports = generateSectionHeader

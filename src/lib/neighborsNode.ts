import { type Node } from './nodeProcessor'

export const getNeighbors = (node: Node, grid: Node[][]) => {
  const neighbors = []
  const { row, col } = node
  const offsets = [
    { row: -1, col: 0 },
    { row: 0, col: -1 },
    { row: 1, col: 0 },
    { row: 0, col: 1 },
  ]

  for (const offset of offsets) {
    const newRow = row + offset.row
    const newCol = col + offset.col

    if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
      const neighbor = grid[newRow][newCol]

      if (!neighbor.isVisited && neighbor.opaque !== 1) {
        neighbors.push(neighbor)
      }
    }
  }

  return neighbors
}

import {
  atomsWithTanstackInfiniteQuery,
  atomsWithTanstackMutation,
  atomsWithTanstackQuery,
  queryClientAtom,
} from '../src/index'

describe('basic spec', () => {
  it('should export functions', () => {
    expect(queryClientAtom).toBeDefined()
    expect(atomsWithTanstackQuery).toBeDefined()
    expect(atomsWithTanstackInfiniteQuery).toBeDefined()
    expect(atomsWithTanstackMutation).toBeDefined()
  })
})

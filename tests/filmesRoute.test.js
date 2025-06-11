const axios = require('axios')

describe('JSON Server /filmes', () => {
  it('deve devolver a lista de filmes com status 200', async () => {
    const response = await axios.get('http://localhost:3000/filmes?_sort=titulo')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.data)).toBe(true)

    const filme = response.data.find(f => f.title === 'Across the Line')
    expect(filme).toBeDefined()
    expect(filme).toHaveProperty('year', 2000)
    expect(filme.cast).toContain('Brad Johnson')
  })
})

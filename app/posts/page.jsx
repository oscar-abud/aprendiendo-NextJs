"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react'

const metadata = {
  title: "Pagina de Posts",
  description: "Posts de usuarios con IDS",
};

function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  // Id del post
  const [postIdFilter, setPostIdFilter] = useState("")
  const [postId, setPostId] = useState()
  // Id del usuario
  const [userIdFilter, setUserIdFilter] = useState("")

  async function getPosts() {
        try {
          setLoading(true)
          setError(null)
          setPostId()
          
          let url = `https://jsonplaceholder.typicode.com/posts`

          if(postIdFilter) {
            url += `/${postIdFilter}`
            setPostId(postIdFilter)
          } else if(userIdFilter) {
            url += `?userId=${userIdFilter}`
          }

          const res = await fetch(url)

          if (!res.ok) throw new Error("No se pudo obtener la información")

          const data = await res.json()

          if (postIdFilter && !Array.isArray(data)) {
            setPosts([data])
          } else {
            setPosts(data)
          }
        } catch (error) {
          console.error("Ocurrio un error", error)
          setError(err.message || "Error al cargar posts")
        } finally {
          setLoading(false)
        }
    }

  useEffect(() => { getPosts() }, [])

  const manejarKeyDown = (e, callback) => { if(e.key === "Enter") callback() }

  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <section style={{ display: "flex", gap: "10px" }}>
          <input 
            type="text"
            placeholder="Filtrar por User ID..."
            value={userIdFilter}
            onChange={(e) => setUserIdFilter(e.target.value)}
            onKeyDown={(e) => manejarKeyDown(e, getPosts)}
          />
          <button onClick={getPosts}>Buscar por Usuario</button>
        </section>

        <section style={{ display: "flex", gap: "10px" }}>
          <input 
            type="text"
            placeholder="Filtrar por ID Post..."
            value={postIdFilter}
            onChange={(e) => setPostIdFilter(e.target.value)}
            onKeyDown={(e) => manejarKeyDown(e, getPosts)}
          />
          <button onClick={getPosts}>Buscar por Post</button>
        </section>
      </div>

      {postId && <h3>Estas viendo el Post con id: {postId}</h3>}

      {!loading && <p>Total de posts: {posts.length}</p>}

      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <ul style={{ display: 'flex', flexDirection: "column", gap: "10px", padding: 0 }}>
          {posts.map(post => (
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                border: "1px solid #1a1a1a", 
                maxWidth: "350px", 
                padding: "10px" 
              }} 
              key={post.id} 
              id={`post-${post.id}`}
            >
              <h3>Usuario con id: {post.userId}</h3>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Posts
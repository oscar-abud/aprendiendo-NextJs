"use client"

import { useRouter } from "next/navigation"
import React from 'react'

export default function TodoPerUser({ todo, user }) {
  if (!todo || !user) return null

  const router = useRouter()

  return (
    <div style={{
      maxWidth: '550px',
      margin: '24px auto',
      padding: '24px',
      borderRadius: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      border: '1px solid #e5e7eb',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#1f2937'
    }}>
      {/* Sección del Todo */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
        <div>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Tarea #{todo.id}
          </span>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '4px', textTransform: 'capitalize', color: '#111827', lineHeight: '1.4' }}>
            {todo.title}
          </h2>
        </div>
        
        <span style={{
          padding: '6px 12px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: '600',
          whiteSpace: 'nowrap',
          backgroundColor: todo.completed ? '#d1fae5' : '#fef3c7',
          color: todo.completed ? '#065f46' : '#92400e'
        }}>
          {todo.completed ? '✓ Completado' : '⏳ Pendiente'}
        </span>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: '16px 0' }} />

      {/* Sección del Usuario */}
      <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #f3f4f6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            {user.name.charAt(0)}
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#111827' }}>{user.name}</h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>@{user.username}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', fontSize: '13px', color: '#374151' }}>
          <p style={{ margin: 0 }}><strong>✉️ Email:</strong> {user.email}</p>
          <p style={{ margin: 0 }}><strong>📞 Tel:</strong> {user.phone}</p>
          <p style={{ margin: 0 }}><strong>🌐 Web:</strong> {user.website}</p>
          <p style={{ margin: 0 }}><strong>🏢 Empresa:</strong> {user.company?.name}</p>
          <p style={{ margin: 0 }}><strong>📍 Ciudad:</strong> {user.address?.city}</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          margin: '10px'
        }}
      >
        <button 
          style={{border: 'none 1px solid', cursor: 'pointer', borderRadius: '4px'}}
          onClick={() => router.push('/todo')}
        >
          Volver
        </button>

        <button 
          style={{border: 'none 1px solid', cursor: 'pointer', borderRadius: '4px'}} 
          onClick={() => alert(`Saludando al usuario ${user.name}`)}
        >
          Saludar
        </button>
      </div>
    </div>
  )
}
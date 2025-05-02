import { useUserStore } from '@/store/userStore'
import Link from 'next/link'
import { useState } from 'react'

export default function UpdatePage() {
  const { name, age, setName, setAge } = useUserStore()
  const [newName, setNewName] = useState(name)
  const [newAge, setNewAge] = useState(age)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setName(newName)
    setAge(newAge)
    alert('정보가 수정되었습니다!')
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🛠 정보 수정</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>이름: </label>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>나이: </label>
          <input
            type="number"
            value={newAge}
            onChange={(e) => setNewAge(Number(e.target.value))}
          />
        </div>
        <button type="submit">수정 완료</button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/">⬅ 메인 페이지로</Link>
      </div>
    </main>
  )
}
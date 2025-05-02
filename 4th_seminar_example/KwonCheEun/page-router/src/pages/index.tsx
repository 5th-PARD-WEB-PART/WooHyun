export default function Tail() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        📱 Tailwind 반응형 예제
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="h-32 flex items-center justify-center text-white bg-red-500 sm:bg-green-500 md:bg-blue-500 rounded-lg">
          박스 1
        </div>
        <div className="h-32 flex items-center justify-center text-white bg-red-500 sm:bg-green-500 md:bg-blue-500 rounded-lg">
          박스 2
        </div>
        <div className="h-32 flex items-center justify-center text-white bg-red-500 sm:bg-green-500 md:bg-blue-500 rounded-lg">
          박스 3
        </div>
        <div className="h-32 flex items-center justify-center text-white bg-red-500 sm:bg-green-500 md:bg-blue-500 rounded-lg">
          박스 4
        </div>
        <div className="h-32 flex items-center justify-center text-white bg-red-500 sm:bg-green-500 md:bg-blue-500 rounded-lg">
          박스 5
        </div>
        <div className="h-32 flex items-center justify-center text-white bg-red-500 sm:bg-green-500 md:bg-blue-500 rounded-lg">
          박스 6
        </div>
      </div>
    </main>
  )
}
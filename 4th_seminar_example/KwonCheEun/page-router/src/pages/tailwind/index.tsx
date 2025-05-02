import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <header className="bg-blue-500 text-white text-center py-10">
        <h1 className="text-4xl font-extrabold">Tailwind CSS Example</h1>
        <p className="text-xl mt-4">A showcase of Tailwind CSS utilities.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="https://img.onnada.com/2022/0202/5f21eef217.jpg" alt="Card 1" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold text-center mt-4">치이카와</h2>
          <p className="text-gray-500 text-center mt-2">This is a description of the first card.</p>
          <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Learn More</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="https://cdn.hddfs.com/files/dm/20231121/087b2fc6_202311211116319630.jpg?sf=webp&RS=750X902" alt="Card 2" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold text-center mt-4">루피</h2>
          <p className="text-gray-500 text-center mt-2">This is a description of the second card.</p>
          <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Learn More</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/vuyIRQbt6-tQGfW80jNaVS5zjTw" alt="Card 3" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold text-center mt-4">망곰이</h2>
          <p className="text-gray-500 text-center mt-2">This is a description of the third card.</p>
          <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Learn More</button>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Tailwind Text Styling</h2>
        <p className="text-lg text-gray-700">
          Tailwind CSS offers a wide range of text utilities to style your content. You can adjust text size, color, and weight easily.
        </p>
        <p className="text-xl text-red-500 font-bold mt-4">This is a bold, red text.</p>
        <p className="text-lg text-green-600 italic mt-4">This is italic green text.</p>
        <p className="text-lg text-yellow-600 underline mt-4">This is underlined yellow text.</p>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Tailwind Button Styling</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Primary Button</button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">Success Button</button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">Danger Button</button>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Responsive Design Example</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Responsive Box 1</h3>
            <p className="text-gray-500">This box changes layout on different screen sizes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Responsive Box 2</h3>
            <p className="text-gray-500">This box changes layout on different screen sizes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Responsive Box 3</h3>
            <p className="text-gray-500">This box changes layout on different screen sizes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Responsive Box 4</h3>
            <p className="text-gray-500">This box changes layout on different screen sizes.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
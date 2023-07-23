import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/image-upload">画像をアップロードする</a>
        </nav>
      </header>
      <main>
        <h2>ようこそ！</h2>
        <p>このアプリケーションは・・・</p>
        <button>始める</button>
      </main>
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
};

export default Home;

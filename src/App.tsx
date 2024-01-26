import './App.css';
import chessLogo from './assets/chess-logo.png';
import githubLogo from './assets/github-logo.svg';
import instagramLogo from './assets/instagram-logo.svg';
import telegramLogo from './assets/telegram-logo.svg';
import meImg from './assets/me.jpg';

function App() {
  return (
    <main class='main'>
      <section>
        <h2>
          Hi there 👋
          <br />
          I'm Azat Nurmammedov
        </h2>
        <img src={meImg} alt='Azat Nurmammedov' />
        <p>
          Software engineer and chess player
          <br />
          Love fiction books and my old guitar 🎸
        </p>
      </section>
      <div aria-hidden={true} class='main-links'>
        <a href='https://github.com/AzatCoder'>
          <img src={githubLogo} />
        </a>
        <a href='https://t.me/azatjandost'>
          <img src={telegramLogo} />
        </a>
        <a href='https://www.instagram.com/azat_nurr/'>
          <img src={instagramLogo} />
        </a>
        <a href='https://www.chess.com/member/azatnew'>
          <img src={chessLogo} />
        </a>
      </div>
    </main>
  );
}

export default App;

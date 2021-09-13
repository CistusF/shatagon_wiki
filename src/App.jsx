import style from './App.module.css';
import Header from './modules/Header';
import Footer from './modules/Footer';
import './index.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="Main">
        <Header />

        <h1 className={style.header}>샤타곤 함대 위키봇</h1>
        <h4 className={style.sub}>스타시티즌의 정보를 정리한 멋있는 봇</h4>

        <div className={style.center}>
          <Button variant="primary" size="lg" onClick={() => {
            window.location = "https://discord.com/oauth2/authorize?client_id=617915589629050890&permissions=8&scope=bot";
          }}>
            봇 초대
          </Button>
          <Button variant="primary" size="lg" onClick={() => {
            window.location = "/login";
          }}>
            관리자 로그인
          </Button>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;

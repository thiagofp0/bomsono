import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';


export default function Reservas(){
  return(
    <div className="content">
      <AsideNav/>
      <section>
        <Header/>
        <main>
          <h1>Reservas</h1>
        </main>
      </section>
  </div>
  );
}
import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';


export default function Servicos(){
  return(
    <div className="content">
      <AsideNav/>
      <section>
        <Header/>
        <main>
          <h1>Servicos</h1>
        </main>
      </section>
  </div>
  );
}
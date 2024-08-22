'use client'

import styles from './styles/home.module.scss'
import img from '../../public/Logo.png'

import logoimg from '../../public/logo-simbolo.png'

import Image from 'next/image'

import { FaLocationDot } from "react-icons/fa6";

import { IoCarSportOutline } from "react-icons/io5";

import { FaStethoscope } from "react-icons/fa6";

import { FaCoins } from "react-icons/fa";

import { LuHeartHandshake } from "react-icons/lu";

import { IoLogoWhatsapp } from "react-icons/io";

import { AiFillInstagram } from "react-icons/ai";

import { MdEmail } from "react-icons/md";

import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
      <>
      <title>Seg Portfolio</title>
      <div className={styles.maincontainer}>
        <header className={styles.navbar}>
          <div className={styles.logoNavBar}><a href="/"><Image src={logoimg} alt="LogoImg" className={styles.logonav}/></a></div>
        
        
          <nav>
            <ul>
              <li><a href="#secseguros">Seguros</a></li>
              <li><a href="#secsimulacao">Simulação</a></li>
              <li><a href="#seccontato">Contato</a></li>
              <li><a href="login-adm">Login</a></li>
            </ul>
          </nav>
        </header>
        <div className={styles.banner}>
          <Image src={img} alt="Logo" id={styles.logobanner} />
        </div>
        <div className={styles.simulacao}>
          <div id='secsimulacao'>
            <h2>Direto ao ponto: Faça sua simulação</h2>
          </div>
          <article className={styles.cardlist}>
            
              <section className={styles.card}>
                  
                  <button onClick={ ()=>{ router.push('/seguro-veiculos')}}>
                    <IoCarSportOutline className={styles['icons-simulacao']}/>
                    <h1>Seguro de Veículos</h1>
                    <p>Proteja seu patrimônio e garanta tranquilidade na estrada!</p>
                  </button>
                
              
              </section>
            
            <section className={styles.card}>
            <button onClick={()=>{router.push('/seguro-de-vida')}}>
              < LuHeartHandshake className={styles['icons-simulacao']}/>
                <h1>Seguro de Vida</h1>
                <p>Proteja quem você ama com o seguro de vida!</p>
            </button>
              
            </section>
            <section className={styles.card}>
              <button onClick={()=>{router.push('/consorcio')}}>
                <FaCoins className={styles['icons-simulacao']}/>
                <h1>Consórcio</h1>
                <p>Realize seus sonhos de forma planejada: entre para um consórcio e conquiste seu bem desejado!</p>
              </button>
              
            </section>
            <section className={styles.card}>
              <button onClick={()=>{router.push('/convenio')}}>
                <FaStethoscope className={styles['icons-simulacao']}/>
                <h1>Convênio Médico</h1>
                <p>Cuide da sua saúde e da sua família com um convênio médico: atendimento de qualidade sempre!</p>
              </button>
              
            </section>
          </article>
        </div>
        <div className={styles.about}>
          <div className={styles.abouttittle} id='secseguros'>
            <h1>Saiba mais sobre os nossos serviços:</h1>
          </div>
        <article>
          <section className={styles.aboutsec}>
            <div className={styles.abouttext}>
              <h2>Seguro de Veículos</h2>
              <p>
                  O seguro de veículos é um serviço essencial para proteger seu automóvel contra uma variedade de riscos e imprevistos. Com a contratação desse serviço, você garante cobertura financeira em casos de acidentes, furtos, roubos, incêndios e danos causados por desastres naturais, entre outros eventos inesperados. Além disso, o seguro pode incluir assistência 24 horas, oferecendo serviços como guincho, socorro mecânico e outros atendimentos emergenciais.</p>
            </div>
            <div className={styles.aboutImg}>

            </div>
          </section>
          <section className={styles.aboutsec2}>
            <div className={styles.abouttext2}>
              <h2>Seguro de Vida</h2>
              <p>
                  O seguro de vida é uma forma de proteger financeiramente seus familiares e dependentes em caso de falecimento. Com a contratação desse serviço, você garante o pagamento de uma indenização aos beneficiários em caso de morte ou invalidez permanente. Além disso, o seguro de vida pode oferecer coberturas adicionais, como assistência funeral, diárias por incapacidade temporária e auxílio em casos de doenças graves.</p>
            </div>
              <div className={styles.aboutImg2}>

              </div>
          </section>
          <section className={styles.aboutsec}>
            <div className={styles.abouttext}>
              <h2>Consórcio</h2>
              <p>
                  O consórcio é uma modalidade de compra parcelada em que um grupo de pessoas se reúne para adquirir um bem ou serviço em comum. Por meio de contribuições mensais, os participantes têm a oportunidade de ser contemplados com a carta de crédito e realizar a compra do bem desejado. O consórcio é uma alternativa econômica e planejada para quem deseja adquirir um veículo, imóvel ou outro bem de forma programada e sem juros.</p>
            </div>
            <div className={styles.aboutImg3}>

            </div>
          </section>
          <section className={styles.aboutsec2}>
            <div className={styles.abouttext2}>
              <h2>Convênio Médico</h2>
              <p>
                  O convênio médico é um serviço de assistência à saúde que oferece acesso a consultas, exames, internações e outros procedimentos médicos em uma rede credenciada de profissionais e estabelecimentos de saúde. Com a contratação desse serviço, você e sua família podem contar com atendimento de qualidade, agilidade no agendamento de consultas e exames, e suporte em casos de emergência. O convênio médico é essencial para garantir o bem-estar e a segurança de todos os beneficiários.</p>
            </div>
            <div className={styles.aboutImg4}>

            </div>
          </section>
        </article>
        </div>
        <div className={styles.footer}>
        <div className={styles.footercontato} id='seccontato'>
          <h3>Contato:</h3>
          <div className={styles.infocontato}>
            
              <IoLogoWhatsapp className={styles['icons-rodape']}/>
              <span>99999-9999</span>
            
          </div>
          <div className={styles.infocontato}>
            
              <AiFillInstagram className={styles['icons-rodape']} />
              <span>@userexemplo</span>
            
          </div>
          <div className={styles.infocontato}>
            
              <MdEmail className={styles['icons-rodape']} />
              <span>email@exemplo.com</span>

          </div>
          <div className={styles.infocontato}>
            
              <FaLocationDot className={styles['icons-rodape']}/>
              <span>Rua Exemplo 9999</span>

          </div>
          
          
        </div>
        <span>Copyright &copy; {new Date().getFullYear()} | Seg Portfolio</span>
        </div>
        
      </div>
      </>
  );
}

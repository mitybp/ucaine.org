import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Ucai'ne Libre Politea",
  description: "Politeia Livre de Ucai'ne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <a href="/" className="flag">
            <Image
              src="/coat_of_arms.png"
              height={35}
              width={35}
              quality={100}
              alt="Ucai'ne coat of arms"
            />
            <span>Ucai'ne</span>
          </a>
          <div className="links">
            <div className="mobile">
              <details className="mobile_menu">
                <summary className="mobile_menu_summary"></summary>
                <div className="items">
                  <a href="/ba">Sobre</a>
                  <a href="/contat">Contato</a>
                  <a href="/be-ucaino">Cidadania</a>
                  <a href="/neis">Notícias</a>
                  <details>
                    <summary>Governo</summary>
                    <div className="items inside">
                      <a href="/minists">Ministérios</a>
                      <a href="/pobas">Poderes</a>
                      <a href="/gov-recoje">Registro Governamental</a>
                      <a href="/me">ME.UC</a>
                      <a href="/voedje">Educação</a>
                      <a href="/scot">Grupo Escoteiro</a>
                    </div>
                  </details>
                  <a href="/doere" className="btn active">Doe</a>
                </div>
              </details>
            </div>
            <div className="desktop">
              <a href="/ba">Sobre</a>
              <a href="/contat">Contato</a>
              <a href="/be-ucaino">Cidadania</a>
              <a href="/neis">Notícias</a>
              <details>
                <summary>Governo</summary>
                <div className="items">
                  <a href="/minists">Ministérios</a>
                  <a href="/pobas">Poderes</a>
                  <a href="/gov-recoje">Registro Governamental</a>
                  <a href="/me">ME.UC</a>
                  <a href="/voedje">Educação</a>
                  <a href="/scot">Grupo Escoteiro</a>
                </div>
              </details>
              <a href="/doere" className="btn active">Doe</a>
            </div>
          </div>
        </header>
        {children}
        <footer>
          <div>
            <Image
              src="/coat_of_arms.png"
              width={50}
              height={50}
              alt="Ucai'ne flag"
              quality={100}
            />
            <p>
              <b>Ucai'ne Gov'je</b>
            </p>
            <p>Site oficial</p>
          </div>
          <div>
            <a href="/ba">Sobre</a>
            <a href="/contat">Contato</a>
            <a href="/be-ucaino">Cidadania</a>
            <a href="/neis">Notícias</a>
          </div>
          <div>
            <a href="/minists">Ministérios</a>
            <a href="/pobas/legje">Legislativo</a>
            <a href="/minists/nasidet-refams/">Relações Exteriores</a>
            <a href="/doere">Doe</a>
          </div>
          <div>
            <a href="/me">ME.UC</a>
            <a href="/voedje">Educação</a>
            <a href="/scot">Grupo Escoteiro</a>
            <a href="/gov-recoje">Registro Governamental</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

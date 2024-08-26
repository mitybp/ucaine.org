
export default function Ministries() {
  return (
    <main>
      <h1>Ministérios</h1>
      <h3>Poder Executivo</h3>
      <div className="btn-group">
        <a className="btn" href="/minists/caseje">Ministério da Economia</a>
        <a className="btn" href="/minists/cultur">Ministério da Cultura</a>
        <a className="btn" href="/minists/espor">Ministério do Esporte</a>
        <a className="btn" href="/minists/libatje">Ministério da Segurança</a>
        <a className="btn" href="/minists/nasidet-refams">Ministério das Relações Exteriores</a>
        <a className="btn" href="/minists/natur">Ministério do Meio Ambiente</a>
        <a className="btn" href="/minists/salu">Ministério da Saúde</a>
        <a className="btn" href="/minists/sitis">Ministério da Zeladoria</a>
        <a className="btn" href="/minists/tec">Ministério da Tecnologia</a>
        <a className="btn" href="/minists/voedje">Ministério da Educação</a>
      </div>

      <h3>Poder Judiciário</h3>
      <div className="btn-group">
        <a className="btn" href="/pobas/judije">Poder Judiciário</a>
      </div>

      <h3>Poder Legislativo</h3>
      <div className="btn-group">
        <a className="btn" href="/pobas/legje">Poder Legislativo</a>
      </div>
    </main>
  );
}

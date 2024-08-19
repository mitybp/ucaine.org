import Image from "next/image";

export default function About() {
  return (
    <main>
      <h1>Sobre</h1>
      <table>
        <tbody>
          <tr>
            <th colspan="2">
              <span>
                <i>Politeia Livre de Ucai'ne</i>
                <br></br>
                Ucai'ne
              </span>
            </th>
          </tr>

          <tr>
            <td className="flag_coat">
              <figure>
                <Image
                  src="/flag_rect_resized.png"
                  alt="flag"
                  width={125}
                  height={88}
                  quality={100}
                />
                <figcaption>Bandeira</figcaption>
              </figure>
            </td>
            <td className="flag_coat">
              <figure>
                <Image
                  src="/coat_of_arms_resized.png"
                  alt="flag"
                  width={88}
                  height={88}
                  quality={100}
                />
                <figcaption>Brasão</figcaption>
              </figure>
            </td>
          </tr>
          <tr className="no-border">
            <th colspan="2"></th>
          </tr>
          <tr className="no-border">
            <td><b>Lema:</b></td>
            <td>Orion gap'rel (<i>Orion guiará</i>, Ucai'an)</td>
          </tr>

          <tr>
            <td><b>Hino:</b></td>
            <td><ins>em desenvolvimento</ins></td>
          </tr>

          <tr>
            <td><b>Gentílico:</b></td>
            <td>ucaiano, Ucai'no</td>
          </tr>

          <tr>
            <td><b>Capital:</b></td>
            <td><i>nenhuma</i></td>
          </tr>

          <tr>
            <td><b>Línguas oficiais:</b></td>
            <td>Português Brasileiro, Inglês, Croata, Sérvio e Ucai'an</td>
          </tr>

          <tr>
            <td><b>Governo:</b></td>
            <td>Politeia presidencialista</td>
          </tr>
          <tr>
            <td><b>Presidente:</b></td>
            <td>Dimitri Barcelos Pusch</td>
          </tr>
          <tr>
            <td><b>Vice-presidente:</b></td>
            <td>Sophia Freiberger Pirani</td>
          </tr>

          <tr>
            <td><b>Legislatura:</b></td>
            <td>Congresso Nacional</td>
          </tr>

          <tr>
            <td><b>Formação:</b></td>
            <td>Constituição Nacional (<i>em desenvolvimento</i>)</td>
          </tr>

          <tr>
            <th colspan="2"><b>Área:</b></th>
          </tr>
          <tr>
            <td><b>Total:</b></td>
            <td>0,045 km²</td>
          </tr>
          <tr>
            <td><b>Água:</b></td>
            <td>466% (compartilhado com <b>Flóripa</b>)</td>
          </tr>
          <tr>
            <td><b>Fronteiras:</b></td>
            <td>Croácia, Flóripa e Sérvia</td>
          </tr>

          <tr>
            <th colspan="2"><b>População:</b></th>
          </tr>
          <tr>
            <td><b>Total (2024):</b></td>
            <td>10 hab.</td>
          </tr>
          <tr>
            <td><b>Densidade:</b></td>
            <td>0 hab./km² (inabitado)</td>
          </tr>

          <tr>
            <th colspan="2"><b>PIB:</b></th>
          </tr>
          <tr>
            <td><b>Total (2024):</b></td>
            <td>US$ 0</td>
          </tr>
          <tr>
            <td><b>Per capita:</b></td>
            <td>US$ 0</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

import React from 'react';
import Galery from '../../galery/galery';
import '../../../css/digitalArt.css'

function DigitalArt() {
  return (
    <div>
    <div className="dig-art-container">
        <div className="background-color-digart">
          <div className="digart-text">
            <ul>
              <li>
                1 “La vida del tiempo”
              </li>
              <li>
                2 “El guardián del anco”
              </li>
              <li>
                3 “Paseo en Venecia ”
              </li>
              <li>
                4 “Vitam aui mortem”
              </li>
            </ul>          
          
          </div>
        </div>
        <div className="first-galery">
        <Galery className="first-galery" 
          img1="images/verde/tiempo.jpg"
          img2="images/verde/elefante.jpg"
          imgbig="images/verde/gatito.jpg"
          imgsmall="images/verde/flor.png"/>
        </div>
    </div>

    <div className="dig-art-container2">
        <div className="background-color-digart2">
          <div className="digart-text2">
            <ul>
              <li>
                1 “Entre humos”
              </li>
              <li>
                2 “Baño de nenúfares”
              </li>
              <li>
                3 “Mujer de perfíl”
              </li>
              <li>
                4 “Amapolas”
              </li>
            </ul>          
            
          
          </div>
        </div>
        <div className="first-galery">
        <Galery className="first-galery" 
          img1="images/rojo/1.png"
          img2="images/rojo/2.png"
          imgbig="images/rojo/big.jpg"
          imgsmall="images/rojo/small.jpg"/>
        </div>
    </div>
    {/* //3333333333333333333333333333333333333333333333333333 */}
    <div className="dig-art-container2">
        <div className="background-color-digart3">
          <div className="digart-text3">
            <ul>
              <li>
                1 “Washington”
              </li>
              <li>
                2 “Cerati”
              </li>
              <li>
                3 “Morenas”
              </li>
              <li>
                4 “Nueces estampa”
              </li>
            </ul>          
            
          
          </div>
        </div>
        <div className="first-galery">
        <Galery className="first-galery" 
          img1="images/celeste/1.jpg"
          img2="images/celeste/2.jpg"
          imgbig="images/celeste/big.jpg"
          imgsmall="images/celeste/small.jpg"/>
        
        </div>
    </div>
{/* 444444444444444444444444444444444444444444444444444444444444444444444 */}
    <div className="dig-art-container2">
        <div className="background-color-digart4">
          <div className="digart-text4">
            <ul>
              <li>
                1 “Koi samurai”
              </li>
              <li>
                2 “Dragón de invierno”
              </li>
              <li>
                3 “El gato del muro”
              </li>
              <li>
                4 “Mantis no me olvides”
              </li>
            </ul>          
            
          
          </div>
        </div>
        <div className="first-galery">
        <Galery className="first-galery" 
          img1="images/rosa/1.jpg"
          img2="images/rosa/2.png"
          imgbig="images/rosa/big.jpg"
          imgsmall="images/rosa/small.jpg"/>
        
        </div>
    </div>
{/* 55555555555555555555555555555555555555555555555555555555555 */}
    <div className="dig-art-container2">
        <div className="background-color-digart5">
          <div className="digart-text5">
            <ul>
              <li>
                1 “Mago durmiente”
              </li>
              <li>
                2 “Kombi con k”
              </li>
              <li>
                3 “Guerrero carpincho”
              </li>
              <li>
                4 “Dualidad”
              </li>
            </ul>          
            
          
          </div>
        </div>
        <div className="first-galery">
        <Galery className="first-galery" 
          img1="images/violeta/1.jpg"
          img2="images/violeta/2.jpg"
          imgbig="images/violeta/big.jpg"
          imgsmall="images/violeta/small.jpg"/>
        </div>
    </div>


    </div>
  );
}

export default DigitalArt;

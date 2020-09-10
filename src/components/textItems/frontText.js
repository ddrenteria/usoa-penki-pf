import React from 'react'
import TextItems from './textItems'
import '../../css/frontText.css';

function FrontText() {
    return (
        <div>
            <ul>
                <TextItems className='laboral-exp'
                tittle="EXPERIENCIA LABORAL"
                content="
                    2020-ELABORACIÓN DE ILUSTRACIONES PARA ESTADIO OBRAS.

                    2020-DISEÑO DE STICKERSQUETAS PARA OLIVA PARÍS.

                    2020-DISEÑO DE MURAL PARA IVÁN GENTILINI.

                    2020-DISEÑO,REALIZACIÓN Y VENTA DE STICKERS ORIGINALES.

                    2019-DISEÑO Y REALIZACIÓN DE UN MURAL DE 8M X 2M FRENTE Y DORSO PARA PARÍS MOLLITERNI.

                    2018-DISEÑO Y REALIZACIÓN DE UN MURAL TRIPLE PARA IBRABAR."
                />
                <TextItems className='formacion-academica'
                tittle="FORMACIÓN ACADÉMICA"
                content="
                    2015-2020-SECUNDARIA ESCUELAS TÉCNICAS RAGGIO CURSADA ACTIVA COMO TÉCNICO EN DISEÑO DE COMUNICACIONES PUBLICITARIAS
                    
                    2008-2014-PRIMARIA RUDOLF STEINER CON PEDAGOGÍA WALDORF."
                />
                <TextItems className='formacion'
                tittle="FORMACIÓN"
                content="
                    2017-2020-TALLER DE COGHLAN DE DIBUJO,PINTURA E ILUSTRACIÓN.
                    
                    2008-2014-ESTUDIO PARTICULAR DE INGLÉS"
                />
            </ul>
        </div>
    )
    
}

export default FrontText

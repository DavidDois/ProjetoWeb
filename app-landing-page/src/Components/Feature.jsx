import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
    return(
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Ganho Intelectual' description='Além de poder investir seu dinheiro e lucrar muito você aprende intelectualmente sobre bolsa de valores e investimentos com nosso professores.'/>
                <FeatureBox image={featureimage1} title='Reembolso Monetário' description='Dentro de 15 dias sem margem de lucro você pode resgatar o valor original novamente.' />
                <FeatureBox image={featureimage2} title='Lucro Rápido' description='Em uma semana com investimentos baixo e básicos você pode lucrar imensamente e ter uma renda mensal extremamente estável.'/>
            </div>
        </div>
    );
}

export default Feature;
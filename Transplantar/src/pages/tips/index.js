import React from 'react';
import {Termos} from '../signUp/styles';
import {View, ScrollView} from 'react-native';
import {CardBackground, RouteTitle} from '../register/styles';
import PurpleRound from '../../components/purpleRound';

const Tips = ({route, navigation}) => {
  function getTipText() {
    switch (route.params.tipTitle) {
      case 'Exames':
        return (
          ' Para a primeira consulta não são obrigatórios todos os exames prontos, porém, quanto maior o número destes exames melhor será sua avaliação pela equipe multidisciplinar. ' +
          '\n ' +
          ' É necessário realizar o exame de compatibilidade, pois os dois precisam ter compatibilidade sanguínea (o fator RH positivo ou negativo não importa). ' +
          '\n ' +
          ' Assim, o paciente que tem sangue tipo O só pode receber rim de doadores O. Os que possuem sangue do tipo A podem receber de O ou A. Os receptores B podem receber de O ou B e os receptores AB podem receber de qualquer tipo sanguíneo. ' +
          '\n ' +
          ' Quanto maior a compatibilidade, melhor. ' +
          '\n ' +
          ' - Quais os requisitos para um indivíduo ser considerado doador?  ' +
          '\n ' +
          '   * Ter identificação e registro hospitalar;   ' +
          '\n ' +
          '   * Ter a causa do coma estabelecida e conhecida;  ' +
          '\n ' +
          '   * Não apresentar hipotermia (temperatura do corpo inferior a 35ºC), hipotensão arterial ou estar sob efeitos de drogas depressoras do Sistema Nervoso Central;' +
          '\n ' +
          '   * Passar por dois exames neurológicos que avaliem o estado do tronco cerebral. Esses exames devem ser realizados por dois médicos não participantes das equipes de captação e de transplante;' +
          '\n ' +
          '   * Submeter-se a exame complementar que demonstre morte encefálica, caracterizada pela ausência de fluxo sanguíneo em quantidade necessária no cérebro, além de inatividade elétrica e metabólica cerebral;' +
          '\n ' +
          '   * Estar comprovada a morte encefálica. Situação bem diferente do coma, quando as células do cérebro estão vivas, respirando e se alimentando, mesmo que com dificuldade ou um pouco debilitadas. ' +
          '\n ' +
          '   * Observação: Após diagnosticada a morte encefálica, o médico do paciente, da Unidade de Terapia Intensiva ou da equipe de captação de órgãos deve informar de forma clara e objetiva que a pessoa está morta e que, nesta situação, os órgãos podem ser doados para transplante  '
        );
        break;
      case 'Pré-Doação':
        return (
          ' Para se tornar um doador vivo, existem alguns requisitos:  ' +
          '\n ' +
          '   Para se tornar um doador de rim é necessário:  ' +
          '\n ' +
          '   - Estar em bom estado de saúde  ' +
          '\n ' +
          '   - Não ser obeso  ' +
          '\n ' +
          '   - Ter função renal normal  ' +
          '\n ' +
          '   - Ter mais de 18 anos   ' +
          '\n ' +
          '   - Ter compatibilidade sanguínea e imunológica.  ' +
          '\n ' +
          '   Para se tornar um doador de fígado é necessário:  ' +
          '\n ' +
          '   - Estar em bom estado de saúde  ' +
          '\n ' +
          '   - Não ter sobrepeso  ' +
          '\n ' +
          '   - Ter altura e peso iguais ou maiores que o receptor  ' +
          '\n ' +
          '   - Ser acima de 18 anos  ' +
          '\n ' +
          '   - Ter o mesmo tipo sanguíneo que o receptor  ' +
          '\n ' +
          '   Para se tornar um doador de medula óssea é necessário:  ' +
          '\n ' +
          '   - Ter entre 18 e 55 anos de idade  ' +
          '\n ' +
          '   - Estar em bom estado de saúde  ' +
          '\n ' +
          '   - Não ter doença infecciosa transmissível pelo sangue (como infecção pelo HIV ou hepatite)  ' +
          '\n ' +
          '   – Não apresentar história de doença neoplásica (câncer), hematológica ou autoimune (como lúpus eritematoso sistêmico e artrite reumatoide).  ' +
          '\n ' +
          '   Para ser doador de pulmão e seus requisitos:  ' +
          '\n ' +
          '   - Idade < 55 anos  ' +
          '\n ' +
          '   - Carga tabágica < 20 anos-maço  ' +
          '\n ' +
          '   - Ausência de história de asma  ' +
          '\n ' +
          '   - Obesidade (IMC < 18 ou IMC > 35)  ' +
          '\n ' +
          '   - Não ser usuário de drogas ilícitas  ' +
          '\n ' +
          '     ' +
          '\n ' +
          '  Ao ter estes requisitos, é necessário ir para a primeira consulta no hospital onde será realizado o transplante, os especialistas solicitarão quais exames serão necessários para analisar a compatibilidade.  '
        );
        break;
      case 'Pós-Doação':
        return (
          ' Para doar medula óssea do doador se recompõe em apenas 15 dias.' +
          '\n ' +
          'Nos primeiros três dias após a doação pode haver desconforto localizado, de leve a moderado, que pode ser amenizado com o uso de analgésicos e medidas simples.  ' +
          '\n ' +
          'Após a doação o corpo fica deformado?  ' +
          '\n ' +
          'Não, de modo algum. A retirada dos órgãos é uma cirurgia como qualquer outra realizada com todos os cuidados de reconstituição, o que também é obrigatório por lei.  ' +
          'Não se esqueça de avaliar o nosso aplicativo depois que doar, a sua atitude é muito importante para que outras pessoas sejam motivadas pela sua atiutude.' +
          'É por pessoas como vocês que existimos! Vamos criar uma grande rede de doação para que menos pessoas sofram as consequências de uma fila de doação com diversos testes de compatibilidade. O que você acha de doar para o Transplantar? Estamos tentando arrecadar fundos através de uma campanha de CrowdFunding para chegarmos a mais lugares e assim mudar o mundo. Vamos juntos? ' +
          '  "Quando você for para o céu, deixe seus órgãos da Terra. Afinal, anjos só precisam de asas." Essa é a frase de um paciente que ganhou um novo coração....  ' +
          '  Entretanto, embora o Brasil seja referência mundial na área de transplantes e em números absolutos seja o segundo maior transplantador do mundo, atrás apenas dos Estados Unidos, o número de doações ainda é baixo em relação ao número de pessoas que necessitam.  '
        );
        break;
    }
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView
        alwaysBounceVertical={true}
        contentContainerStyle={{alignItems: 'center', flexGrow: 1}}>
        <PurpleRound height="60%" style={{position: 'relative'}}>
          <RouteTitle>{route.params.tipTitle}</RouteTitle>
        </PurpleRound>
        <CardBackground style={{marginTop: -450, marginBottom: 600}}>
          <RouteTitle padding="0" marginTop="0" textColor="#363636">
            {route.params.tipTitle}
          </RouteTitle>
          <Termos style={{fontSize: 16}}>{getTipText()}</Termos>
        </CardBackground>
      </ScrollView>
    </View>
  );
};

export default Tips;

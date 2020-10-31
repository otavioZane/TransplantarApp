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
          '  Para a primeira consulta não são obrigatórios todos os exames prontos, porém, quanto maior o número destes exames melhor será sua avaliação pela equipe multidisciplinar.   ' +
          '  É necessário realizar o exame de compatibilidade, pois os dois precisam ter compatibilidade sanguínea (o fator RH positivo ou negativo não importa). Assim, o paciente que tem sangue tipo O só pode receber rim de doadores O. Os que possuem sangue do tipo A podem receber de O ou A. Os receptores B podem receber de O ou B e os receptores AB podem receber de qualquer tipo sanguíneo. Quanto maior a compatibilidade, melhor.  ' +
          '  Quais os requisitos para um indivíduo ser considerado doador?  ' +
          '  Ter identificação e registro hospitalar;   ' +
          '  Ter a causa do coma estabelecida e conhecida;  ' +
          '  Não apresentar hipotermia (temperatura do corpo inferior a 35ºC), hipotensão arterial ou estar sob efeitos de drogas depressoras do Sistema Nervoso Central;   ' +
          '  Passar por dois exames neurológicos que avaliem o estado do tronco cerebral. Esses exames devem ser realizados por dois médicos não participantes das equipes de captação e de transplante;  ' +
          '  Submeter-se a exame complementar que demonstre morte encefálica, caracterizada pela ausência de fluxo sanguíneo em quantidade necessária no cérebro, além de inatividade elétrica e metabólica cerebral;   ' +
          '  Estar comprovada a morte encefálica. Situação bem diferente do coma, quando as células do cérebro estão vivas, respirando e se alimentando, mesmo que com dificuldade ou um pouco debilitadas. Observação: Após diagnosticada a morte encefálica, o médico do paciente, da Unidade de Terapia Intensiva ou da equipe de captação de órgãos deve informar de forma clara e objetiva que a pessoa está morta e que, nesta situação, os órgãos podem ser doados para transplante.  '
        );
        break;
      case 'Pré-Doação':
        return '  Para se tornar um doador vivo, existem alguns requisitos - para doar o rim, é preciso ter boa saúde, não ser obeso, ter função renal normal, ter mais de 18 anos e ter compatibilidade sanguínea e imunológica; já para doar o fígado, também é importante ter boa saúde, não ter sobrepeso, ter altura e peso iguais ou maiores que o receptor, ser acima de 18 anos e ter ainda o mesmo tipo sanguíneo.  ';
        break;
      case 'Pós-Doação':
        return (
          '   Para doar medula óssea do doador se recompõe em apenas 15 dias. Nos primeiros três dias após a doação pode haver desconforto localizado, de leve a moderado, que pode ser amenizado com o uso de analgésicos e medidas simples.  ' +
          '   Para doar rim, o tempo de recuperação é acima de 15 dias. Os pontos são retirados após 30 dias a partir da data de cirurgia.  ' +
          '   Após a doação o corpo fica deformado?  ' +
          '   Não, de modo algum. A retirada dos órgãos é uma cirurgia como qualquer outra realizada com todos os cuidados de reconstituição, o que também é obrigatório por lei.  '
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
        <CardBackground style={{marginTop: -330, marginBottom: 500}}>
          <RouteTitle padding="0" marginTop="0" textColor="#363636">
            Exames
          </RouteTitle>
          <Termos>{getTipText()}</Termos>
        </CardBackground>
      </ScrollView>
    </View>
  );
};

export default Tips;

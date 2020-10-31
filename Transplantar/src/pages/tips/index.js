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
          '  Para a primeira consulta não são obrigatórios todos os exames prontos, porém, quanto maior o número destes exames melhor será sua avaliação pela equipe multidisciplinar.' +
          '  É necessário realizar o exame de compatibilidade, pois os dois precisam ter compatibilidade sanguínea (o fator RH positivo ou negativo não importa). ' +
          '  Assim, o paciente que tem sangue tipo O só pode receber rim de doadores O. Os que possuem sangue do tipo A podem receber de O ou A.' +
          '  Os receptores B podem receber de O ou B e os receptores AB podem receber de qualquer tipo sanguíneo. Quanto maior a compatibilidade, melhor.' 
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
        <CardBackground style={{marginTop: -450, marginBottom: 500}}>
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

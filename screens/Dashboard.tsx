import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Button, Linking } from 'react-native';
import IndicatorCard from '../components/IndicatorCard';

export default function Dashboard() {
  const [passos, setPassos] = useState(0);
  const [sono, setSono] = useState(0);
  const [agua, setAgua] = useState(0);
  const [bpm, setBpm] = useState(0);

  useEffect(() => {
    // Simula os dados de forma aleatória ao abrir o app
    setPassos(Math.floor(Math.random() * 10000));
    setSono(Number((Math.random() * 4 + 4).toFixed(1))); // entre 4h e 8h
    setAgua(Number((Math.random() * 1.5 + 1.5).toFixed(1))); // entre 1.5L e 3L
    setBpm(Math.floor(Math.random() * 40 + 60)); // entre 60 e 100 bpm
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>
        Minha Saúde Hoje
      </Text>

      <IndicatorCard titulo="Passos" valor={passos} />
      <IndicatorCard titulo="Horas de Sono" valor={`${sono} h`} />
      <IndicatorCard titulo="Hidratação" valor={`${agua} L`} />
      <IndicatorCard titulo="Frequência Cardíaca" valor={`${bpm} bpm`} />

      <Button
        title="Ver mais informações"
        onPress={() => Linking.openURL('https://www.minhavida.com.br/saude')}
      />
    </ScrollView>
  );
}

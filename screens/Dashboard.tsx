import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Button, Linking } from 'react-native';
import IndicatorCard from '../components/IndicatorCard';

export default function Dashboard() {
  const [passos, setPassos] = useState(0);
  const [sono, setSono] = useState(0);
  const [agua, setAgua] = useState(0);
  const [bpm, setBpm] = useState(0);

  useEffect(() => {
    
    setPassos(Math.floor(Math.random() * 10000));
    setSono(Number((Math.random() * 4 + 4).toFixed(1))); 
    setAgua(Number((Math.random() * 1.5 + 1.5).toFixed(1))); 
    setBpm(Math.floor(Math.random() * 40 + 60)); 
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
  <Text style={{
  fontSize: 28,             
  marginBottom: 20,
  marginTop: 40,
  fontWeight: '900',        
  color: '#6A1B9A',         
  textAlign: 'center'       
}}>
  Minha Saúde Hoje
</Text>


      <IndicatorCard titulo="🚶‍♀️ Passos" valor={passos} />
      <IndicatorCard titulo="😴 Horas de Sono" valor={`${sono} h`} />
      <IndicatorCard titulo="💧 Hidratação" valor={`${agua} L`} />
      <IndicatorCard titulo="❤️ Frequência Cardíaca" valor={`${bpm} bpm`} />

     <Button
  title="Ver mais informações"
  onPress={() => Linking.openURL('https://www.minhavida.com.br/saude')}
  color="#6A1B9A"
/>

    </ScrollView>
  );
}

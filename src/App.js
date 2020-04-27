import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Container, Title, Input, Project, CenterView, Btn, BtnText, List } from './styles';

export default function App() {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [jobs, setJobs] = useState([]);

  return (
    <Container>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content' />
      <Project> Project with Realm</Project>
      <Title>Nome</Title>
      <Input autoCapitalize='none' autoCorrect={false} value={nome} onChangeText={(nome) => setNome(nome)} />
      <Title>Cargo</Title>
      <Input autoCapitalize='none' autoCorrect={false} value={cargo} onChangeText={(cargo) => setCargo(cargo)} />
      <CenterView>
        <Btn>
          <BtnText>
            Cadastrar
          </BtnText>
        </Btn>
        <Btn>
          <BtnText>
            Editar
          </BtnText>
        </Btn>
      </CenterView>
      <List
        keyboardShouldPersistTaps='handled'
        data={[]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (<Jobs data={item} />)}
      />
    </Container>
  );
}

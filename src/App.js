import React, { useState, useEffect } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { Container, Title, Input, Project, CenterView, Btn, BtnText, List } from './styles';
import Jobs from './components/Jobs';

import getRealm from './Services/realm';

export default function App() {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [jobs, setJobs] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const loadJobs = async () => {
      const realm = await getRealm();
      const data = realm.objects('Job');
      setJobs(data);
    }
    loadJobs();
  }, [])

  async function saveJob(data) {
    const realm = await getRealm();

    const id = realm.objects('Job').length + 1;

    const dadosJob = {
      id: id,
      nome: data.nome,
      cargo: data.cargo
    }

    realm.write(() => {
      realm.create('Job', dadosJob);
    });


  }

  async function addJob() {
    try {
      if (nome === '' || cargo === '') {
        alert('Preencha todos os campos!');
        return;
      }
      const data = { nome: nome, cargo: cargo };
      await saveJob(data);

      setNome('');
      setCargo('');
      Keyboard.dismiss();

    } catch (err) {
      alert(err);
    }
  };
  function editarJob(data) {
    setNome(data.nome),
      setCargo(data.cargo),
      setEditId(data.id)
  }
  async function editarDados() {
    const realm = await getRealm();

    if (editId === null) {
      alert('Não há dados para editar.');
      return;
    }
    const res = {
      id: editId,
      nome: nome,
      cargo: cargo,
    }
    realm.write(() => {
      realm.create('Job', res, 'modified');
    });
    const dadosAlterados = jobs.map(
      job => (job.id === res.id ? res : job)
    );
    setJobs(dadosAlterados);
    setNome('');
    setCargo('');
    setEditId(null);
    Keyboard.dismiss();
  }
  return (
    <Container>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content' />
      <Project> Project with Realm</Project>
      <Title>Nome</Title>
      <Input autoCapitalize='none' autoCorrect={false} value={nome} onChangeText={(nome) => setNome(nome)} />
      <Title>Cargo</Title>
      <Input autoCapitalize='none' autoCorrect={false} value={cargo} onChangeText={(cargo) => setCargo(cargo)} />
      <CenterView>
        <Btn onPress={() => addJob()}>
          <BtnText>
            Cadastrar
          </BtnText>
        </Btn>
        <Btn onPress={() => editarDados()}>
          <BtnText>
            Editar
          </BtnText>
        </Btn>
      </CenterView>
      <List
        keyboardShouldPersistTaps='handled'
        data={jobs}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Jobs data={item} editar={(data) => editarJob(data)} />
        )}
      />
    </Container>
  );
}

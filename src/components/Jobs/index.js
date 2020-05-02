import React from 'react';
import { Container, Nome, Cargo, CenterView, EditItem, EditText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

export default function Jobs({ data, editar, excluir }) {
    return (
        <Container>
            <View>
                <Nome>{data.nome}</Nome>
                <Cargo>{data.cargo}</Cargo>
            </View>
            <CenterView>
                <EditItem onPress={() => editar(data)}>
                    <Icon name="edit" size={24} color="#383838" />
                </EditItem>
                <EditItem onPress={() => excluir(data)}>
                    <Icon name="clear" size={24} color="#ff283a" />
                </EditItem>
            </CenterView>
        </Container>
    );
}
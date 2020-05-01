import React from 'react';
import { Container, Nome, Cargo, CenterView, EditItem, EditText } from './styles';

export default function Jobs({ data, editar, excluir }) {
    return (
        <Container>
            <Nome>{data.nome}</Nome>
            <Cargo>{data.cargo}</Cargo>
            <CenterView>
                <EditItem onPress={() => editar(data)}>
                    <EditText>
                        Editar
                    </EditText>
                </EditItem>
                <EditItem>
                    <EditText onPress={() => excluir(data)}>
                        Excluir
                    </EditText>
                </EditItem>
            </CenterView>
        </Container>
    );
}
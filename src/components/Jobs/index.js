import React from 'react';
import { Container, Nome, Cargo, CenterView, EditItem, EditText } from './styles';

export default function Jobs() {
    return (
        <Container>
            <Nome></Nome>
            <Cargo></Cargo>
            <CenterView>
                <EditItem>
                    <EditText>
                        Editar
                    </EditText>
                </EditItem>
                <EditItem>
                    <EditText>
                        Excluir
                    </EditText>
                </EditItem>
            </CenterView>
        </Container>
    );
}
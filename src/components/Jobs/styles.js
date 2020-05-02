import styled from 'styled-components';

export const Container = styled.View`
    padding: 16px;
    border-radius: 5px;
    background: #fff;
    margin-bottom: 15px;
    flex-direction: row;
    justify-content: space-between;
`;
export const Nome = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #313131;
`;
export const Cargo = styled.Text`
    font-size: 18px;
    font-weight: 300;
    color: #a1a1A1;
`;
export const CenterView = styled.View`
    flex-direction: row;
`;
export const EditItem = styled.TouchableOpacity`
    /* background-color: #0081f9;
    padding: 8px;
    border-radius: 5px; */
`;
export const EditText = styled.Text`
    color: #fff;
    font-size: 16px;
`;
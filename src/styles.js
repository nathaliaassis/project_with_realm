import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  background-color: #ebebeb;
  padding: 32px 15px;
  padding-top: ${32 + getStatusBarHeight(true)};
`;
export const Project = styled.Text`
    font-size: 32px;
    color: #3d3d3d;
    text-align: center;
    margin-bottom: 16px;
`;
export const Title = styled.Text`
    font-size: 16px;
    color: #3d3d3d;
    margin-bottom: 4px;
`;
export const Input = styled.TextInput`
    height: 40px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
export const Btn = styled.TouchableOpacity`
    background-color: #00e55f;
    border-radius: 5px; 
    align-items: center;
    justify-content: center;
    padding: 5px 30px;
`;
export const BtnText = styled.Text`
    font-size: 24px;
    color: white;
`;
export const BtnCancelar = styled(Btn)`
    background-color: #ff283a;
`;
export const CenterView = styled.View`
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-top: 16px;
`;
export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

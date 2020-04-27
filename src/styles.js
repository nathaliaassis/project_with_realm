import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export const Container = styled.View`
  flex: 1;
  background-color: #1c8fff;
  padding: 32px 15px;
  padding-top: ${32 + getStatusBarHeight(true)};
`;
export const Project = styled.Text`
    font-size: 32px;
    color: white;
    text-align: center;
    margin-bottom: 16px;
`;
export const Title = styled.Text`
    font-size: 20px;
    color: white;
    margin-bottom: 4px;
`;
export const Input = styled.TextInput`
    height: 40px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: white;
`;
export const Btn = styled.TouchableOpacity`
    background-color: #123456;
    border-radius: 5px; 
    align-items: center;
    justify-content: center;
    padding: 5px 30px;
`;
export const BtnText = styled.Text`
    font-size: 24px;
    color: white;
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

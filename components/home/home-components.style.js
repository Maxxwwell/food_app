/* eslint-disable prettier/prettier */
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(SafeAreaView)`
    flex: 1;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.white}
`;

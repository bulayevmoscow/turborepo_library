export {Kekw} from './../ex'
import styled from '@emotion/styled'

const StyledText = styled.div`
    color: red
`

const StyledContainer = styled.div`
    padding: 50px;
    ${StyledText} {
        font-size: 40px;
    }
`



export const Example: React.FC<{isFuck: boolean}> = ({isFuck}) => {
    return <div>
        123
        <StyledContainer>
        <StyledText>test</StyledText>
        </StyledContainer>
    </div>
} 
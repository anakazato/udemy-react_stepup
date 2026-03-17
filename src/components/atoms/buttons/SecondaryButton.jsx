import styled from "styled-components";
import {BaseButton} from "./BaseButton";

export const SecondaryButton = (props) => {
    // children : <PrimaryButton>ああああ</PrimaryButton> とやってタグ内のコンテンツを受け取れるように
    const { children , onClick} = props;
    return (
        <SButton onClick={onClick}>{children}</SButton>
    );
};

const SButton = styled(BaseButton)`
    background-color:#11999e;
`;

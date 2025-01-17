import { Container, Title, Order } from './styles';

import { Button } from "../../components/Button";
import { NumberPicker } from "../../components/NumberPicker";

import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";

export function Food({ isAdmin,  ...rest }) {
  return (
    <Container {...rest} isAdmin={isAdmin}>
      <FiHeart />
      <img src="../../assets/Maskgroup.png" alt="" />
      

      <Title>
        <h2></h2>
        <RxCaretRight
          size={"2.4rem"}
        />
      </Title>

      <Order>
        
      </Order>
    </Container>
  );
}
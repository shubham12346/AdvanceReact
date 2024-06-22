import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Panel = styled.div`
  flex: ${(p) => p.flex};
`;
const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      {/* // not scalable 
      <Panel flex={leftWidth}>
        <Left />
      </Panel>

      <Panel flex={reightWidth}>
        <Right />
      </Panel> */}

      <Panel flex={leftWidth}>{left}</Panel>

      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;

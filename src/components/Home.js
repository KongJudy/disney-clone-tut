import styled from 'styled-components';

const Home = (props) => {
  return (
    <Container>
      <h2>Hello</h2>
      <h2>Hello</h2>
      <h2>Hello</h2>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  background: url('/images/home-background.png');
`;

export default Home;

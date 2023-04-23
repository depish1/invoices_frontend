import { Container } from './DefaultLayout.style';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

export const DefaultLayout = () => (
  <Container>
    <Header />
    <Content />
    <Footer />
  </Container>
);

import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  p a {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 1px solid #FFFFFF;
  }
  p a:hover {
    color: #FFFFFF;
    border-bottom: 1px solid var(--primary);
    transition: 200ms;
  }
  .Logo {
  max-width: 168px;
}
@media (max-width: 800px) {
  .Logo {
    max-width: 130px;
  }
}
`;

import styled from 'styled-components';

export const Logo = () => {
  return (
    <LogoContainer aria-hidden="true">
      <div>
        &nbsp;
        <Medium>︵</Medium>
        &nbsp;&nbsp;&nbsp;
        <Medium>︵</Medium>&nbsp;
        <br />
        <Bold>⁐</Bold>
        <Bold>(</Bold>
        <Medium>ө</Medium>
        <Medium>``</Medium>&nbsp;
        <Medium>|</Medium>&nbsp;
        <Medium>´´</Medium>
        <Medium>ө</Medium>
        <Bold>)</Bold>
        <Bold>⁐</Bold>
        <br />
        <Bold>\</Bold>&nbsp;
        <Medium>|</Medium>&nbsp;&nbsp;&nbsp;&nbsp;
        <Medium>|</Medium>&nbsp;
        <Bold>/</Bold>
        <br />
        <Lambda>λ</Lambda>
        <br />
        <Chin>
          <Medium>︶</Medium>
        </Chin>
        <BowTie>∞</BowTie>
      </div>
    </LogoContainer>
  );
};

export const LogoContainer = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 1.125rem;
  font-family: 'Helvetica Neue';
`;

const Medium = styled.span`
  font-weight: 500;
  font-style: normal;
`;

const Bold = styled.span`
  font-weight: 700;
  font-style: normal;
`;

const Lambda = styled.span`
  display: block;
  margin-top: -12px;
`;

const Chin = styled.span`
  display: block;
  margin-top: -26px;
`;

const BowTie = styled(Bold)`
  color: #a9431e;
`;

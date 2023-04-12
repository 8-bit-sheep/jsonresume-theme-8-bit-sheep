import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { beautifyUrl } from '../helpers/url';
import { ResumeSchema } from '../schema';
import { Logo, LogoContainer } from './Logo';

interface Props {
  basics: ResumeSchema['basics'];
}

export const Header: FC<Props> = ({ basics }) => {
  return (
    <>
      <NameAndLogo>
        <h1>{basics.name}</h1>
        <Logo />
      </NameAndLogo>
      <Details>
        <div>
          <h2>{basics.label}</h2>
          {basics.email && (
            <div>
              <a href={`mailto:${basics.email}`}>{basics.email}</a>
            </div>
          )}
          {basics.location && (
            <div>
              {basics.location.city}, {basics.location.countryCode}
            </div>
          )}
        </div>
        {(basics.profiles?.length ?? 0 > 0) && (
          <Links>
            {basics.profiles?.map(({ url }, index) => (
              <li key={index}>
                <a href={url}>{beautifyUrl(url)}</a>
              </li>
            ))}
          </Links>
        )}
      </Details>
      <ImageAndSummary>
        {basics.image && <Image src={basics.image} />}
        <ReactMarkdown>{basics.summary}</ReactMarkdown>
      </ImageAndSummary>
    </>
  );
};

const NameAndLogo = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    ${LogoContainer} {
      display: none;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`;

const ImageAndSummary = styled.div`
  align-items: center;
  display: flex;
  gap: 48px;
  justify-content: center;
  margin: 32px 0 16px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  p {
    font-size: 1rem;
    line-height: 1.25;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 100px;
  width: 100px;
  min-width: 100px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin: 0 0 8px;
  }

  div {
    margin-bottom: 8px;
  }
`;

const Links = styled.ul`
  font-size: 14px;
  text-align: right;
  margin: 0;
  padding: 0;

  li {
    display: block;
  }

  a {
    text-decoration: none;
  }
`;

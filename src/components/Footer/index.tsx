import styled from '@emotion/styled';
import MainLogo from 'components/MainLogo';
import { NavUtil } from 'utils/navList';

const Container = styled.footer``;

const FooterSecTop = styled.div`
  background-color: #000000;
  padding: 30px 0;
`;

const FooterTopWrap = styled.div`
  width: 1440px;
  display: flex;
  margin: 0 auto;
`;

const FooterNav = styled.ul`
  width: 1100px;
  justify-content: space-around;
  display: flex;
  margin: 0 auto;
`;

const FooterLink = styled.li`
  a {
    cursor: pointer;
    color: #ffffff;
  }
`;

const FooterSecBottom = styled.div`
  padding: 70px 0;
`;

const FooterBottomWrap = styled.div`
  margin: 0 auto;
  width: 1440px;
  display: flex;
  justify-content: space-between;
`;

const InfoSec = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoList = styled.div`
  width: 1000px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  span:nth-child(5),
  span:nth-child(8) {
    a {
      border: none;
    }
  }
`;

const Info = styled.span`
  font-size: 14px;
  letter-spacing: -1px;
  padding: 0 10px 0 10px;
  border-left: solid 1px #ccc;
  &:nth-child(1),
  &:nth-child(6) {
    padding-left: 0;
    border: none;
  }
`;

const CopyrightSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  small {
    opacity: 0.7;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterSecTop>
        <FooterTopWrap>
          <FooterNav>
            {NavUtil.footerList.map((link) => {
              return (
                <FooterLink>
                  <a>{link}</a>
                </FooterLink>
              );
            })}
          </FooterNav>
        </FooterTopWrap>
      </FooterSecTop>
      <FooterSecBottom>
        <FooterBottomWrap>
          <InfoSec>
            <MainLogo />
            <InfoList>
              {NavUtil.footerInfoList.map((info) => {
                return <Info>{info}</Info>;
              })}
            </InfoList>
          </InfoSec>
          <CopyrightSec>
            <small>Copyright ⓒ Megastudy, All rights reserved.</small>
          </CopyrightSec>
        </FooterBottomWrap>
      </FooterSecBottom>
    </Container>
  );
};

export default Footer;

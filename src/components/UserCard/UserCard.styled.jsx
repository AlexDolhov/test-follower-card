import styled from 'styled-components';
import { ReactComponent as LogoSvg } from 'icons/logo.svg';
import heroBackground from 'img/background.png';

export const HeroThumb = styled.div`
  display: block;

  height: 214px;

  padding: 20px 20px 18px 20px;

  content: '';
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-position: top 28px center;
  background-size: 308px 168px;
`;

export const Logo = styled(LogoSvg)`
  /* position: absolute; */
`;
export const UserInfo = styled.div`
  position: relative;

  text-align: center;

  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;

  &::before {
    display: block;
    content: '';
    width: 380px;
    height: 8px;

    margin-bottom: 62px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarThumb = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  overflow: hidden;

  position: absolute;
  top: 4px;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const UserAvatar = styled.img`
  width: 64px;
  height: 64px;

  background-color: #5736a3;
  border-radius: 50%;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;

  padding: 14px 28px;
  margin-bottom: 36px;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  border: none;
  color: #373737;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 15px;
  margin-bottom: 30px;

  button:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonGood = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  padding: 7px 25px;
  margin-right: 15px;

  background-color: cyan;
  border-radius: 10px;

  border: none;
  outline: none;

  cursor: pointer;
  transition: all 150ms ease-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const ButtonNeutral = styled(ButtonGood)``;

export const ButtonBad = styled(ButtonGood)``;

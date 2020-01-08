import { css } from 'emotion';

export const imageWrapper = css`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const imageItem = css`
  width: 350px;
  height: 350px;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  flex-grow: 1;
`;

export const imgBox = css`
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

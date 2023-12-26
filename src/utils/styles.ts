import { css } from '@emotion/react';
import { HeaderProps } from './types';

export namespace NavStyles {
  export const topCategoryList = css`
    ul {
      width: 350px;
      justify-content: space-between;
      font-size: 18px;
      font-weight: bold;
    }
  `;

  export const mainNavList = (props: HeaderProps.ToggleProps) => css`
    ul {
      width: 360px;
      display: ${props.visibility ? 'flex' : 'none'};
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        flex-basis: 30%;
        margin-bottom: 10px;
        a {
          color: #575757;
        }
      }
    }
  `;
}

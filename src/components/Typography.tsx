import styled from "styled-components";

export enum TitleType {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  BIG = "BIG",
}

const titleThemes = {
  [TitleType.SMALL]: {
    fontSize: "20px",
    fontWeight: "500",
  },
  [TitleType.MEDIUM]: {
    fontSize: "24px",
    fontWeight: "700",
  },
  [TitleType.BIG]: {
    fontSize: "30px",
    fontWeight: "700",
  },
};

export const Title = styled.div<{ type?: TitleType }>`
  font-size: ${({ type }) => titleThemes[type ?? TitleType.SMALL].fontSize};
  font-weight: ${({ type }) => titleThemes[type ?? TitleType.SMALL].fontWeight};
`;

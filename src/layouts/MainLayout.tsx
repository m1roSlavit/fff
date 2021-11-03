import { down } from "styled-breakpoints";
import styled from "styled-components";

export const MainLayout = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 70px 50px 30px;
  margin-left: auto;
  margin-right: auto;

  ${down("md")} {
    padding: 50px 30px 20px;
  }

  ${down("sm")} {
    padding: 40px 15px 20px;
  }
`;

import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const CurrentWeatherPlaceholder = () => {
  return (
    <StyledContentLoader>
      <rect x='0' y='0' rx='0' ry='0' width='262' height='28' />
      <rect x='0' y='48' rx='6' ry='6' width='100' height='104' />
      <rect x='132' y='94' rx='0' ry='0' width='175' height='20' />
      <rect x='132' y='132' rx='0' ry='0' width='63' height='20' />
      <rect x='213' y='132' rx='0' ry='0' width='58' height='20' />
      <rect x='333' y='89' rx='0' ry='0' width='168' height='24' />
      <rect x='132' y='48' rx='0' ry='0' width='90' height='28' />
      <rect x='333' y='48' rx='0' ry='0' width='90' height='28' />
      <rect x='333' y='128' rx='0' ry='0' width='139' height='24' />
    </StyledContentLoader>
  );
};

const StyledContentLoader = styled(ContentLoader)`
  padding: 30px 25px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: 100%;
`;

export default CurrentWeatherPlaceholder;

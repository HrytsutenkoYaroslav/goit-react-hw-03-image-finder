import { Triangle } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderDiv>
      <Triangle
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
    </LoaderDiv>
  );
};
export default Loader;

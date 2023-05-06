import { Grid } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderDiv>
      <Grid
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderDiv>
  );
};
export default Loader;

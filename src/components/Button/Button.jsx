import PropTypes from 'prop-types';
import { LoadMoreButton, ButtonDiv } from './Button.styled';
const Button = ({ onClick }) => {
  return (
    <ButtonDiv>
      <LoadMoreButton type="button" onClick={onClick}>
        Load More
      </LoadMoreButton>
    </ButtonDiv>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};



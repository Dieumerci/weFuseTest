import styled from 'styled-components';
import posed from 'react-pose';

const Circle = posed.div({
  draggable: true,
  
});

const DraggableCircle = styled(Circle)`
  border-radius: 50%;
  background: #005056;
  border: 2px solid #457F84;
  width: 150px;
 
  height: 150px;
`;

export default DraggableCircle;
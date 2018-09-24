const K_WIDTH = 35;
const K_HEIGHT = 35;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #b1b53f',
  borderRadius: K_HEIGHT,
  backgroundColor: '#cec93b',
  textAlign: 'center',
  color: 'black',
  fontSize: 13,
  fontWeight: 'bold',
  padding: 4
};

export {greatPlaceStyle};
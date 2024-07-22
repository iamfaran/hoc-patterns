import withLoader from './withLoader';
import withHover from './withHover';

function DogImages(props) {
  debugger;
  return (
    <div
      {...props}
      // necessary because at the end we are hovering on this div
      // we need to attach listeners on this div
      // if we don't add it nothing will work hmm
    >
      {props.hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
}

export default withHover(
  withLoader(DogImages, 'https://dog.ceo/api/breed/labrador/images/random/6')
  // we are passing withLoader return component as a param inside withHover
);

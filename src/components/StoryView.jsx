import * as React from 'react';

type Props = {
  location: any
};

// StoryView component
export default ({ location }: Props) => {
  console.log(location);
  return (
    <div>
      <h2 className="title">
        {location.state.title}
      </h2>
      <p>
        {location.state.text}
      </p>
    </div>
  );
};

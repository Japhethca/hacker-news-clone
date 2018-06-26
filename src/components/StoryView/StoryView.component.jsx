import React from 'react';

export const StoryView = ({ location }) => {
  console.log(location);
  return (
    <div>
      <h2 className="title">{location.state.title}</h2>
      <p>{location.state.text}</p>
    </div>
  );
};

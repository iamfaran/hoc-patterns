import { useEffect, useState } from 'react';

export default function withLoader(Component, url) {
  debugger;
  return (props) => {
    // new props in this withLoader component props
    debugger;
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <h1> Loading... </h1>;
    }
    // we are attaching the new props to the passed component
    // in this case DogImages
    return <Component data={data} {...props} />;
  };
}

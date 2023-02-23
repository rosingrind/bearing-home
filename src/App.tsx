import React from 'react';
import './App.css';
import Bearing from "bearing";
import { easeInOutSine } from 'bearing/easing';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const preset = {
  slides: [
    'https://img.freepik.com/free-vector/black-banner-with-yellow-geometric-shapes_1017-32327.jpg?w=2000&t=st=1676911615~exp=1676912215~hmac=9bc9803086f640d718e652316a48d38e760774660282d1c70399bc980f1a18c5',
    'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?w=2000&t=st=1676911616~exp=1676912216~hmac=a26bca7afb45ac5a115e3431de565a6b92b29a4019a1e4cdc520dcf5bb1a440d',
    'https://img.freepik.com/free-vector/basic-rgb_53876-170352.jpg?w=2000&t=st=1676911642~exp=1676912242~hmac=44b36d832e9e15191a3060ee931cab4eb2b227488852348bb3d6bcd2e4e85aea',
    'https://img.freepik.com/free-photo/particle-lines-futuristic-network-background_53876-129729.jpg?w=2000&t=st=1676911643~exp=1676912243~hmac=b2757aa72c4ad5d32a5dd2b9400a8013f220bf3f0678178b71b136566556b2c8',
  ],
  animation: {
    timing: easeInOutSine,
    speed: 500,
    interval: 2000
  }
};

function App() {
  const { width } = useWindowDimensions();

  const [props] = useState({
    ...preset,
    size: {
      width: width * .85,
      height: (width * .85) / 2.65
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Bearing {...props} />
        </div>
        <div>
          <p>
            Images from <u>rawpixel.com</u>
            {' '}
            <a className="App-link" href="https://www.freepik.com/free-photo/particle-lines-futuristic-network-background_17850183.htm#query=wide%20banner&position=6&from_view=search&track=ais">#1</a>&nbsp;
            <a className="App-link" href="https://www.freepik.com/free-vector/basic-rgb_31067562.htm#query=wide%20banner&position=4&from_view=search&track=ais">#2</a>
            {' '}
            and <u>starline</u>
            {' '}
            <a className="App-link" href="https://www.freepik.com/free-vector/black-banner-with-yellow-geometric-shapes_15355888.htm#query=wide%20banner&position=0&from_view=keyword&track=ais">#1</a>&nbsp;
            <a className="App-link" href="https://www.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_7082673.htm#query=wide%20banner&position=1&from_view=search&track=ais">#2</a>
            {' '}
            on Freepik
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

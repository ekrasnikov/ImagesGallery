import React, {useState} from 'react';
import { ImagesPanel } from './components/ImgesPanel';
import { Panel } from './components/Panel'

const App: React.FC = () => {
  const [imageUrls, setImageUrls] = useState< Array<string>>([]);

  const ImagePanel = (url: string = '') => {

    if (url) {
      setImageUrls(imageUrls => [url, ...imageUrls])
    }
    else {
      setImageUrls([])
    }
  }
  
  return (
    <>
      <div className='container'>
        <Panel onImg={ImagePanel}></Panel>
        <div className='images_panel'>
          <ImagesPanel urls={imageUrls}></ImagesPanel>
        </div>
      </div>
    </>
  );
}

export default App;

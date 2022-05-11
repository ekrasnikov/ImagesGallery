import React, {  } from 'react';


type ImagePanelProps = {
    urls: string[]
}

export const ImagesPanel:  React.FC<ImagePanelProps> = ({urls}) => {
    return (
        <div>
            {urls.map(url => {
                return (
                    <img src={url} alt='test'></img>
                );
            })}
        </div>
    );
}


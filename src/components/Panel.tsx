import React, { useState } from 'react';

interface PanelProps {
    onImg(url: string): void
}

export const Panel: React.FC<PanelProps> = props => {

    const [tag, setTag] = useState<string>('');

    const loadImageUrl = () => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=A4rmDbOW8kQqtmUNpDyzFBQFhYBBdxaR&tag=${tag}`)
            .then(response => response.json())
            .then(data => props.onImg(data.data.image_url))
    };
    
    const resetImageUrl = () => {
        setTag('');
        props.onImg('', '')
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value);
    }

    return (
            <div className="panel">
                <input 
                    onChange={changeHandler}
                    value={tag}
                    type="text" 
                    className="form-control" 
                    placeholder="введите тег"
                    style={{width: '250px'}}>
                </input>
                <button onClick={loadImageUrl} type="button" className="btn btn-success">Загрузить</button>
                <button onClick={resetImageUrl} type="button" className="btn btn-danger">Очистить</button>
            </div>
        );
}
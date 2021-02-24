import React, { useEffect } from "react";
import { fetchProducts } from "../../actions";
import Input from '../Input';
import Tip from '../Tip';
import './style.scss';

export default ({ giphys, text }) => {

  useEffect(() => {
    fetchProducts(text);
  }, [text]);

  return (
    <div>
      <Input />
      {text.length < 1
        ? (
          <Tip />
        )
        : 
        <div className="giphyList">
          { giphys && giphys.length > 0
            ? giphys.map(item => {
              return (
              <div key={item.id} className="giphyList__item">
                <img src={item.images.downsized.url} alt=""/>
              </div>)
            })
            : <div className="giphyList__standby">
                <div className="giphyList__standby--searching">
                  Searching...
                </div>
              </div>}
        </div>}
    </div>
  );
}
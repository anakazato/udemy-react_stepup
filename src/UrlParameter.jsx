import {useParams} from "react-router-dom"

export const UrlParameter = () => {
    const {id} = useParams();
    return (
      <div>
        <h1>UrlParameter ページです</h1>
        <p>パラメータは{id}です</p>
      </div>
    );
  };
  
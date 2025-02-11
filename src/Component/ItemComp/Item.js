import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import API_URL from '../../Pages/URL/Url';
import "./Item.css";

export default function Item(props) {
  const { itemComp } = props;
  // let id = itemComp.itemid
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const itemId = itemComp.itemid;
    fetch(`${API_URL}itemImage/getpizzathumbnail/${itemId}`)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const blob = new Blob([buffer], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      });
  }, [itemComp.itemid]);

  return (
    <div className="col-md-4 col-sm-6">
      <div className="itembox ">
        <div onClick={() => {
                console.log(itemComp);
                navigate("/itemSize", { state: { itemid: itemComp.itemid } });
              }} className="card ">

          <img
            src={imageUrl}
            className="card-img-top"
            alt="Item Image"
            style={{ minHeight: "300px" }}
          />
          <div className="card-body">
            <h3 className="card-title">{itemComp.itemName}</h3>
            <h5 className="card-text">{itemComp.type}</h5>
            <p className="card-text">{itemComp.description}...</p>
            <a
              className="btn"
              
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

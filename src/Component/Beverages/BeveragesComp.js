import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
// import URL from '../../Pages/URL/Url'
import "../ItemComp/Item.css";
import URL from "../../Pages/URL/Url";

export default function BeveragesComp(props) {
  const { itemComp } = props;
  // let id = itemComp.itemid
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  // let string = `${URL}itemImage/item/${itemComp.itemid}`

  useEffect(() => {
    const itemId = itemComp.itemid;
    fetch(`${URL}itemImage/getpizzathumbnail/${itemId}`)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const blob = new Blob([buffer], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      });
  }, [itemComp.itemid]);
  // let string = `${URL}itemImage/item/${itemComp.itemid}`
  return (
    <div className="col-md-4 col-sm-6">
      <div className="itembox  ">
        <div onClick={() => {
                navigate("/beverageSize", {
                  state: { itemid: itemComp.itemid },
                });
              }} class="card">
          <img src={imageUrl} class="card-img-top img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{itemComp.itemName}</h5>
            <p className="card-text">{itemComp.type}</p>
            <p className="card-text">{itemComp.description}...</p>
            <a
              className="btn btn-primary"
              
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

// description: "waah bete moj krdi"
// itemName: "mamaria"
// itemid: 1
// type: "veg"

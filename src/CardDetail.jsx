import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import download from "downloadjs";
const CardDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const divRef = useRef(null);
  const getUserDet = async () => {
    try {
      const resp = await fetch(`https://reqres.in/api/users/${id}`);
      const jsonData = await resp.json();
      console.log(jsonData);
      setData(jsonData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickPhoto = async () => {
    const canvas = await html2canvas(divRef.current);
    canvas.toBlob((blob) => {
      download(blob, "my_photo.png");
    });
  };

  useEffect(() => {
    getUserDet();
  }, []);

  return (
    data && (
      <div className='main_user_body' ref={divRef}>
        <div className='user_photo'>
          <img src={data?.avatar} alt={data.avatar} />
        </div>
        <div className='user_detail'>
          <div className='user_email'>Email : {data.email}</div>
          <div className='user_name'>
            Name : {data.first_name + " " + data.last_name}
          </div>
          <div className='btn'>
            <button onClick={clickPhoto}>Download</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CardDetail;

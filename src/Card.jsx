import React from "react";
import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
const UserCards = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);

  const fetchData = async () => {
    try {
      const resp = await fetch(`https://reqres.in/api/users?page=${current}`);
      const jsonData = await resp.json();
      console.log(jsonData);
      setData(jsonData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = () => {
    setCurrent(2);
  };
  const prevPage = () => {
    setCurrent(1);
  };

  useEffect(() => {
    fetchData();
  }, [current]);
  return (
    <>
      <div className='main_cardbody'>
        {data.map((doc) => {
          return (
            <Link to={`/detail/${doc.id}`} key={doc.id}>
              <Card className='card_mat'>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={doc.avatar}
                    alt={doc.id}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='body2' component='div'>
                      Email: {doc.email}
                    </Typography>
                    <Typography variant='h5'>
                      Name: {doc.first_name + " " + doc.last_name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className='btn_grp'>
        <Button variant='contained' onClick={prevPage}>
          Previous
        </Button>
        <Button variant='contained' onClick={changePage}>
          Next
        </Button>
      </div>
    </>
  );
};

export default UserCards;

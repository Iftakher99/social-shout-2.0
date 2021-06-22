import React from 'react';
import { Card } from 'react-bootstrap';
import Fakedata from '../../../FakeData/Fakedata.json';
import './TopFriends.css';

const TopFriends = () => {
  return (
    <div>
      <p className="text-center font-weight-bold">Top friends</p>
      <div className="d-flex friends-card">
        {Fakedata.friends.map((index, i) => (
          <Card key={i} className="bg-dark text-white">
            <Card.Img src={index.photo} alt="Card image" />
            <Card.ImgOverlay className="friend-card-footer">
              <p>{index.name}</p>
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopFriends;

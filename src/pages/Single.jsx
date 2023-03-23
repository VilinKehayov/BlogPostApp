import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.shutterstock.com/image-photo/man-traveler-hiking-alone-breathtaking-landscape-1092776753"
          alt=""
        />
        <div className="user">
          <img
            src="https://www.shutterstock.com/image-photo/small-kettle-heated-on-bonfire-hiking-1822074260"
            alt=""
          />
          <div className="info">
            <span>Vilin</span>
            <p>Posted 1 day ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          reprehenderit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt
          animi, provident ea quidem quaerat, labore dolores perferendis
          exercitationem dolore a, esse nisi eveniet. Dolorem facere dolor quas,
          rem repellendus quam vel! Quod minus praesentium assumenda soluta,
          quos quas necessitatibus eveniet qui omnis debitis expedita officiis
          saepe a dicta nisi sapiente dolorum reiciendis consequuntur molestiae
          eligendi sint mollitia labore. Inventore, eum illo. Non autem
          cupiditate obcaecati, eaque sit ducimus eum nulla ipsa eveniet.
          Explicabo exercitationem deleniti voluptatum obcaecati soluta ut ullam
          architecto veniam tempora sint ipsa quae numquam dignissimos tenetur,
          dolores omnis! Et, ipsam. Optio quam quibusdam voluptate voluptates
          alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt
          animi, provident ea quidem quaerat, labore dolores perferendis
          exercitationem dolore a, esse nisi eveniet. Dolorem facere dolor quas,
          rem repellendus quam vel! Quod minus praesentium assumenda soluta,
          quos quas necessitatibus eveniet qui omnis debitis expedita officiis
          saepe a dicta nisi sapiente dolorum reiciendis consequuntur molestiae
          eligendi sint mollitia labore. Inventore, eum illo. Non autem
          cupiditate obcaecati, eaque sit ducimus eum nulla ipsa eveniet.
          Explicabo exercitationem deleniti voluptatum obcaecati soluta ut ullam
          architecto veniam tempora sint ipsa quae numquam dignissimos tenetur,
          dolores omnis! Et, ipsam. Optio quam quibusdam voluptate voluptates
          alias.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({items}) => {
  return (
    <div>
      {items?.map((item, index) => (
          <Tile
              key={index}
              name={item.name}
              description={item}
          />))}
    </div>
  );
};

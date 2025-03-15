"use client";
import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel() {
  const ratingReducer = (
    ratingList: Map<string, number>,
    action: { type: string; venueName: string; rating: number }
  ) => {
    switch (action.type) {
      case "add": {
        return new Map(ratingList).set(action.venueName, action.rating);
      }
      case "remove": {
        const updatedList = new Map(ratingList);
        updatedList.delete(action.venueName);
        return updatedList;
      }
      default:
        return ratingList;
    }
  };

  const [ratingList, dispatchRating] = useReducer(
    ratingReducer,
    new Map([
      ["The Bloom Pavilion", 0],
      ["Spark Space", 0],
      ["The Grand Table", 0],
    ])
  );

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          onRating={(venue: string, rating: number) =>
            dispatchRating({ type: "add", venueName: venue, rating })
          }
        />
        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          onRating={(venue: string, rating: number) =>
            dispatchRating({ type: "add", venueName: venue, rating })
          }
        />
        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          onRating={(venue: string, rating: number) =>
            dispatchRating({ type: "add", venueName: venue, rating })
          }
        />
      </div>
      <div className="w-full text-xl font-medium">
        <h3>Venue List with Ratings : {ratingList.size}</h3>
        <ul>
          <ul>
            {Array.from(ratingList.entries()).map(([venue, rating]) => (
              <li
                data-testid={venue}
                key={venue}
                onClick={() =>
                  dispatchRating({
                    type: "remove",
                    venueName: venue,
                    rating: 0,
                  })
                }
              >
                {venue +" Rating"}: {rating}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}

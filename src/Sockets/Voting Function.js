import React from "react";
import { useEffect, useState } from "react";
import useSocketHook from "./Use Socket";

 // place a vote
 // start timer
 // once time ends end the voting process
 // compare options and see which option hast the most votes
 // choose the option that wins

 function Vote() {
    const [placeVote, setPlaceVote] =useState(0);

    const Vote = () => {
      setPlaceVote(placeVote + 1)
    };
 };

 export default Vote;
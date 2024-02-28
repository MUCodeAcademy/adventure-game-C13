import React from "react";
import { useEffect, useState } from "react";
import useSocketHook from "./Use Socket";
import Timer from "./Timer Function";

 function Vote() {
    const [placeVoteOne, setPlaceVoteOne] = useState(0);
    const [placeVoteTwo, setPlaceVoteTwo] = useState(0);

    const voteOne = () => {
      setPlaceVoteOne(placeVoteOne + 1)
    };

    const voteTwo = () => {
      setPlaceVoteTwo(placeVoteTwo + 1)
    };
    if(placeVoteOne >= 1 || placeVoteTwo >= 1){
      setStartCounter(true)
    };

 };

 export default Vote;
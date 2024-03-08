import React from "react";
import { useParams } from "react-router-dom";
import IsAlive from "./IsAlive";
function NetRestart() {
  const params = useParams();

  async function restart() {
    let id = params.id;
    let response = await fetch(`http://localhost:3000/restart/${id}`);
    let data = await response.json();
    console.log(data);
  }

  

  return (
    <div>
      <h4>NetRestart</h4>
      <p>To restart the network press buttom</p>
      <button className="btn btn-primary" onClick={() => restart()}>
        Restart
      </button>
    </div>
  );
}

export default NetRestart;

import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IsAlive from "./IsAlive";
function Operaciones() {
  const [network, setNetwork] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/${id}`).then((response) => {
      response.json().then((data) => {
        setNetwork(data);
      });
    });
  }, []);
  return (
    <div>
      <h1>Operaciones</h1>
      <div className="d-flex gap-3">
        <Link to="faucet">faucet</Link>
        <Link to="transfer">transfer</Link>
        <Link to="up">up</Link>
        <Link to="down">down</Link>
        <Link to="restart">restart</Link>
        <Link to="blocks">blocks</Link>
        <form className="d-flex gap-2">
          <input className="form-control" size={60} type="text" placeholder="search by address/Txn hash/Block" />
          <button className="btn btn-primary form-control" type="submit">Search</button>
        </form>
      </div>
      <h3 className="mt-4">Datos de la red <IsAlive id={id} /></h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>chain</th>
            <th>subnet</th>
            <th>bootnode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{network.id}</td>
            <td>{network.chainId}</td>
            <td>{network.subnet}</td>
            <td>{network.ipBootnode}</td>
          </tr>
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}

export default Operaciones;

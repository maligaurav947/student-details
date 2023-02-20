import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import fireDb from "../../DB/Firebase";
import { Link, useHistory, useParams } from "react-router-dom";
function View() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fireDb
      .child(`candidate/${id}`)
      .get()
      .then((sanpshot) => {
        if (sanpshot.exists()) {
          setUser({ ...sanpshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  return <></>;
}

export default View;

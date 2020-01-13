import React, { useState, useEffect } from "react";
import Axios from "axios";

const ShortLinks = () => {
  const [hasError, setErrors] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await Axios("http://localhost:5000/api/redirect/links")
        .then(res => setLinks(res.data))
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []);

  return (
    <div>
      <span>
        {links.map(link => (
          <li key={link._id}>
            <p>{link.url}</p>
          </li>
        ))}
        }
      </span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};

export default ShortLinks;

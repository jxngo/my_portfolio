import React from 'react';
import { Link } from "react-router-dom";

function Email({ mailto, label}) {
  return (
    <Link
        to ='#'
        onClick={(e) => {
            console.log(mailto);
            window.location.href = mailto;
            e.preventDefault();
        }}
    >   {label}
    </Link>
  )
}

export default Email
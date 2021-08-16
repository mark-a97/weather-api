import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

function ShowDetail(props) {
  return (
    <div>
        <Spinner  className=" m-auto d-flex mt-5" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  );
  
}

export default ShowDetail;
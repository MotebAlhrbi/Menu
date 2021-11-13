import React from 'react';

function Footer() {
    return (
<footer className="bg-dark text-center text-white" style={{padding:'30px'}}>
<div className="container p-4 pb-0">

<section className="mb-4">
<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >Facebook<i></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i>Twitter</i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i>Instagram</i
      ></a>
      </section>



      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2021
</div>
</div>

</footer>
    );
}


export default Footer;
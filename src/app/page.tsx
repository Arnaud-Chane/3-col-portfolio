import Image from "next/image";

export default function Home() {
  return <div className="test"><nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="http://startbootstrap.com">Start Bootstrap</a>
    </div>


    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<div className="container">

  <div className="row">

    <div className="col-lg-12">
      <h1 className="page-header">3 Col Portfolio <small>Showcase Your Work</small></h1>
    </div>

  </div>

  <div className="row">

    <div className="col-md-4 portfolio-item">
      <a href="#project-link"><img className="img-responsive" src="http://placehold.it/700x400" /></a>
      <h3><a href="#project-link">Project Name</a></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
    </div>

    <div className="col-md-4 portfolio-item">
      <a href="#project-link"><img className="img-responsive" src="http://placehold.it/700x400" /></a>
      <h3><a href="#project-link">Project Name</a></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
    </div>

    <div className="col-md-4 portfolio-item">
      <a href="#project-link"><img className="img-responsive" src="http://placehold.it/700x400" /></a>
      <h3><a href="#project-link">Project Name</a></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
    </div>

  </div>

  <hr />

  <div className="row text-center">
    
    <div className="col-lg-12">
      <ul className="pagination">
        <li><a href="#">&laquo;</a></li>
        <li className="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
      </ul>        
    </div>

  </div>

</div>

<div className="container">

  <hr />

  <footer>
    <div className="row">
      <div className="col-lg-12">
        <p>Copyright &copy; Company <span id="getCurrentDate"></span></p>
      </div>
    </div>
  </footer>
  
</div>
</div>;
}

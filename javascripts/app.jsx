function App(props) {

  const [page, setPage] = React.useState(
    window.location.hash.slice(1)
  );

  function hashChangeHandler(e) {
    setPage(window.location.hash.slice(1))
  }

  React.useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [])

  return <React.Fragment>
    <div className="wall-display container w-100 w-sm-75" >
      <Card go='self'><h2>Athran Zuhail</h2></Card>
      <InertCard />
      <Card go='education'>education</Card>
      <Card go='vocation'>work experience</Card>
      <InertCard />
      <Card go='projects'>projects</Card>
      <Card go='societies'>societies</Card>
    </div>
    {!page ? null :
      <div className="overlay" onClick={clearHashOverlay}>
        <div className="p-3 p-md-5 my-auto container">
          <div className='my-paper overworld'>
            Hello
          </div>
        </div>
      </div>}
  </React.Fragment>
}

function Card(props) {
  return <div
    onClick={props.go && goHash(props.go)}
    className='my-card my-paper w3-theme-l4 w3-hover-theme p-3 p-md-5'>
    {props.children}
  </div>
}

function goHash(hash) {
  return () => { window.location.hash = hash }
}

function clearHash(e) {
  window.location.hash = ''
}

function clearHashOverlay(e) {
  if (e.target.classList.contains('overlay'))
    window.location.hash = ''
}

function InertCard() {
  return <div className='my-card w3-theme-l4 my-paper p-3 p-md-5'>
    &nbsp;&nbsp;&nbsp;
  </div>
}

function AboutSelf(props) {
  return <React.Fragment>
    Born in Kuantan, Pahang, Malaysia
  </React.Fragment>
}

function Education(props) {
  return  <React.Fragment>
    MRSM Pengkalan Chepa
    Vanderbilt University
    Universiti Teknologi Malaysia
  </React.Fragment>
}

function Jobs(props) {
  return  <React.Fragment>
    Haselton Lab
    Censerv Solution
    Datum Clearmind

    Freelance proofreader
  </React.Fragment>
}

function Projects(props) {
  return  <React.Fragment>
    Malay language lexeme generator
    Personal accounting app

  </React.Fragment>
}

function Society(props) {
  return  <React.Fragment>
    Malausia Nature society
  </React.Fragment>
}

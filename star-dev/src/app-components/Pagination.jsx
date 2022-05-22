const Pagination = ({previous, next}) => {
  return (
    <nav className="pagination">
      <div>
        <div className="links">
          <a href={previous}
             style={{
               color: 'white',
               backgroundColor: '#f1356d',
               borderRadius: '8px',
               textDecoration:"none"
             }}
          >Previous</a>
          <a href={next} style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
            textDecoration:"none"
          }}>Next</a>

        </div>


      </div>

    </nav>
  );
}

export default Pagination;

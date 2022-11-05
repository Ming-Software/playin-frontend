export const EventsPage = () => {
  return (
    <section className="section">
      <div className="card">
        <div className="card-content">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  Events
                </a>
              </li>
            </ul>
          </nav>
          <div className="content">
            <ul>
              <li className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="eventImage">
                      <img src="logo-color.png" className="image is-24x24" />
                    </figure>
                  </div>
                </article>
              </li>
              <li className="box">
                <figure className="eventImage">
                  <img src="logo-color.png" className="image is-16x16" />
                </figure>
              </li>
            </ul>
          </div>
        </div>

        <nav className="pagination" role="navigation" aria-label="pagination">
          <a className="pagination-previous" title="This is the first page">
            Previous
          </a>
          <a className="pagination-next">Next page</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">
                1
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 2">
                2
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 3">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

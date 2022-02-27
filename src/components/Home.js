import React from 'react'
import {Link} from "react-router-dom";

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

    fetch('https://pr-movies.herokuapp.com/api/movies')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });

  }

  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded)
      return <div>Loading...</div>;

      // clik()

    return (
      <div className="content">

        <div className='content2'>
          {items.map(item => (
            <section id="movies-list" key={item.id}>
              <div class="image">
                <img class="image__img" src={item.image} alt={item.title} />
                <div class="image__overlay image__overlay--primary">
                  
                  {/* <p class="image__description">
                    {item.content}
                  </p> */}
                  <div className="btn-div"> 
                           <button type="submit" className="button3">
                               <Link class="link-btn2" to={`/film/${item.id}` }>Check!</Link></button>
                       </div>
                       <div class="image__title">{item.title}</div>
                  {/* <button class="button">
                    <Link class="link-btn" to={`/film/${item.id}` }>Check!</Link>
                   
                  </button> */}
                </div>
              </div>
            </section>
          ))}
        </div>
        <footer class='footer' >
          <p class="footer">Copy right 2022 - Films</p>
        </footer>
      </div>
    );
  }
}

export default App;

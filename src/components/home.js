import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import styles from "../app.module.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

// const Home = (props) => {
//   // const [heroes, setHeroes] = useState([]);

//   // const [dogs, setDogs] = useState([]);
//   // useEffect(() => {
//   //   axios.all([axios.get(`/api/breeds/image/random`)]).then(
//   //     axios.spread((hero) => {
//   //       const heroes = hero.data;
//   //       setHeroes(heroes);
//   //     })
//   //   );
//   // }, []);

//     );

//   // useEffect(() => {
//   //   axios.all([axios.get(`/api/breeds/image/random`)]).then(
//   //     axios.spread((dog) => {
//   //       const dogs = dog.data;
//   //       setDogs(dogs);
//   //     })
//   //   );
//   // }, []);

//   return (
//     <div>
//       <div className={styles.mainContent}>
//         <div className={styles.container}>
//           <div>
//             future brawl random weekly
//             <div className="jsonAxios">
//               test:
//               {/* {dogs.message} <br />
//               {<img src={dogs.message} alt={dogs.message} />} */}
//             </div>
//           </div>
//           <h2>{props.title}</h2>
//           <div className={styles.homeImg}></div>
//           <div className={styles.thumbnailContainer}>
//             <div className={styles.thumbnail1}></div>
//             <div className={styles.thumbnail2}></div>
//             <div className={styles.thumbnail3}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;

/* <div className={styles.mapHexCollage}>
{this.state.mapJson.map((compact, id) =>
  this.state.mapHexId === undefined ? null : (
    <div
      key={id}
      onClick={() => {
        {
          console.log(id);
        }
        this.setState({
          mapHexId: id,
          bottomDisplayUnit: "block",
        });
      }}
    >
      <div
        className={
          id !== this.state.mapHexId && this.state.mapHexId !== ""
            ? styles.mapHexUnitUnActive
            : null
        }
      >
        <div className={styles.mapHexIcon}>
          <img
            alt={compact.mName}
            src={`../../images/maps/${compact.mName}.jpg`}
          />
        </div>
        <div className={styles.mapHexaBG}>
          <span className={styles.mapHexaBGName}>
            {compact.mName}
          </span>
        </div>
      </div>
    </div>
  )
)}
</div> */

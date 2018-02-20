import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import Tile from './Tile';

// import * as siteActions from 'store/actions/site';
import './Gallery.css';

class Gallery extends Component {
  // componentWillMount() {
  //   this.props.siteActions.fetchSites();
  // };

  renderSites() {
    console.log(this.props);
    
    return this.props.site.list
      .sort((a, b) => b.year - a.year)
      .map((item, index) => {
        return (
          <li className="gallery__item" key={"site-"+index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.tech && 
              <p>
              {item.tech.map((t, i) => 
                <span key={"tech-"+i}>{t}</span>
              )}
              </p>
            }
          </li>
        )
      });
  }

  // renderSitess() {
  //   return this.props.site.items.map((item, index) => {
  //     return (
  //       <li className='grid-item' key={item.sys.id}>
  //         <Tile data={item.fields}></Tile>
  //       </li>
  //     );
  //   });
  // };

  render() {
    return (
      <ul className="gallery">{this.renderSites()}</ul>
    );

    switch (this.props.site.status) {
    // switch ('success') {
      case 'success':
        return (
          <ul className='grid'>
            { this.renderSites() }
          </ul>
        );

      case 'fetching':
        return (
          <p>Fetching...</p>
        );

      case 'error':
      default:
        return (
          <p>ERROR</p>
        );
    }
  }
}

const mapStateToProps = (state) => ({
  site: state.sites
});

// const mapDispatchToProps = (dispatch) => ({
//   siteActions: bindActionCreators(siteActions, dispatch)
// });


export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Gallery);

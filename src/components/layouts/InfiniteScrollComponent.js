import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

class InfiniteScrollComponent extends Component {
  state = {
    items: Array.from({ length: 20 })
  };
  fetchMoreData = () => {
    setTimeout(() => {
      let data = Array.from({ length: 20 });
      this.setState({
        items: [...this.state.items, ...data]
      });
    }, 1500);
  };
  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <h1>Demo :React Infinite Scroll Example</h1>
        <InfiniteScroll
          dataLength={items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading.....</h4>}
        >
          {items.map((item, index) => (
            <div style={divStyle} key={index}>
              div - # {index}
            </div>
          ))}
        </InfiniteScroll>
      </React.Fragment>
    );
  }
}

const divStyle = {
  border: "1px solid grey",
  width: "50%",
  padding: "20px",
  margin: "10px"
};
export default InfiniteScrollComponent;

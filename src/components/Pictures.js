import React, { useContext } from "react";
import PictureItems from "./PictureItems";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Pictures(props) {
  const [loading, setLoading] = useState(false);
  const [hits, sethits] = useState([]);
  const [TotalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);

  const updatePictures = async () => {
    let url1 = `https://pixabay.com/api/?key=25616604-27fa76d6354223aec0da2e2c4&category=${props.category}&image_type=photo&per_page=40&page=${page}`;
    let data = await fetch(url1);
    setLoading(true);
    let parsedData = await data.json();
    console.log(parsedData);
    setLoading(false);
    sethits(parsedData.hits);
    setTotalHits(parsedData.totalHits);
  };
  useEffect(() => {
    // Anything in here is fired on component mount.
    updatePictures();
  });
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url11 = `https://pixabay.com/api/?key=25616604-27fa76d6354223aec0da2e2c4&category=${props.category}&image_type=photo&per_page=40&page=${page}`;
    let data = await fetch(url11);
    setLoading(true);
    let parsedData = await data.json();
    console.log(parsedData);
    setLoading(false);
    sethits(hits.concat(parsedData.hits));
    setTotalHits(parsedData.totalHits);
  };
  return (
    <>
      <div className="container my-4 ">
        <h1 className="text-center" style={{ marginTop: "60px" }}>
          HD-Valley---HD Pictures of all categories
        </h1>

        <InfiniteScroll
          dataLength={hits.length}
          next={fetchMoreData}
          hasMore={hits !== TotalHits}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {hits.map((element, ) => {
                return (
                  <div className="col" key={element.id}>
                    <PictureItems
                      imgUrl={element.webformatURL}
                      type={element.type}
                      url={element.pageURL}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

Pictures.defaultProps = {
  category: "nature",
};

import React from "react";
import { withRouter } from "react-router-dom";
import FilterVerticalBar from "./Components/FilterVerticalBar/FilterVerticalBar";
import ProductContainer from "./Components/ProductContainer/ProductContainer";
import FilterHorizontalBar from "./Components/FilterHorizontalBar/FilterHorizontalBar";
import Footer from "../../Components/Footer/Footer";
import PromoBanner from "../../Components/PromoBanner/PromoBanner";
import Nav from "../../Components/Nav/Nav";
import HeaderImg from "./HeaderImg";
import { firstAPI } from "../../Config";
import "./ProductList.scss";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wholeProducts: [],
      products: [],
      hideFilterVaild: false,
      loadingStatus: false,
      ProductMainImage: { MainImg: [] },
      filteringColor: [],
      filteringSize: [],
      filteringSilluet: [],
      filtering: [],
      queryId: this.props.location.search.split("=")[1],
    };
  }

  componentDidUpdate(prevprops) {
    if (
      prevprops.location.search.split("=")[1] !==
      this.props.location.search.split("=")[1]
    ) {
      this.getDataInitial();
    }
  }

  getDataInitial = () => {
    console.log(this.props);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    const categoryId = this.props.location.search.split("=")[1];
    this.setState(
      {
        loadingStatus: !this.state.loadingStatus,
        products: [],
        ProductMainImage: { MainImg: [] },
        queryId: categoryId,
      },
      () => {
        fetch(
          "/data/ProductList/Products.json",
          // `${firstAPI}/products?sub_category_id=${categoryId}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            // 무한스크롤 기능 확인을 위한 임의 함수
            let result = res.products.slice(
              this.state.products.length,
              this.state.products.length + 14
            );
            // let result = res.products;
            setTimeout(
              () =>
                this.setState(
                  {
                    loadingStatus: !this.state.loadingStatus,
                  },
                  () => {
                    this.setState({
                      wholeProducts: res.products,
                      products: [...this.state.products, ...result],
                    });
                  }
                ),
              1000
            );
            window.addEventListener("scroll", this.infiniteScroll);
          });
      }
    );
  };

  infiniteScroll = (e) => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      // window.removeEventListener("scroll", this.infiniteScroll);
      this.pagination();
    }
  };

  pagination = () => {
    const { wholeProducts, products } = this.state;
    if (wholeProducts.length > products.length) {
      this.setState(
        {
          loadingStatus: !this.state.loadingStatus,
        },
        () => {
          let result = wholeProducts.slice(
            products.length,
            products.length + 14
          );

          setTimeout(
            () =>
              this.setState(
                {
                  loadingStatus: !this.state.loadingStatus,
                },
                () => {
                  this.setState({
                    products: [...this.state.products, ...result],
                  });
                }
              ),
            1000
          );
          // window.addEventListener("scroll", this.infiniteScroll);
        }
      );
    }
  };

  filterQueryString = () => {
    const categoryId = this.props.location.search.split("=")[1];
    let filteringQueryStringApi = `${firstAPI}/products?sub_category_id=${categoryId}&${
      this.state.filteringColor
        ? this.state.filteringColor
            .map((color) => {
              return `color=${color}&`;
            })
            .join("")
        : ""
    }${
      this.state.filteringSize
        ? this.state.filteringSize
            .map((size) => {
              return `size=${size}&`;
            })
            .join("")
        : ""
    }${
      this.state.filteringSilluet
        ? this.state.filteringSilluet
            .map((silluet) => {
              return `silouette=${silluet}&`;
            })
            .join("")
        : ""
    }`.slice(0, -1);
    this.getfilteringData(filteringQueryStringApi);
    console.log(filteringQueryStringApi);
  };

  getfilteringData = (filteringQueryStringApi) => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    this.setState(
      {
        loadingStatus: !this.state.loadingStatus,
        products: [],
        ProductMainImage: { MainImg: [] },
      },
      () => {
        fetch(filteringQueryStringApi, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            let result = res.products.slice(
              this.state.products.length,
              this.state.products.length + 14
            );
            setTimeout(
              () =>
                this.setState(
                  {
                    loadingStatus: !this.state.loadingStatus,
                  },
                  () => {
                    this.setState({
                      wholeProducts: res.products,
                      products: result,
                    });
                  }
                ),
              1000
            );
            window.addEventListener("scroll", this.infiniteScroll);
          });
      }
    );
  };

  fixedImage = (colorEl, pdIdx) => {
    let updateProductMainImage = this.state.ProductMainImage;
    updateProductMainImage.MainImg[pdIdx].mainId = colorEl.id;
    updateProductMainImage.MainImg[pdIdx].ImgUrl = colorEl.image_url;
    this.setState({
      ProductMainImage: updateProductMainImage,
    });
  };

  handleFilter = () => {
    this.setState({
      hideFilterVaild: !this.state.hideFilterVaild,
    });
  };

  filtering = (value) => {
    this.state.filtering.includes(value)
      ? (() => {
          let valueIdx = this.state.filtering.indexOf(value);
          const newArray = [...this.state.filtering];
          newArray.splice(valueIdx, 1);
          this.setState(
            {
              filtering: newArray,
            },
            () => this.filterQueryString()
          );
        })()
      : this.setState(
          {
            filtering: [...this.state.filtering, value],
          },
          () => this.filterQueryString()
        );
  };
}

// filteringColor = (Color) => {
//   this.state.filteringColor.includes(Color)
//     ? (() => {
//         let colorIdx = this.state.filteringColor.indexOf(Color);
//         const newArray = [...this.state.filteringColor];
//         newArray.splice(colorIdx, 1);
//         this.setState(
//           {
//             filteringColor: newArray,
//           },
//           () => this.filterQueryString()
//         );
//       })()
//     : this.setState(
//         {
//           filteringColor: [...this.state.filteringColor, Color],
//         },
//         () => this.filterQueryString()
//       );
// };

// filteringSize = (size) => {
//   this.state.filteringSize.includes(size)
//     ? (() => {
//         let colorIdx = this.state.filteringSize.indexOf(size);
//         const newArray = [...this.state.filteringSize];
//         newArray.splice(colorIdx, 1);
//         this.setState(
//           {
//             filteringSize: newArray,
//           },
//           () => this.filterQueryString()
//         );
//       })()
//     : this.setState(
//         {
//           filteringSize: [...this.state.filteringSize, size],
//         },
//         () => this.filterQueryString()
//       );
// };

// filteringSilluet = (silluetEngName) => {
//   this.state.filteringSilluet.includes(silluetEngName)
//     ? (() => {
//         let colorIdx = this.state.filteringSilluet.indexOf(silluetEngName);
//         const newArray = [...this.state.filteringSilluet];
//         newArray.splice(colorIdx, 1);
//         this.setState(
//           {
//             filteringSilluet: newArray,
//           },
//           () => this.filterQueryString()
//         );
//       })()
//     : this.setState(
//         {
//           filteringSilluet: [...this.state.filteringSilluet, silluetEngName],
//         },
//         () => this.filterQueryString()
//       );
// };

// componentDidMount() {
//   this.getDataInitial();
// }

render(){
  // const {
  //   wholeProducts,
  //   products,
  //   hideFilterVaild,
  //   loadingStatus,
  //   ProductMainImage,
  //   queryId,
  // } = this.state;
  return (
    <div className="ProductList">
      <div
        className={loadingStatus ? "loadingImageValid" : "loadingImageUnvalid"}
      >
        <img alt="loadingImg" src="/images/productList/preloader.gif" />
      </div>
      <PromoBanner />
      <Nav />
      <header>
        <span className="shoesTitle">
          {HeaderImg.HeaderImg[queryId - 1].categoryName}
        </span>
        <img alt="headerImges" src={HeaderImg.HeaderImg[queryId - 1].imgUrl} />
      </header>
      <FilterHorizontalBar
        hideFilterValid={hideFilterVaild}
        handleFilter={this.handleFilter}
        cnt={wholeProducts.length}
      />
      <div className="bottomOfPage">
        <div
          className={
            hideFilterVaild
              ? "hideVerticalFilterValild"
              : "hideVerticalFilterUnvalild"
          }
        >
          <FilterVerticalBar
            filteringColor={(Color) => this.filteringColor(Color)}
            filteringSize={(size) => this.filteringSize(size)}
            filteringSilluet={(silluetEngName) =>
              this.filteringSilluet(silluetEngName)
            }
            filtering={(value) => this.filtering(value)}
          />
        </div>
        <main
          className={
            hideFilterVaild ? "HideProductListMain" : "ProductListMain"
          }
        >
          {products.length > 0 &&
            products.map((product, pdIdx) => {
              const {
                id,
                image_url,
                series_name,
                price,
                discount_rate,
                wishlist,
              } = product.main_image;
              const { color_image } = product;
              ProductMainImage.MainImg.push({
                idx: pdIdx,
                mainId: id,
                ImgUrl: image_url,
              });
              return (
                <ProductContainer
                  key={pdIdx}
                  hideFilterValid={hideFilterVaild}
                  mainId={id}
                  imgUrl={ProductMainImage.MainImg[pdIdx].ImgUrl}
                  name={series_name}
                  price={price}
                  colorList={color_image}
                  fixedImage={(colorEl) => this.fixedImage(colorEl, pdIdx)}
                  discount={discount_rate}
                  wishlist={wishlist}
                />
              );
            })}
        </main>
      </div>
      <Footer />
    </div>
  );
 }
// }

export default withRouter(ProductList);

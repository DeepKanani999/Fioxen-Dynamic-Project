"use client";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layouts/Layout";
import { reletedProductSlider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { products } from "../../products";
import { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const { slug } = params;
  const item = products.find((item) => item.slug === slug);

  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const isScrollingDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st;

      if (isScrollingDown && window.innerWidth >= 768) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+917779096777"; // Replace with your number
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/DV8NxwoPHecb7eh4A", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917779096777", "_blank"); // Replace with your number
  };

  const handleMail = () => {
    window.location.href = "mailto:info@plixon.in"; // Replace with your email
  };

  const handleFacebook = () => {
    window.open("https://facebook.com/yourprofile", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/yourprofile", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/yourprofile", "_blank");
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check this out!",
          text: "Have a look at this amazing website.",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  return (
    <Layout>
      <PageBanner title={"Product Detail"} />
      <section className="product-details-section pt-120 pb-115">
        <div
          className={`floating-social-bar ${showBar ? "visible" : ""}`}
          style={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            transform: `translate(-50%, ${showBar ? "0%" : "100%"})`,
            width: "50%",
            backgroundColor: "#fff",
            zIndex: 9999,
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease-in-out",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="d-none d-md-flex row"
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="row">
              <div className="col-auto">
                <button className="social-main-btn" onClick={handleCall}>
                  <img
                    src="/assets/images/icons/call.webp"
                    alt="Call"
                    style={{ height: "25px", width: "25px", marginRight: 10 }}
                  />
                  Call Us
                </button>
              </div>
              <div className="col-auto">
                <button className="social-main-btn" onClick={handleLocation}>
                  <img
                    src="/assets/images/icons/g-map.png"
                    alt="Location"
                    style={{ height: "30px", width: "30px", marginRight: 10 }}
                  />
                  Location
                </button>
              </div>
              <div className="col-auto">
                <button className="social-main-btn" onClick={handleWhatsApp}>
                  <img
                    src="/assets/images/icons/whatsapp.png"
                    alt="WhatsApp"
                    style={{ height: "30px", width: "30px", marginRight: 10 }}
                  />
                  WhatsApp
                </button>
              </div>
              <div className="col-auto">
                <button className="social-main-btn" onClick={handleMail}>
                  <img
                    src="/assets/images/icons/gmail.png"
                    alt="Mail"
                    style={{ height: "25px", width: "25px", marginRight: 10 }}
                  />
                  Mail
                </button>
              </div>
              <div className="col-auto">
                <button
                  className="social-rounded-btn"
                  onClick={handleFacebook}
                  style={{
                    padding: "8px",
                    backgroundColor: "#3A559F",
                    marginRight: "10px",
                  }}
                >
                  <img src="/assets/images/icons/facebook.png" alt="Facebook" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleInstagram}
                  style={{
                    padding: "8px",
                    backgroundColor: "#D03B98",
                    marginRight: "10px",
                  }}
                >
                  <img
                    src="/assets/images/icons/instagram.png"
                    alt="Instagram"
                  />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleLinkedIn}
                  style={{
                    padding: "8px",
                    backgroundColor: "#0B63BD",
                    marginRight: "10px",
                  }}
                >
                  <img src="/assets/images/icons/Linkedin.png" alt="LinkedIn" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleShare}
                  style={{ padding: "8px", backgroundColor: "#00ADFF" }}
                >
                  <img src="/assets/images/icons/share.png" alt="Share" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="product-details-wrapper mb-30 w-full"
            style={{ width: "100%" }}
          >
            <div className="row">
              {/* <ProductSlider /> */}
              <img
                src={item?.image}
                alt={item.name}
                width={390}
                height={290}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div
                className="col-lg-8 col-md-10"
                style={{ paddingLeft: "30px" }}
              >
                <div className="product-info mt-30">
                  {/* <ul className="ratings ratings-three">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>(3 Review)</span>
                    </li>
                  </ul> */}
                  <h3 className="title">{item?.name}</h3>
                  <p>{item?.detail}</p>
                  {/* <div className="quantity-cart mb-25">
                    <div className="quantity-input">
                      <div className="quantity-down" id="quantityDown">
                        <i className="ti-minus" />
                      </div>
                      <input
                        id="quantity"
                        type="text"
                        name="quantity"
                        defaultValue={1}
                      />
                      <div className="quantity-up" id="quantityUP">
                        <i className="ti-plus" />
                      </div>
                    </div>
                    <div className="cart-button">
                      <a href="#" className="main-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div> */}
                  <button
                    onClick={() => {}}
                    className="flex items-center gap-2 px-4 py-2 mt-1 mb-4 border border-gray-300 rounded-lg transition"
                    style={{
                      backgroundColor: "#24D07A",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <img
                      src="/assets/images/WhatsApp_Image.png"
                      alt="WhatsApp Icon"
                      style={{
                        height: "30px",
                        width: "30px",
                        marginRight: "8px",
                      }}
                    />
                    <span
                      className="underline text-white"
                      style={{ fontSize: "20px" }}
                    >
                      Get Price
                    </span>
                  </button>
                  <div className="product-meta">
                    {/* <a href="#" className="wishlist-btn">
                      Add to Wishlist
                    </a> */}
                    {/* <span className="variation">
                      <span className="title">Color:</span>
                      <span className="color color-1" />
                      <span className="color color-2" />
                      <span className="color color-3" />
                      <span className="color color-4" />
                    </span> */}
                    <span className="category">
                      <span className="title" style={{ fontSize: "22px" }}>
                        Usability:
                      </span>
                      {item?.usability?.map((val) => {
                        return (
                          <span
                            className="px-3 my-2 mr-3 py-2 rounded-full border border-gray-300 bg-white text-sm"
                            // style={{ fontSize: "20px" }}
                          >
                            {val}
                          </span>
                        );
                      })}
                    </span>
                    <span className="category">
                      <span className="title" style={{ fontSize: "22px" }}>
                        Specifications:
                      </span>
                      {item?.specification?.map((val) => {
                        return (
                          <span
                            className="px-3 my-2 mr-3 py-2 rounded-full border border-gray-300 bg-white text-sm"
                            // style={{ fontSize: "20px" }}
                          >
                            {val}
                          </span>
                        );
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-wrapper mb-45">
            <div className="row">
              <div className="col-lg-12">
                <Tab.Container defaultActiveKey={"description"}>
                  <div className="description-tabs">
                    <Nav as="ul" className="nav nav-tabs">
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          href="#description"
                          eventKey="description"
                        >
                          Description
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" href="#reviews" eventKey="reviews">
                          Reviews
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content className="tab-content mt-30">
                    <Tab.Pane eventKey="description">
                      <div className="description-content-box">
                        <p>{item?.discription}</p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                      <div className="products-review-wrapper mb-25">
                        <div className="products-review-area mb-45">
                          <h4 className="title">People Reviews</h4>
                          <ul className="review-list">
                            <li className="review">
                              <div className="review-thumb">
                                <img
                                  src="/assets/images/products/review-thumb-1.jpg"
                                  alt="review thumb"
                                />
                              </div>
                              <div className="review-content">
                                <h4>John F. Medina</h4>
                                <span className="date">25 May 2021</span>
                                <ul className="ratings ratings-four">
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                </ul>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <a href="#" className="reply">
                                  Reply
                                </a>
                              </div>
                            </li>
                            <li className="review">
                              <div className="review-thumb">
                                <img
                                  src="/assets/images/products/review-thumb-2.jpg"
                                  alt="review thumb"
                                />
                              </div>
                              <div className="review-content">
                                <h4>John F. Medina</h4>
                                <span className="date">25 May 2021</span>
                                <ul className="ratings ratings-five">
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                </ul>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <a href="#" className="reply">
                                  Reply
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="products-review-form">
                          <h4 className="title">Leave Your Reviews</h4>
                          <form onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form_group">
                                  <ul className="ratings mb-20">
                                    <li>
                                      <span>Your Rating</span>
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form_group">
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Full Name"
                                    name="name"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form_group">
                                  <input
                                    type="email"
                                    className="form_control"
                                    placeholder="Email Address"
                                    name="email"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form_group">
                                  <textarea
                                    className="form_control"
                                    placeholder="Write Message"
                                    name="comment"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form_group">
                                  <button className="main-btn">Submit</button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
          <div className="releted-product-area">
            <h3 className="releted-title">Related Product</h3>
            <Slider
              {...reletedProductSlider}
              className="releted-products-slider-one"
            >
              <div className="products-item products-item-one">
                <div className="product-img">
                  <img
                    src="/assets/images/details-images/product-detail-1.jpg"
                    alt="products Image"
                    style={{ height: "500px" }}
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/details-images/product-detail-1.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products-details">Hand Dumbell</Link>
                  </h3>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() => {}}
                      className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition"
                      style={{
                        backgroundColor: "#24D07A",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        // paddingBottom: "20px",
                      }}
                    >
                      <img
                        src="/assets/images/WhatsApp_Image.png"
                        alt="WhatsApp Icon"
                        style={{
                          height: "15px",
                          width: "15px",
                          marginRight: "8px",
                        }}
                      />
                      <span className="underline text-white">Get Price</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="products-item products-item-one">
                <div className="product-img">
                  <img
                    src="/assets/images/details-images/product-detail-2.jpg"
                    alt="products Image"
                    style={{ height: "500px" }}
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/details-images/product-detail-2.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products-details">Hand Dumbell</Link>
                  </h3>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() => {}}
                      className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition"
                      style={{
                        backgroundColor: "#24D07A",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        // paddingBottom: "20px",
                      }}
                    >
                      <img
                        src="/assets/images/WhatsApp_Image.png"
                        alt="WhatsApp Icon"
                        style={{
                          height: "15px",
                          width: "15px",
                          marginRight: "8px",
                        }}
                      />
                      <span className="underline text-white">Get Price</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="products-item products-item-one">
                <div className="product-img">
                  <img
                    src="/assets/images/details-images/product-detail-4.jpg"
                    alt="products Image"
                    style={{ height: "500px" }}
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/details-images/product-detail-4.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products-details">Hand Dumbell</Link>
                  </h3>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() => {}}
                      className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition"
                      style={{
                        backgroundColor: "#24D07A",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        // paddingBottom: "20px",
                      }}
                    >
                      <img
                        src="/assets/images/WhatsApp_Image.png"
                        alt="WhatsApp Icon"
                        style={{
                          height: "15px",
                          width: "15px",
                          marginRight: "8px",
                        }}
                      />
                      <span className="underline text-white">Get Price</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="products-item products-item-one">
                <div className="product-img">
                  <img
                    src="/assets/images/details-images/product-detail-7.jpg"
                    alt="products Image"
                    style={{ height: "500px" }}
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/details-images/product-detail-7.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products-details">Hand Dumbell</Link>
                  </h3>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() => {}}
                      className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition"
                      style={{
                        backgroundColor: "#24D07A",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        // paddingBottom: "20px",
                      }}
                    >
                      <img
                        src="/assets/images/WhatsApp_Image.png"
                        alt="WhatsApp Icon"
                        style={{
                          height: "15px",
                          width: "15px",
                          marginRight: "8px",
                        }}
                      />
                      <span className="underline text-white">Get Price</span>
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;

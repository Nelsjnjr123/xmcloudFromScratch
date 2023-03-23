import React from 'react';
import Link from 'next/link';

interface FeaturedCardProps {
  // Define props here
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({/* Destructure props here */}) => {
  return (
    <div className="featured-boxes-area">
                <div className="container">
                    <div className="featured-boxes-inner">
                        <div className="row m-0">
                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-fb7756">
                                        <i className="flaticon-piggy-bank"></i>
                                    </div>

                                    <h3>Transparent Pricing</h3>
                                    <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                    <Link href="/features-one">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                        <i className="flaticon-data-encryption"></i>
                                    </div>

                                    <h3>Fully Encrypted</h3>
                                    <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                    <Link href="/features-one">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-wallet"></i>
                                    </div>

                                    <h3>Instant Cashout</h3>
                                    <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                    <Link href="/features-one">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon">
                                        <i className="flaticon-shield"></i>
                                    </div>

                                    <h3>Safe and Secure</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                    <Link href="/features-one">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default FeaturedCard;

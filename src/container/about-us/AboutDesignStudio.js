import React from 'react';
import {Col, Row} from "react-bootstrap";
import thumb from "assets/img/about/about-6.jpg"
import SectionTitleOne from "components/section-title/SectionTitleOne";
import AboutThumbOne from "components/about-us/thumbnail/AboutThumbOne";

const AboutDesignStudio = () => {
    return (
        <div className="brook-service-area bg_color--10">
            <Row className="row--0 align-items-center">
                <Col xs={12} xl={6}>
                    <AboutThumbOne
                        className={"best-service"}
                        thumb={thumb}
                    />
                </Col>

                <Col xs={12} xl={6}>
                    <div
                        className="best-service plr--190 plr_lg--50 plr_lp--40 plr_md--50 plr_sm--30 mt_lg--40 mb_lg--40 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40">
                        <div className="content">
                            <SectionTitleOne
                                heading={"Best services save the world"}
                                separator={true}
                                separatorColor={'red'}
                            />
                            <div className="bk-separator--40"/>
                            <h6 className="heading heading-h6 font-16 line-height-1-88 font-medium body-color">
                                Our quality of service assessment involves controlling and managing resources by
                                setting priorities for specific types of clients and projects on the system.
                            </h6>
                            <div className="bk-separator--60 bk-separator_lg--30 bk-separator_md--20 bk-separator_sm--20"/>
                            <div className="brook-btn">
                                <a className="brook-btn bk-btn-red btn-sd-size btn-rounded space-between" href="/">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutDesignStudio;

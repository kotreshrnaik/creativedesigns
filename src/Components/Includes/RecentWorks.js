import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import image1 from '../Images/recentworks/image-1.png';
import image2 from '../Images/recentworks/image-2.png';
import image3 from '../Images/recentworks/image-3.png';
import image4 from '../Images/recentworks/image-4.png';
import image5 from '../Images/recentworks/image-5.png';
import image6 from '../Images/recentworks/image-6.png';
import image7 from '../Images/recentworks/image-7.png';
import image8 from '../Images/recentworks/image-8.png';

const RecentWorks = () => {
    const recentWorks = [
        {id:1, ImgUrl:image1, alt:"image1"},
        {id:2, ImgUrl:image2, alt:"image1"},
        {id:3, ImgUrl:image3, alt:"image1"},
        {id:4, ImgUrl:image4, alt:"image1"},
        {id:5, ImgUrl:image5, alt:"image1"},
        {id:6, ImgUrl:image6, alt:"image1"},
        {id:7, ImgUrl:image7, alt:"image1"},
        {id:8, ImgUrl:image8, alt:"image1"},
    ]
    return (
        <Container>
            <h4 className="text-dark font-bold">Recent Works</h4>
            <Row>
                {
                    recentWorks.map( (item) => (
                        <Col md={3} xs={6} key={item.id}>
                            <div className="text-center m-1">
                                <Image src={item.ImgUrl} alt={item.alt} className="img-fluid" />
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default RecentWorks

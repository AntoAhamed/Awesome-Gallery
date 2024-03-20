import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Image from './Image';

//Import all images from Images folder
import img1 from './Images/image-1.webp'
import img2 from './Images/image-2.webp'
import img3 from './Images/image-3.webp'
import img4 from './Images/image-4.webp'
import img5 from './Images/image-5.webp'
import img6 from './Images/image-6.webp'
import img7 from './Images/image-7.webp'
import img8 from './Images/image-8.webp'
import img9 from './Images/image-9.webp'
import img10 from './Images/image-10.jpeg'
import img11 from './Images/image-11.jpeg'
import img12 from './Images/1.jpg'
import img13 from './Images/2.jpg'
import img14 from './Images/3.jpg'
import img15 from './Images/4.jpg'
import img16 from './Images/5.jpg'
import img17 from './Images/6.jpg'
import img18 from './Images/7.jpg'
import img19 from './Images/8.jpg'
import img20 from './Images/9.jpg'
import img21 from './Images/10.jpg'
import img22 from './Images/11.jpg'

const Gallery = () => {
  //Include all images in images
  const [images, setImages] = useState([img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img18, img13, img14, img15, img16, img17, img12, img19, img20, img21, img22]);

  //To include the selected images
  const [selectedImages, setSelectedImages] = useState([]);

  //Set the first image as the default featured image
  const [featuredIndex, setFeaturedIndex] = useState(0);

  //To set images during drag and drop
  const moveImage = (fromIndex, toIndex) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    setImages(newImages);
  }

  //To handle checkbox changes
  const handleCheckboxChange = (index) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(index)) {
        return prevSelectedImages.filter((i) => i !== index);
      } else {
        return [...prevSelectedImages, index];
      }
    });
  }

  //To delete selected images
  const deleteSelectedImages = () => {
    const newImages = images.filter((image, index) => { return !selectedImages.includes(index) });
    setImages(newImages);
    setSelectedImages([]);
  }

  //Add image card
  const addImageCard = (
    <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
      <Card className="addImg">
        <Card.Body>
          {/*<p data-content='Add Image'></p>*/}
          <p className='text-secondary'>Add Image</p>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <div className="gallery-container">
      <Row>
        {
          /*If the length of selectedImages is greater than 0 then the selected info and the delete button will be shown 
          otherwise the heading will be shown*/
          selectedImages.length > 0 ?
            (
              <div className="selection-info">
                <div>
                  {selectedImages.length === 1 ? <p>{selectedImages.length} image selected</p> : <p>{selectedImages.length} images selected</p>}
                </div>
                <div className="delete-button-container">
                  <Button variant="danger" onClick={deleteSelectedImages}>Delete Selected</Button>
                </div>
              </div>
            ) : <h3 className='heading'>Awesome Gaming Gallery 2024</h3>
        }
      </Row>
      <Row>
        {//Here map function is used
          images.map((image, index) => {
            return (<Image key={index} index={index} image={image} moveImage={moveImage} handleCheckboxChange={handleCheckboxChange}
              isFeatured={index === featuredIndex} isSelected={selectedImages.includes(index)} />)
          })}
        {//It will be shown at the last position of all images
          addImageCard}
      </Row>
    </div>
  )
}

export default Gallery

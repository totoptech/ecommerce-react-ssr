import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { ImageBox } from '../components/GlobalComponents';
import Carousel, { Modal, ModalGateway } from "react-images";

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  card: {
    boxShadow: 'hsl(0, 0%, 80%) 0 0 16px'
  },
  product_name: {
    backgroundColor: 'rgba(200, 200, 200, 0.8)',
    color: '#555',
    fontSize: '20px',
    fontWeight: 600,
    display: 'block',
    padding: '10px'
  },
  product_price: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: '#444',
    color: '#fff',
    padding: '5px 9px',
    fontSize: '18px',
    fontWeight: 700,
  }
});

const noImagesArray = [
  {
    href: 'https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140633878.jpg'
  }
]

const HighLitedPad = props => {
  const classes = useStyles();
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { data } = props;

  const openLightBox = () => {
    setViewerIsOpen(true);
  };

  const closeLightBox = () => {
    setViewerIsOpen(false);
  }

  let price = 0;

  if (data.price)
    price = data.price.regular;
  else if(data.priceRange)
    price = data.priceRange.selling.high;

  const images = data.images.length ? data.images : noImagesArray;

  return (
    <Grid item md={4} className={classes.root}>
      <Card className={classes.card}>
          <ImageBox imageSrc={data.hero.href} onClick={openLightBox}>
            <label className={classes.product_name}>{data.name}</label>
            <label className={classes.product_price}>$ {price}</label>
          </ImageBox>
      </Card>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={0}
              views={images.map(image => ({
                src: image.href,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Grid>
  );
};

HighLitedPad.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HighLitedPad;

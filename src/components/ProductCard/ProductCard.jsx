import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import Image from "material-ui-image";

export default function ProductCard({
  product = null,
  onAddToCart = () => {},
}) {
  return (
    <Card>
      <CardContent>
        <Image
          alt={product.name}
          src={"https://" + product.imageUrl}
          title={product.name}
          style={{ padding: 0, height: 200, textAlign: "center" }}
          imageStyle={{ width: 200, position: "static" }}
          disableSpinner
        />
        <Typography gutterBottom variant="h6" component="p" color="primary">
          {product.name}
        </Typography>
        <Typography style={{ fontWeight: 500 }} color="secondary" component="p">
          {product.price.current.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
        <Button size="small" color="secondary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}

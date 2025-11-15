import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Products.css'

const Products = ({ products, carts, setCarts }) => {
    return (
        <div className='products-container'>
            {products && products.length > 0 ? (
                <div className="products-items-container">
                    {products.map((product) => {
                        const isAdded = carts.some((cart) => cart.id === product.id);

                        return (
                            <Card key={product.id} className='product-card'>
                                <Card.Img variant="top" src={product.url} className="card-img-top" />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.title}</Card.Title>
                                    <Card.Text className="card-text">${product.price.toFixed(2)}</Card.Text>

                                    {isAdded ? (
                                        <span className='badge bg-success p-2'>✅ Added to Cart</span>
                                    ) : (
                                        <Button
                                            variant="outline-primary"
                                            onClick={() => {
                                                setCarts([...carts, product]);
                                            }}
                                        >
                                            ➕ Add to Cart
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            ) : (
                <p className="text-center">No products available.</p>
            )}
        </div>
    );
};

export default Products;
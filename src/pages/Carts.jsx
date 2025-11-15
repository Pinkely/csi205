import './Carts.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carts = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((prev, cart) => prev + cart.price, 0).toFixed(2);

    return (
        <div className='cart-container'>
            {carts.length > 0 ? (
                <>
                    <div className="carts-items-container">
                        {carts.map((cart) => {
                            return (
                                <Card key={cart.id} className='product-card'>
                                    <Card.Img variant="top" src={cart.url} className="card-img-top" />
                                    <Card.Body>
                                        <Card.Title className="card-title">{cart.title}</Card.Title>
                                        <Card.Text className="card-text">${cart.price.toFixed(2)}</Card.Text>
                                        <Button
                                            variant="outline-danger"
                                            onClick={() => {
                                                setCarts(carts.filter((c) => c.id !== cart.id));
                                            }}
                                        >
                                            🗑️ Remove Item
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                    {/* Summary Section */}
                    <div className="cart-summary">
                        <h4>
                            Items: {carts.length} items - Total Price: <span className="text-success">${totalPrice}</span>
                        </h4>
                        <Button variant='success'>
                            💳 Proceed to Checkout
                        </Button>
                    </div>
                </>
            ) : (
                 <div className="cart-summary no-items">
                    <h4>Your Cart is Empty 🛒</h4>
                    <p>Start adding products from the product list!</p>
                </div>
            )}
        </div>
    );
};

export default Carts;
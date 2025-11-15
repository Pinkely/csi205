import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { verifyUser } from '../data/user.jsx';

// Custom CSS Style
const pinkThemeStyles = {
    card: {
        borderRadius: '20px', // เพิ่มความโค้งมน
        border: '3px solid #ffc0cb', // เพิ่มขอบ
        minWidth: '350px', // *** เพิ่ม min-width ให้ใหญ่ขึ้นตามต้องการ ***
    },
    cardHeader: {
        backgroundColor: '#ffc0cb',
        color: '#880044',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.6rem', // เพิ่มขนาด font
        padding: '1.2rem 0.5rem', // เพิ่ม padding
        borderTopLeftRadius: '17px',
        borderTopRightRadius: '17px',
    },
    loginButton: {
        backgroundColor: '#ff69b4',
        borderColor: '#ff69b4',
        color: 'white',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        borderRadius: '12px', // เพิ่มความโค้งมนของปุ่ม
        padding: '1rem 1rem', // เพิ่ม Padding ให้ปุ่มสูงขึ้น
        fontSize: '1.2rem', // เพิ่มขนาด font ของปุ่ม
    },
    labelStyle: { 
        color: '#ff69b4', 
        fontWeight: 'bold',
        marginBottom: '0.6rem', // เพิ่มระยะห่าง
        fontSize: '1.1rem', // เพิ่มขนาด font ของ Label
        display: 'block',
        whiteSpace: 'nowrap', 
    },
    inputControl: {
        fontSize: '1.1rem', // เพิ่มขนาด font ในช่อง Input
        padding: '0.8rem 1rem', // เพิ่ม padding ในช่อง Input
        borderRadius: '8px',
    },
    cardFooter: {
        backgroundColor: '#fff0f5',
        fontSize: '1rem',
        padding: '0.8rem',
        borderBottomLeftRadius: '17px',
        borderBottomRightRadius: '17px',
    }
};

function Login({ setToken, setRole }) {
    const userRef = useRef();
    const passRef = useRef();

    const handleLogin = () => {
        const user = userRef.current.value.trim();
        const pass = passRef.current.value.trim();
        
        userRef.current.value = '';
        passRef.current.value = '';

        const userInfo = verifyUser(user, pass);

        if (userInfo === null) {
            alert('❌ ผิดพลาด: ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้องนะคะ 🥺');
            userRef.current.focus();
        } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                {/* ใช้ Col ที่ค่อนข้างกว้างขึ้น (lg={6}) */}
                <Col xs={12} sm={8} md={6} lg={6}> 
                    <Card style={pinkThemeStyles.card} className="shadow-lg border-0">
                        <Card.Header style={pinkThemeStyles.cardHeader}>
                            <span style={{ whiteSpace: 'nowrap' }}>
                                💖 เข้าสู่ระบบ (Login) Na 💖
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                {/* Username Field */}
                                <Form.Group className="mb-4" controlId="username">
                                    <Form.Label style={pinkThemeStyles.labelStyle}>
                                        🎀 ชื่อผู้ใช้ (Username)
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder='พิมพ์ชื่อผู้ใช้ตรงนี้เลยนะ (user)'
                                        ref={userRef}
                                        onKeyDown={handleKeyDown}
                                        autoFocus
                                        style={pinkThemeStyles.inputControl}
                                    />
                                </Form.Group>

                                {/* Password Field */}
                                <Form.Group className="mb-4" controlId="password">
                                    <Form.Label style={pinkThemeStyles.labelStyle}>
                                        🔑 รหัสผ่าน (Password)
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder='พิมพ์รหัสผ่านตรงนี้เลยนะ (pass)'
                                        ref={passRef}
                                        onKeyDown={handleKeyDown}
                                        style={pinkThemeStyles.inputControl}
                                    />
                                </Form.Group>

                                {/* Login Button */}
                                <div className="d-grid gap-2 mt-4">
                                    <Button 
                                        style={pinkThemeStyles.loginButton} 
                                        onClick={handleLogin}
                                        size="lg"
                                    >
                                        ✨ ล็อกอินเลย! ✨
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center" style={pinkThemeStyles.cardFooter}>
                            ~ Have a sweet day! ~
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
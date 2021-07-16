import React, { useEffect } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import './Register.css'

const Register = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [addr, setAddr] = React.useState("");
    const [zip, setZip] = React.useState();
    const [submit, setSubmit] = React.useState(true)


    // let isValid = true
    useEffect(() => {
        // let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        // if (!pattern.test({email})) {
        //     isValid = false;
        // }

    })


    const emailValid = () => {

    }



    return (
        <div className="card">
            <h1 style={{ textAlign: 'center' }}>Registration form</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)}
                            value={email} type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={e => setPassword(e.target.value)}
                            value={password} type="password"
                            placeholder="Password"
                            required />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={e => setAddr(e.target.value)}
                        value={addr}
                        placeholder="1234 Main St"
                        required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control onChange={e => setZip(e.target.value)}
                        placeholder="Apartment, studio, or floor"
                        required />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        {/* <Form.Select>
                            <option value="1">Choose1...</option>
                            <option value="2">Chooese2...</option>
                        </Form.Select> 
                    </Form.Group> */}

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required minLength="5" maxLength="5" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary"
                    type="submit"
                // disabled={submit}
                >
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Register

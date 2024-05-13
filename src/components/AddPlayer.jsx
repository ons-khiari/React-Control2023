import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddPlayer({ onFormSubmit }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(username);
        setUsername('');
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Participant
            </Button>
        </Form>
    );

}

export default AddPlayer;
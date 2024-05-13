import React from 'react';
import { useParams } from 'react-router-dom';
import competitionsData from '../api/db.json';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addParticipant } from '../redux/ParticipantSlice';
import AddPlayer from './AddPlayer';

function CompetitionDetails() {
    const { id } = useParams();
    const competitionId = parseInt(id, 10);
    const competition = competitionsData.competitions.find(competition => parseInt(competition.id, 10) === competitionId);

    const [showForm, setShowForm] = useState(false);
    const [numParticipants, setNumParticipants] = useState(competition.participants);
    const participants = useSelector(state => state.participants);
    const dispatch = useDispatch();

    const handleParticipateClick = () => {
        setShowForm(true);
    };
    const handleFormSubmit = (username) => {
        const isUsernameExists = participants.some(participant => participant.username === username);
        if (isUsernameExists) {
            console.log("Username already exists");
            return;
        }
        dispatch(addParticipant({ username }));
        setNumParticipants(prevNumParticipants => prevNumParticipants - 1);
        setShowForm(false);
    };

    return (
        <>
            {competition ? (
                <Card>
                    <Card.Body>
                        <Card.Title>{competition.title}</Card.Title>
                        <p>name: {competition.name}</p>
                        <p>fees: {competition.fees}</p>
                        <p>date: {competition.date}</p>
                        <p>participant: {numParticipants}</p>
                        <p>description: {competition.description}</p>
                        <Button variant="primary" onClick={handleParticipateClick} disabled={competition.participants === 0} >Participate</Button>
                        {showForm && <AddPlayer onFormSubmit={handleFormSubmit} />}

                        <h2>Participants</h2>
                        <ul>
                            {participants.map(participant => (
                                <li key={participant.username}>
                                    {participant.username}
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>

            ) : (
                <p>Competition not found</p>
            )}
        </>
    );
}

export default CompetitionDetails;

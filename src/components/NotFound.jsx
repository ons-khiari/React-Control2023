import React, { useState, useEffect } from 'react';

function NotFound() {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showMessage && (
                <div>
                    <h1>This page does not exist</h1>
                </div>
            )}
        </>
    );
}

export default NotFound;

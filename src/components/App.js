import React from 'react';
import Logo from './PullRequest';
import Button from "react-bootstrap/es/Button";
import Row from "react-bootstrap/es/Row";

const App = () => {
    return (
        <div className="App">
            <Button variant="success" size="lg" style={{margin:30}}>
                <div>
                    <Row style={{margin:10}}> <Logo/> <h1>Pull Request Your Job!</h1> </Row>
                </div>
            </Button>
        </div>
    );
};

export default App;

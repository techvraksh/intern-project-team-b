import React from 'react';
import { GitHubIcon } from '../icons/index';

const About = () => {
    
    return ( 
        <>
            <div className="text-center mt-5">
                <h1>TechVraksh</h1>
                <p>This project was built for practice purposes using <strong>React</strong>.</p>

                <a className="btn btn-primary" href="https://github.com/orgs/techvraksh/dashboard">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Visit Repo.<br/></span></a>
            </div>
        </>
     );
}

export default About;
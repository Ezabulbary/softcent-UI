import React from 'react';
import './Workflow.css';
import Underline from '../../../Images/underline.png';
import WorkflowImage from '../../../Images/workflow/workflow.png';

const Workflow = () => {
    return (
        <section id='workflow-id'>
            <div className='workflow'>
                <div>
                    <h1 className='workflow-page-title'>Workflow</h1>
                    <img className='workflow-underline' src={Underline} alt='underlineImage' />
                </div>

                <div className="workflow-container">
                    <div className="workflow-detail">
                        <div>
                            
                        </div>
                        <div></div>
                    </div>

                    <div className="workflow-image">
                        <img src={WorkflowImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
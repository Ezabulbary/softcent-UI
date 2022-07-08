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
                        <div className='workflow-first-list'>
                            <ol className='workflow-first-list-title'>1. Defining Goal</ol>
                            <p className='workflow-first-list-detail'>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</p>
                        </div>
                        <div className='workflow-list'>
                            <ol>2. Product Design</ol>
                            <ol>3. Development</ol>
                            <ol>4. Testing</ol>
                            <ol>5. Product Release</ol>
                            <ol>6. Maintenance Support</ol>
                        </div>
                    </div>

                    <div>
                        <img className="workflow-image" src={WorkflowImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
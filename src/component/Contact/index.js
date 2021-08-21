import React from 'react';
import { ContactSection , ContactTiltle , Span , Form , FormInput , InputText , InputEmail , InputSub , TextArea , InputSubmit} from './style.js';
import Footer from '../Index/Footer/index.js';
const Contact = () => {
 return (
     <React.Fragment>
        <ContactSection>
            <div className="container">
                <ContactTiltle><Span>Drop </Span>Me A line</ContactTiltle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" /> 
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputSub type="text" className="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection>
        <Footer />
    </React.Fragment>

 )
}

export default Contact
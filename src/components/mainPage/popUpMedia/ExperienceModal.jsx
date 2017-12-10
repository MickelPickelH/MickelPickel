import React from 'react';
import Modal from "react-modal"

const style = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class ExperienceModal extends React.Component{
    constructor(props){
        super(props);
        this.afterOpenModal = this.afterOpenModal.bind(this);
    }

    afterOpenModal(){
        // references are now sync'd and can be accessed.
    }

    render(){
        return (
            <div>
                <Modal
                    isOpen={this.props.open}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.props.close}
                    style={style}
                    contentLabel="Example Modal"
                >

                    <h2 >Hello</h2>
                    <button onClick={this.props.closes}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        )
    }

}

export default ExperienceModal;
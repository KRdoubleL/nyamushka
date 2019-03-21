import React, {Component} from 'react';
import offerService from '../../api/offer.service'

require('./mainOffer.scss')

class MainOffer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offer: null
        }
    }

    async componentDidMount() {

        // User offerService with Mocking offer.json
        let { offer } =  await offerService.getAll()
        console.log(offer)
        this.setState({
            offer: offer
        })
    }

    render() {
        return (
            <div className="Main-Offer">
                {this.state.offer ? (
                    <ul>
                        <li>Brand: { this.state.offer.brand }</li>
                        <li>Name: { this.state.offer.name }</li>
                        <li>Portion: { this.state.offer.portion }</li>
                        ...
                    </ul>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        )
    }
}

export default MainOffer;

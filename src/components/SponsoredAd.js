import React, { Component } from 'react';
import ad from '../assets/images/ad.jpg';
export class SponsoredAd extends Component {
    static displayName = SponsoredAd.name;

    render() {
        return (
            <div class="sponsers mt-0">
                <a href="#ad-banner"><img src={ad} alt="" class="img-fluid radius-image-full" /></a>
                <a href="#advertise" class="text-center d-block text-uppercase">Advertise with us </a>
            </div>
            );
    }
}
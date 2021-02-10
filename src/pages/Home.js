import React, { Component } from 'react';
import { Category } from '../components/Category';
import { EditorPick } from '../components/EditorPick';
import { LatestStories } from '../components/LatestStories';
import { OurVoices } from '../components/OurVoices';
import { TopReads } from '../components/TopReads';
import { Subscribe } from '../components/Subscribe';
import { Footer } from '../components/Footer';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                 <br/><br/>
                <Category />
                <br/><br/>
                <EditorPick />
                <br/><br/>
                <LatestStories />
                <br/><br/>
                <OurVoices />
                <br/><br/>
                <TopReads />
                <br/><br/>
                <Subscribe />

                <Footer />
            </div>
        );
    }
}

// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classnames';

// Store
import { store } from '../../init/store';

// Instruments
import Styles from './styles.m.css';

// Actions
import { showNextPhoto, showPrevPhoto, showSelectedPhoto } from './../../bus/gallery/actions';

@hot(module)
export default class Gallery extends Component {
    _showNextPhoto = () => {
        store.dispatch(showNextPhoto());
        this.forceUpdate()
    }
    _showPrevPhoto = () => {
        store.dispatch(showPrevPhoto());
        this.forceUpdate()
    }
    _showSelectedPhoto = (event) => {
        store.dispatch(showSelectedPhoto(event.target.value));
        this.forceUpdate()
    }
    render () {
        const { gallery: { photos, selectedPhotoIndex } } = store.getState();
        // const state = store.getState();
        const photo = photos.find( ( _, index ) => index === selectedPhotoIndex );

        const buttonActiveClass1 = cx({ [Styles.buttonActive]: selectedPhotoIndex === 0 });
        const buttonActiveClass2 = cx({ [Styles.buttonActive]: selectedPhotoIndex === 1 });
        const buttonActiveClass3 = cx({ [Styles.buttonActive]: selectedPhotoIndex === 2 });
        const buttonActiveClass4 = cx({ [Styles.buttonActive]: selectedPhotoIndex === 3 });

        return (
            <section className = { Styles.gallery }>
                <img src = { photo.url } />
                <div>
                    <button onClick={ this._showPrevPhoto }>←</button>
                    <button onClick={ this._showSelectedPhoto } className={ buttonActiveClass1 } value = '0'>1</button>
                    <button onClick={ this._showSelectedPhoto } className={ buttonActiveClass2 } value = '1'>2</button>
                    <button onClick={ this._showSelectedPhoto } className={ buttonActiveClass3 } value = '2'>3</button>
                    <button onClick={ this._showSelectedPhoto } className={ buttonActiveClass4 } value = '3'>4</button>
                    <button onClick={ this._showNextPhoto }>→</button>
                </div>
            </section>
        );
    }
}

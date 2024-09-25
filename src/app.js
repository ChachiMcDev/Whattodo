import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const root = createRoot(document.getElementById('app'));
root.render(<IndecisionApp />);


class OldSyntax {
    constructor() {
        this.name = 'mike';
    }
}

const oldsyntax = new OldSyntax();
console.log(oldsyntax)

class NewSyntax {
    name = 'yourmon';
}

const newsyn = new NewSyntax();
console.log(newsyn)
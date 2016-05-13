import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import App from './App/App.jsx';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<App />)
        })
    }
});

FlowRouter.route('/new-note', {
    action(){
        mount(MainLayout, {
            content: (<App />)
        })
    }
});
import React from 'react';
import {List, Button} from 'semantic-ui-react';
import {ReactiveComponent} from 'oo7-react';
import {runtime, calls} from 'oo7-substrate';
import Identicon from 'polkadot-identicon';

export class TemplateModule extends ReactiveComponent {
	constructor () {
		super([], {
			// addressBook: addressBook(),
		})
	}

	readyRender () {
        return <Button size='small' onClick={() => calls.template.do_something()}>Do Something</Button>
	}
}

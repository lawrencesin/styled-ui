import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './check-box/story.jsx';
import checkboxTheme from './check-box/alternate-theme.less';
import DemoInput from './demo-input/story.jsx';
import demoInputTheme from './demo-input/alternate-theme.less';
import DemoButton from './demo-button/story.jsx';
import demoButtonTheme from './demo-button/alternate-theme.less';

storiesOf('Button', module)
	.add('with text', () => <DemoButton onClick={action('clicked')}>Toggle shadow</DemoButton>)
	.add('with alternate theme', () => (
		<DemoButton onClick={action('clicked')} theme={demoButtonTheme}>
			Toggle shadow
		</DemoButton>
	))
	.add('with some emoji', () => (
		<DemoButton onClick={action('clicked')}>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</DemoButton>
	));

storiesOf('Checkbox', module)
	.add('with text', () => <Checkbox />)
	.add('with alternate theme', () => <Checkbox theme={checkboxTheme} />);

storiesOf('Input', module)
	.add('with instant validation', () => <DemoInput />)
	.add('with delayed validation', () => <DemoInput validationDelay={100} />)
	.add('with alternate theme', () => <DemoInput theme={demoInputTheme} />);
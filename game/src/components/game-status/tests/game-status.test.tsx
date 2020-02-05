import React from 'react';
import { shallow } from 'enzyme';

import GameStatus from '../game-status';
import IGameStatusProps from '../interfaces/game-status-props';

describe('Info Board', () => {
	it('Should render correctly', () => {
		const defaultProps: IGameStatusProps = {
			messages: [],
			handleSendMessage: jest.fn(),
		};

		const gameStatus = shallow(<GameStatus {...defaultProps} />);
		expect(gameStatus).toMatchSnapshot();
	});
});
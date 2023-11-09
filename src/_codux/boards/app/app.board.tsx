import { createBoard } from '@wixc3/react-board';
import { App } from '../../../app';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1300,
        windowHeight: 999,
        canvasMargin: {
            left: 0,
            right: 0,
        },
    },
    isSnippet: true,
});

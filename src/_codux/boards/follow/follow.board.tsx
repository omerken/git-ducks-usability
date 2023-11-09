import { createBoard } from '@wixc3/react-board';
import { ConnectButton } from '../../../components/pages/top-bar/connect-button/connect-button';

export default createBoard({
    name: 'Follow',
    Board: () => <ConnectButton />,
    environmentProps: {
        windowWidth: 300,
        windowHeight: 300,
        canvasWidth: 240
    },
    isSnippet: true,
});

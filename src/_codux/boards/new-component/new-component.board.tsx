import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/footer';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 450,
    },
});

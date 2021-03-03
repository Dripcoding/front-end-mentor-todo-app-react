import { render } from '@testing-library/react';
import App from '../containers/App/App';

describe("App", () => {
    it("matches snapshot", () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    })
})

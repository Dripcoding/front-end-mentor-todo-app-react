import { render } from '@testing-library/react';
import App from '../containers/App/App';

describe("App", () => {
    it("matches snapshot", () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    })

    it("renders correctly", () => {
        const { getByRole, getByTestId } = render(<App />);

        const todoHeader = getByRole('heading');
        expect(todoHeader).toBeInTheDocument();
        expect(todoHeader).toBeVisible()
        
        const sunIcon = getByTestId('SUN-TOGGLE-ICON');
        expect(sunIcon).toBeInTheDocument();
        expect(sunIcon).toBeVisible();
    })
})

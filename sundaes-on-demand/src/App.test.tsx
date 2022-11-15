import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import { describe, it } from 'vitest';

// Components
import App from './App';

describe('Testing the sundae app', () => {
    it('Renders Hello World to the world', () => {
        render(<App />);

        const appDiv = screen.getByRole('heading');

        expect(appDiv).toBeInTheDocument();
    });
});

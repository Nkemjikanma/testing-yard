import { screen, render } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';

// components
import SummaryForm from '../SummaryForm';
import App from '../../../App';

describe('Testing that the SummaryForm component works as expected', () => {
    test('Testing that checking the checkbox is not checked and button is diabled', () => {
        const { container } = render(<SummaryForm />);
        logRoles(container);

        const handleCheckBox = screen.getByRole('checkbox');
        const handleButton = screen.getByRole('button', {
            name: 'confirm order',
        });

        expect(handleCheckBox).not.toBeChecked();
        expect(handleButton).toBeDisabled();
    });

    test('Check box enables or diables the button', async () => {
        //* Setting up user instance
        const user = userEvent.setup();

        render(<SummaryForm />);

        const handleButton = screen.getByRole('button', {
            name: 'confirm order',
        });
        const handleCheckBox = screen.getByRole('checkbox');

        await userEvent.click(handleCheckBox);
        expect(handleButton).toBeEnabled();

        await userEvent.click(handleCheckBox);
        expect(handleButton).toBeDisabled();
    });

    test('Response to hove and unhover', async () => {
        const user = userEvent.setup();
        render(<SummaryForm />);

        //popover is hidden
        const hiddenPopup = screen.queryByText(
            'No ice cream will actually be delivered'
        );
        expect(hiddenPopup).not.toBeInTheDocument();

        //popover appears on hover
        const termsAndConditions = screen.getByText("Terms and Condtions");
        await user.hover(termsAndConditions);
        const popup = screen.queryByText(
            'No ice cream will actually be delivered'
        );
        expect(popup).toBeInTheDocument();

        //popover disappears on unhover
        await user.unhover(termsAndConditions);
        expect(popup).not.toBeInTheDocument();
    });
});

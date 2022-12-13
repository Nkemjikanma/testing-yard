import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Options from '../Options';

test('Update scoop subtotal when the scoop changes', async () => {
    const user = userEvent.setup();
    render(<Options optionType="scoops" />);

    // test what subtotal starts out as $0.00
    const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false });

    expect(scoopSubtotal).toHaveTextContent('0.00');

    // test one option and it updates - update vanilla scoops to 1 and then check subtotal again
    const vanillaInput = await screen.findByRole('spinButton', {
        name: 'Vanilla',
    });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');
    expect(scoopSubtotal).toHaveTextContent('2.00');

    // update chocolate scoops to 2 and check subtotal
    const chocolateInput = await screen.findByRole('spinButton', {
        name: 'Chocolate',
    });

    await user.clear(chocolateInput);
    await user.type(vanillaInput, '2');
    expect(chocolateInput).toHaveTextContent('6.00');
});

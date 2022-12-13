import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';

//imports so we can overide the default handlers and test for errors
import { rest } from 'msw';
import { server } from '../../../mocks/server';

//use .only if yyou want to run only one test
test('Handles errors for scoops and toppings routes', async () => {
    //reset handlers take handlers as args and resets any handlers taht has those endpoints

    // handler to return error for scoops and toppings
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
            res(ctx.status(500))
        ),
        rest.get('http://localhost/3030/scoops', (req, res, ctx) =>
            res(ctx.status(500))
        )
    );

    render(<OrderEntry />);

    waitFor(async () => {
        const alerts = await screen.findAllByRole('alert');
        expect(alerts).toHaveLength(2);
    });
});

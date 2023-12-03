import express, { Request, Response } from 'express'
import path from 'path'
import { renderToString } from 'react-dom/server';
import { HelloComponent } from './HelloComponent'

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req: Request, res: Response) => {

    /* render react on the server */
    const html = renderToString(<HelloComponent name="Stepan" />);
    const content = `<html><body>
        ${html}
        </body></html>`

    res.send(content)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
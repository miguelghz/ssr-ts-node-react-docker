import {renderToString} from "react-dom/server";
import {router} from "../router";

export const renderClient = () =>
    templateClient(renderToString(router(true)));


const templateClient = (body:string)=>
    `
    <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Node server side rendering with TypeScript + React</title>
          </head>
          <body>
            <div id="root">
                ${body}
            </div>
          <script type="text/javascript" src="client.js"></script></body>
        </html>
    `;



import * as React from "react";
import * as ReactDOM from "react-dom";
import {router} from "../router";

import './index.scss';

ReactDOM.hydrate(
    router(), document.getElementById("root")
);
import ReactDOM from 'react-dom/client'
import {Root} from "./components/app/Root.jsx";
import './styles/global.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "@/dev/index.js";

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(<DevSupport ComponentPreviews={ComponentPreviews}
                                             useInitialHook={useInitial}
>
    <Root/>
</DevSupport>)

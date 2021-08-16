import React, {useEffect} from 'react';
import { useAjax} from 'react-use-ajax';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MdFile = ({url}) => {

    const [handler, {data}] = useAjax({
        url
    });

    useEffect(handler, [url]);


    return <ReactMarkdown
            skipHtml
            remarkPlugins={[remarkGfm]}
            >{data ?? (url ? "_loading..._" : "_nothing selected_")}</ReactMarkdown>
}


export { MdFile }
"use client";

import { React, use, Suspense, useState } from "react";

function fetchMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1000, "⚛️"));
}

//promise resolved and display in Suspense
function Message({ messagePromise }) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent} </p>;
}

//check msg
function MessageContainer({ messagePromise }) {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}

export default function HookUse() {
  const [messagePromise, setmessagePromise] = useState(null);
  const [show, setShow] = useState(false);

  function download() {
    setmessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return <button onClick={download}>Download Jawan</button>;
  }
}

// export const HookUse = () => {
//     return(
//         <div>
//             <Suspense fallback={<p>⌛ Downloading......⌛</p>}>
//                 <Message messagePromise={messagePromise} />
//             </Suspense>
//         </div>
//     )
// }

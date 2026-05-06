import React from "react"; 
export const Textarea = React.forwardRef((props, ref) => (
  <textarea
    ref={ref}
    className={`p-2 border rounded ${props.className}`}
    {...props}
  />
));

Textarea.displayName = "Textarea";

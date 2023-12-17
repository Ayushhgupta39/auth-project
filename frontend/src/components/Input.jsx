import { TextField } from "@radix-ui/themes";
import React from "react";

function Input() {
  return (
    <div className="w-1/2">
      <TextField.Root>
        <TextField.Input placeholder="Enter your name..." />
      </TextField.Root>
    </div>
  );
}

export default Input;

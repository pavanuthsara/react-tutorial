import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)} //another simple way  to implement a function , because this function only uses one time
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}

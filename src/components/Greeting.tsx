import { useState } from "preact/hooks";

interface GreetingProps {
  messages: string[];
}

export default function Greeting(props: GreetingProps) {
  const randomMessage = () =>
    props.messages[Math.floor(Math.random() * props.messages.length)];

  const [greeting, setGreeting] = useState(props.messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
